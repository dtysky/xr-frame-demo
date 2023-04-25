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

### AR能力
[相机渲染案例](/miniprogram/components/xr-ar-camera/) AR相机与glTF一同渲染的基础案例。
[平面识别案例](/miniprogram/components/xr-ar-basic/) 基础的平面识别案例。
[相机旋转案例](/miniprogram/components/xr-ar-threeDof/) threeDof，用于在不需要SLAM的场景，支持手持相机旋转，兼容性较好。
[2DMarker案例](/miniprogram/components/xr-ar-2dmarker/) 2DMarker识别案例。
[OSDMarker案例](/miniprogram/components/xr-ar-osdmarker/) OSDMarker识别案例。
[人脸案例](/miniprogram/components/xr-ar-face/) 人脸识别案例。
[人手案例](/miniprogram/components/xr-ar-hand/) 人手识别案例。
[人体案例](/miniprogram/components/xr-ar-body/) 人体识别案例。

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

