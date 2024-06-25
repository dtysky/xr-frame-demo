export default /* glsl */ `
precision highp float;

#define WX_USE_BRDFLUT true
#define RECIPROCAL_PI 0.3183098861837907
#define EPSILON_ATAN 1e-2

uniform float u_gameTime;
uniform highp mat4 u_world;
uniform highp mat4 u_view;
uniform highp mat4 u_projection;
uniform highp mat4 u_viewInverse;
uniform sampler2D u_normalTexture;
uniform vec3 u_mainLightDir;
uniform vec3 u_waterColor;
uniform vec4 u_mainLightColorIns;
uniform float u_envRotation;
uniform sampler2D u_specularEnvMap;

varying vec4 v_worldPosition;
varying vec4 v_viewPosition;
varying vec3 v_normal;

#ifdef WX_USE_COLOR_0
varying highp vec3 v_Color;
#endif

#ifdef WX_USE_NORMAL
varying highp vec3 v_Normal;

#ifdef WX_USE_TANGENT
varying highp vec3 v_Tangent;
varying highp vec3 v_BitTangent;
#endif
#endif

#ifdef WX_USE_MAIN_DIR_LIGHT
varying highp vec3 v_MainLightDir;
#endif

#ifdef WX_USE_ADD_LIGHTS
varying highp vec3 v_AddLightsDir[WX_ADD_LIGHTS_COUNT];
varying highp vec3 v_AddLightsPos[WX_ADD_LIGHTS_COUNT];
#endif


vec4 getNoise(vec2 uv) {
    vec2 uv0 = (uv / 103.0) + vec2(u_gameTime / 17.0, u_gameTime / 29.0);
    vec2 uv1 = uv / 107.0 - vec2(u_gameTime / -19.0, u_gameTime / 31.0);
    vec2 uv2 = uv / vec2(8907.0, 9803.0) + vec2(u_gameTime / 101.0, u_gameTime / 97.0);
    vec2 uv3 = uv / vec2(1091.0, 1027.0) - vec2(u_gameTime / 109.0, u_gameTime / -113.0);
    vec4 noise = texture2D(u_normalTexture, uv0) +
            texture2D(u_normalTexture, uv1) +
            texture2D(u_normalTexture, uv2) +
            texture2D(u_normalTexture, uv3);
    return noise * 0.5 - 1.0;
}

void lightStrength(const vec3 surfaceNormal, const vec3 lightDirection, const vec3 eyeDirection, float shineFactor, float specularFactor, float diffuseFactor, inout vec3 diffuseColor, inout vec3 specularColor) {
    vec3 reflection = normalize(reflect(-lightDirection, surfaceNormal));
    float strength = max(0.0, dot(eyeDirection, reflection));
    specularColor += pow(strength, shineFactor)  * u_mainLightColorIns.rgb * specularFactor;
    diffuseColor += max(dot(lightDirection, surfaceNormal), 0.0) * u_mainLightColorIns.rgb * diffuseFactor;
}

mat3 rotationMatY3(float angle) {
	float s = sin(angle);
	float c = cos(angle);
	return mat3(
		c, 0.0, -s,
		0.0, 1.0, 0.0,
		s, 0.0, c
	);
}

vec4 textureEnvMapIncludeMipmapsLod(sampler2D texture, vec3 position, float lod, vec2 distortion){
	float posZ = abs(position.z) < EPSILON_ATAN ? EPSILON_ATAN : position.z;
	vec2 uv = vec2(atan(position.x, posZ) * RECIPROCAL_PI * 0.5 + 0.5, acos(position.y) * RECIPROCAL_PI);
	float scale = pow(2.0, lod);
	return texture2D(texture, vec2(uv.x / scale + distortion.x, (uv.y / scale / 2.0) + 1.0 - 1.0/pow(2.0, lod) + distortion.y));
}

vec3 getIBLRadiance(vec3 viewDir, vec3 normal, float roughness, mat3 envRotationY, vec2 distortion) {
    vec3 reflectVec = reflect(viewDir, normal );
    reflectVec = (vec4(reflectVec,0.0) * u_view).xyz;
	reflectVec = reflectVec * envRotationY;

    float mipCount = 7.0;
    float mip = clamp(roughness * mipCount * 1.5, 0.0, mipCount);
    float mipF = fract( mip );
    float mipInt = floor( mip );
    float mipBig = clamp(mipInt + 1.0, 0.0, mipCount);

    vec4 specularEnvMapInt = textureEnvMapIncludeMipmapsLod(u_specularEnvMap, reflectVec, mipInt, distortion);
    vec4 specularEnvMapBig = textureEnvMapIncludeMipmapsLod(u_specularEnvMap, reflectVec, mipBig, distortion);

    vec4 specularEnvMap = mix(specularEnvMapInt, specularEnvMapBig, mipF);
    vec3 specularLight = specularEnvMap.rgb / specularEnvMap.a;

    return specularLight * 0.5 ;
}

#ifdef USE_FOG

uniform vec3 fogColor;
varying float vFogDepth;

#ifdef FOG_EXP2

uniform float fogDensity;

#else

uniform float fogNear;
uniform float fogFar;

#endif

#endif

#if defined( USE_LOGDEPTHBUF )

uniform float logDepthBufFC;
varying float vFragDepth;
varying float vIsPerspective;

#endif

void main() {
    vec4 noise = getNoise(v_worldPosition.xz * 10.0);
    vec3 surfaceNormal = normalize(noise.xzy * vec3(1.5, 1.0, 1.5));

    vec3 diffuseColor = vec3(0.0);
    vec3 specularColor = vec3(0.0);

    vec3 cameraPosition = vec3(u_viewInverse[3][0], u_viewInverse[3][1], u_viewInverse[3][2]);
    vec3 eyeVector = cameraPosition - v_worldPosition.xyz;
    vec3 eyeDirection = normalize(eyeVector);
    lightStrength(surfaceNormal, normalize(u_mainLightDir), eyeDirection, 100.0, 2.0, 0.5, diffuseColor, specularColor);
    
    float distance = length(eyeVector);
    vec2 distortion = surfaceNormal.xz * (0.001 + 1.0 / distance);

    vec3 reflectionRadiance = getIBLRadiance(normalize(v_viewPosition.xyz), v_normal, 0.1, rotationMatY3(u_envRotation), distortion);

    float product = max(dot(eyeDirection, surfaceNormal), 0.0);
    float f0 = 0.3;
    float reflectance = f0 + (1.0 - f0) * pow((1.0 - product), 5.0);
    vec3 lightScatter = max(0.0, dot(surfaceNormal, eyeDirection)) * u_waterColor;
    vec3 albedo = mix((u_mainLightColorIns.rgb * diffuseColor * 0.3 + lightScatter), (vec3(0.1) + reflectionRadiance * 0.9 + reflectionRadiance * specularColor ), reflectance);
    albedo = pow(albedo, vec3(1.0 / 2.2));
    gl_FragColor = vec4(albedo, 1.0);
}
` ;
