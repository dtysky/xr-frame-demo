# xr-frame-demo

微信小程序`xr-frame`系统的示例集。

## 准备工作

目前需要下载最新的[Nightly版本工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/nightly.html)，最新的客户端（安卓8.0.29，iOS8.0.29），以及基础库（2.27.1）。

## 直接体验

二维码以及部分样例的扫描图片详见：[官方文档-示例](https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/overview/index#示例)。

https://user-images.githubusercontent.com/7337763/199401152-d3e14ca2-bcde-41aa-902c-dc0fbd6b6358.mp4


## 快速索引

### [常见问题QA](/qa/README.md)
### [案例截图与描述](/screenshot/README.md)

### 基础能力
[基础案例](/miniprogram/components/xr-basic/) PBR材质下渲染的内置图形。

[透明画布](/miniprogram/components/xr-basic-alpha/) 使用透明画布能力，透出背景。

[灯光案例](/miniprogram/components/xr-basic-light/) 多种灯光作用下的四个白色图形。

[动画案例](/miniprogram/components/xr-basic-animation/) `keyframe` 动画案例。

[视频案例](/miniprogram/components/xr-basic-video/) 视频纹理，正式版本预计基础库 v2.32.0 及以上支持。

[交互案例](/miniprogram/components/xr-basic-touch/) 简单的拖拽图形旋转移动案例。

[显示与图层案例](/miniprogram/components/xr-basic-visible-layer/) 控制节点树的显示案例。

[动态节点案例](/miniprogram/components/xr-basic-shadow/) 通过 `xr-shadow` 节点，来动态在其下添加节点，以及用代码加载资源。

[渲染目标案例](/miniprogram/components/xr-basic-render-texture/) 使用 `xr-asset-render-texture` 生成渲染目标。

[粒子系统](/miniprogram/components/xr-basic-particle/) 使用`xr-particle`，控制粒子系统的显示。

[后处理系统](/miniprogram/components/xr-basic-postprocessing/) 展示了内置的几种后处理效果。

[全局环境数据与局部环境数据](/miniprogram/components/xr-basic-envData/) 动态更改 `xr-mesh` 局部环境数据的案例。

### AR 能力
[相机渲染案例](/miniprogram/components/xr-ar-camera/) AR相机与glTF一同渲染的基础案例。

[平面识别案例](/miniprogram/components/xr-ar-basic/) 基础的平面识别案例。

[相机旋转案例](/miniprogram/components/xr-ar-threeDof/) threeDof，用于在不需要SLAM的场景，支持手持相机旋转，兼容性较好。

[2DMarker案例](/miniprogram/components/xr-ar-2dmarker/) 2DMarker识别案例。

[OSDMarker案例](/miniprogram/components/xr-ar-osdmarker/) OSDMarker识别案例。

[人脸案例](/miniprogram/components/xr-ar-face/) 人脸识别案例。

[人手案例](/miniprogram/components/xr-ar-hand/) 人手识别案例。

[人体案例](/miniprogram/components/xr-ar-body/) 人体识别案例。

### glTF 能力
[金属头盔案例](/miniprogram/components/xr-gltf-damageHelmet/) 包含完整MetalRougnessMap、EmissiveMap、NormalMap、OcclusionTexture 以及各类因子的 glTF 模型案例。

[动画案例](/miniprogram/components/xr-gltf-animation/) 包含 glTF 动画，以及 keyframe 动画协作的案例

[加载与多光源案例](/miniprogram/components/xr-gltf-light-loading/) 组件和页面通信实现资源加载时覆盖加载界面，以及多个动画光源案例。

[morph案例](/miniprogram/components/xr-gltf-morph/) morph targets的使用。

[无光照案例](/miniprogram/components/xr-gltf-unlit/) 应用 KHR_materials_unlit 扩展的 glTF 案例。

[高光光泽度案例](/miniprogram/components/xr-gltf-specularGlossiness/) 应用 KHR_materials_pbrSpecularGlossiness 扩展的 glTF 案例。

[贴图矩阵变换案例](/miniprogram/components/xr-gltf-textureTransform/) 应用 KHR_texture_transform 扩展的 glTF 案例，glTF 贴图矩阵变换支持（需基础库2.31.0）。

### 高级定制

[定制组件和元素](/miniprogram/components/xr-custom-logic/) 定制组件和元素并使用。

[定制渲染资源](/miniprogram/components/xr-custom-render/) 定制Effect和Geometry并使用。

### 通用功能模版

[小程序混合通信](/miniprogram/components/template/xr-template-message/) 通过小程序按钮事件，传递速度变量到 xr-frame 组件通信的案例。

[第一人称漫游](/miniprogram/components/template/xr-template-control/) 第一人称相机控制器。

[动态资源加载与使用](/miniprogram/components/template/xr-template-loading/) 点击按钮进行对应资源的加载与使用。

[动态多Tracker切换](/miniprogram/components/template/xr-template-tracker/) 点击按钮，对应不同识别效果 Marker 的添加与删除。

[模型摆放与手势控制](/miniprogram/components/template/xr-template-arPreview/) 点击屏幕摆放，然后单指拖动屏幕进行旋转，双指拖动进行放大缩小。

[面向屏幕的面片](/miniprogram/components/template/xr-template-lookat/) 通过脚本控制的，四个方向各有一个面向屏幕的平面。

[模型更换贴图](/miniprogram/components/template/xr-template-gltfEdit/) 加载 glTF 模型，调整 glTF 的材质的贴图

[模型更改渲染状态，glTF设为遮挡模型](/miniprogram/components/template/xr-template-gltfOcclusion/) 使用模型做遮挡剔除，让该模型剔除其他物体

[序列帧动画（雪碧图、GIF）](/miniprogram/components/template/xr-template-frameEffect/) 使用自定义材质实现的序列帧动画案例。

[截屏与分享](/miniprogram/components/template/xr-template-share/) 通过分享系统截屏分享

[过滤黑色背景视频](/miniprogram/components/template/xr-template-removeBlack/) 

## 版权

实例中用到的所有资源：

https://sketchfab.com/3d-models/borboleta-azul-butterfly-ab9192b6bc8f49e3baed63e984c7073a  
https://sketchfab.com/3d-models/just-a-girl-b2359160a4f54e76b5ae427a55d9594d  
https://sketchfab.com/3d-models/metal-table-60f8c279c7b64fce8241220178e543ec  
https://sketchfab.com/3d-models/fiesta-tea-8bde490c80444157b4545471d067423c  
https://sketchfab.com/3d-models/ship-in-clouds-c475323dc7f24e26ba2009c08c8e1941  
https://sketchfab.com/3d-models/cloud-station-26f81b24d83441ba88c7e80a52adbaaf  
https://sketchfab.com/3d-models/shiteyanyo-hatsune-miku-0f4029ba805c4751933bba24dc72dd24  
https://sketchfab.com/3d-models/miku-8b8028fa527549629b620752517812ac  
https://sketchfab.com/3d-models/pokemon-frlg-loreleis-arena-ce7397e95ec9458b8df3c1453e4d0b82  
https://sketchfab.com/3d-models/10th-attract-genderless-attraction-fc5548bb511e45748c393184ecbad26b  
https://sketchfab.com/3d-models/camera-limits-demo-van-gogh-bedroom-in-arles-daefab319a584e559443e39ff05e84fa  
https://sketchfab.com/3d-models/night-car-landscape-be4011aeb09740948bf30d33936c875b  
https://sketchfab.com/models/b81008d513954189a063ff901f7abfe4  
http://www.alexandre-pestana.com/pbr-textures-sponza/  
https://sketchfab.com/3d-models/jokers-mask-persona-5-81669910c0b74f41a3a58febfd514794

