export default /* glsl */ `
attribute highp vec3 a_position;
attribute highp vec3 a_normal;

uniform mat4 textureMatrix;
uniform float time;

uniform mat4 u_world;
uniform mat4 u_view;
uniform mat4 u_projection;
uniform vec4 u_worldPosition;

varying vec4 v_worldPosition;
varying vec4 v_viewPosition;
varying vec3 v_normal;

#ifdef USE_LOGDEPTHBUF
    varying float v_fragDepth;
    varying float vIsPerspective;
#endif


void main() {
    vec4 worldPosition = u_world * vec4(a_position, 1.0);
    v_worldPosition = worldPosition;
    v_viewPosition = u_view * worldPosition;
    gl_Position = u_projection * v_viewPosition;
    v_normal = mat3(u_view * u_world) * a_normal;
}

`;