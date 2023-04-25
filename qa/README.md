# xr-frame 常见问题

## 稳定性问题

### Q: Android 花屏问题
Android 8.0.35 基本大部分情况已修复，后续版本如果还有花屏情况可以联系官方，带上对应平台的客户端版本与基础库版本。

### Q: 闪退问题
`功能问题型` Android 8.0.35 以及 iOS 8.0.36 后已经修复，后续版本如果情况可以联系官方，带上对应平台的客户端版本与基础库版本。

`OOM(内存溢出)型` 小程序占用内存超过了设备对应的系统限制内存的上限。

1. 如果遇到这个问题，可以优先排查，是否存在同时持有大量模型，导致的大量内存占用。可以采用按需使用与释放。
2. 内存占用的占比较大一般是贴图，可以尝试等比压缩贴图尺寸进行压缩。


## 配套工具问题
### Q: xr-frame-cli 使用问题
绝大部分报错来自 github 下载太慢，导致部分库下载失败，可以 npm 默认源可以切国内源试试。目前只支持 Windows 或 Mac 环境下使用。

### Q: 开发者工具是无法使用 xr-frame
下载最新的开发版工具 https://developers.weixin.qq.com/miniprogram/dev/devtools/nightly.html


### Q: wechatlib(基础库) 版本的推送规则是什么样子的
所有用户，会基于自身的客户端版本，更新到当前客户端版本最新的公共库。
后续如果基础库更新新的版本，只要用户客户端版本允许，就会逐渐灰度更新到所有用户。
具体关系可以看下这个文档 
https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/version.html

## wxml问题

### Q: 标签里面的属性都在哪能看到
直接看对应组件的文档即可，比如 uniform标签 看对应的材质的内置材质文档，states标签 相关看材质文档，shadow标签 相关看阴影文档...

## AR识别问题

### Q: Marker 模式与 Plane 模式下，坐标系统是怎样的？


### Q: 如何把识别出来后，直接把模型固定显示在屏幕中央
`作为相机子节点` 把模型直接挂在相机底下即可（不可以带上tracker），此时模型相当于视图空间的位置，就是相对相机的固定距离。

### Q: 如何把算出识别出来物体相对于屏幕的大小
可以在tracker中创建对应物体大小的两个点，通过 camera.convertWorldPositionToClip 获取这两个位于裁剪空间的位置，可以算出这个宽度，相对于屏幕空间大小的比例。
具体可以参考 多tracker案例 中 物体框选逻辑
https://github.com/dtysky/xr-frame-demo/blob/master/miniprogram/components/template/xr-template-tracker/index.js#L187

### Q: AR模式中，有什么方法可以获取场景中 一个物体相对于摄像机的位置吗（ps：用来判断这个物体是不是在相机的可是范围内）
直接获取 物体的矩阵 以及相机的矩阵以及 near 还有 far ，就可以算出来了。

### Q: 如何使模型固定朝向用户（相机）。
可以参考这个例子，每帧算出面向相机的方向。
 https://github.com/dtysky/xr-frame-demo/blob/master/miniprogram/components/template/xr-template-lookat/index.js

### Q: OSD 识别模型的大小是和距离有关吗？
有关系，OSD只返回了二维信息，距离影响识别框大小，目前的 xr-frame 返回的三维坐标是基于屏幕空间转出来的，具体可以看这个文档 https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/ar/tracker.html#OSD

### Q: OSD 容易把别的东西也识别为目标，比如官方DEMO的塔。
OSD 非常容易误判，需要稳定识别还是建议使用 2D Marker。

### Q: 目前一个小程序最多能添加多少个ar-tracker
理论上可以无数个，但不同的tracker图片会相互干扰，大于6个识别效果就大幅减弱了。

### Q: AR模式下，如果想在屏幕上添加弹窗，类似cover-view效果，要怎么做呢？
直接使用即可，xr-frame-demo 中 通用模版 有多案例是原生的 view 盖在 xr-frame 的 canvas 上。
但需要真机才能看效果，开发者工具中 同层渲染 有问题。
https://github.com/dtysky/xr-frame-demo/blob/master/miniprogram/pages/template/xr-template-tracker/index.wxml


### Q：AR模式下，设置缩放能使用camera-orbit-control属性吗？
AR模式里面，相机是由算法驱动的，视图矩阵和投影矩阵都是AR算法返回，所以不允许用户编辑相机。
如果需要在AR模型下，进行手势缩放，可以于场景添加触摸事件，在触摸事件中，将变化值动态同步到需更改模型的缩放值上实现。
可以参考，通用模版 - 模型摆放与手势控制
https://github.com/dtysky/xr-frame-demo/blob/master/miniprogram/components/template/xr-template-arPreview/index.js

### Q：AR模式下，不设置target的话，比如做手部识别的时候，需要如何渲染渲染别的节点，比如一个立方体。
AR渲染相机的时候，相机是交给算法那边控制的，设置target没有用。
如果在 Hand 模式下，你可以将这个立方体放在 xr-ar-tracker 下，这个模式下，整个坐标系统，会以 tracker 作为起点进行定位。

## 脚本问题

### Q: 使用 xr-shadow 手动添加模型，如何播放添加上去的模型动画呢？
xr-shadow 里面的的节点和一般节点一致，可以获取Animator组件，使用播放函数即可。

### Q: 有什么办法清除ar场景中的模型吗
可以用 Element 的 removeChild 方法。visible 只会影响渲染元素的是否渲染，不影响节点本身，不是真正的销毁。

### Q: 动态创建的元素 const element = this.scene.createElement(xrFrameSystem.XRNode, { sphere-shape，receive-shadow， cast-shadow } 里面带横杠的属性是怎样设置的。
`横杠的属性` 是 “字符与值的一个map”，写的时候需要类似 { "receive-shadow": true， "cast-shadow": true} 这样使用。

`事件回调` 不能通过 createElement 传入，需要通过模版绑定，或者通过 element.event 添加

### Q: glTF 设置 "anim-autoplay": false 后依然有动画播放
anim-autoplay 判断条件是有没有对象，如果不需要播放，可以设 anim-autoplay 为 undefined

## 分享、截图问题

### Q: AR模型 展示出来后，想要实现截图保存的话，有什么方法可以实现吗？获取当前帧图像数据？
可以使用分享系统，captureToArrayBuffer 返回 Buffer，captureToLocalPath 分享到本地文件，captureToFriends 直接分享给朋友
具体可以参考
https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/share/

## 自定义资源问题

### Q: 有使用序列帧的例子吗
可以通过加载一个图片资源（雪碧图那种），根据时间控制 uv 进行实现，
具体参考帧动画案例，由 @一二侠 提供
https://github.com/dtysky/xr-frame-demo/blob/master/miniprogram/components/template/xr-template-frameEffect/index.js

## 材质问题

### Q:  xr-frame 中可以设置材质透明度吗
`alphaMode` 设为 Blend 就可以控制是否开启混合，
设定渲染状态逻辑 material.setRenderState(key, value); 
具体透明度可以修改材质的 `baseColorFactor`。
material.setVector(key, vec);
对应文档：
https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/render/material.html

### Q: metalness 等材质是否支持？在文档那里哈？没找到咯
https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/builtin/effect-standard.html

### Q: 材质用于几何体内外的功能，类似下面threejs 功能 THREE.FrontSide 应用到几何体的前（外）面；THREE.BackSide 应用到几何体的后（内）面，在xr-frame有吗？
如果只是决定显示正面和反面，可以采用cullOn和cullFace

### Q: 环境贴图对材质的影响系数，类似：THREE.envMap  THREE.envMapIntensity 有类似实现吗？
https://github.com/dtysky/xr-frame-demo/blob/master/miniprogram/components/xr-basic-envData/index.wxml

## 视频纹理问题

### Q: 视频纹理目前存在加载失败，播放失败，闪退等问题，如何修复
目前版本建议先不要在生产环境使用视频纹理，这部分问题来源是客户端视频解码器，依赖客户端的更新修复。目前客户端已更改新的解码器版本，后续基础修复版本也在发布计划了。

### Q: 如何修复，识别出来的视频 与 Marker图 相比，上下高度多出很多的情况
渲染视频纹理的物体，与视频纹理比例一致的话，就不会出现这种情况。
如果需要保证 marker图 和 视频比例一致的话，可以参考 多tracker案例 中，播放视频纹理的部分
https://github.com/dtysky/xr-frame-demo/blob/master/miniprogram/pages/template/xr-template-tracker/index.wxml

## 模型问题

### Q: 模型面数有什么要求
面数上限没有要求

### Q: 模型表面正常是金属材质(银色) 在xr-frame里渲染成了黑色
金属的反射需要依赖环境光，配置一下环境数据，没有的话可以使用内置的环境数据。

## 触摸问题

## glTF问题

### Q: glTF模型加载失败，不显示
可以在开发者工具的控制台工具查看loaded中是否有 error，有没有 glTF 的报错。
由于目前 gltf 验证走的严格模式，比如某些 mesh 使用了目前暂不支持的 accessor.normalized，或者 uv 数量 超了，就不进行渲染了，需要通过过滤规则规避。
```javascript
// accessor.normalized 的报错
Unhandled promise rejection GLTF validation failed at [AccessorNode]: [10602] Normalized accessors are not supported.
```
这个扩展不支持，基础库 2.31.1 后 支持 gltf 非严格模式。
```xml
// feature: gltf 可以忽略某条规则，
// 可以填多个error编号，编号由console报出，填-1则忽略所有规则。
<xr-asset-load type="gltf" asset-id="gltf-normalized" src="/assets/glb/yuge_04.glb" options="ignoreError: 10602"/>，
```

### Q: 加载完的 glTF模型 还可以进行替换贴图材质吗
可以参考案例
https://github.com/dtysky/xr-frame-demo/blob/master/miniprogram/components/template/xr-template-gltfEdit/index.js


### Q: 加载完的 glTF模型 进行二次编辑吗
glTF 里面的节点是 Shadow 元素。在获取 glTF 组件后。
通过 getInternalNodeByName 获取某一个 Element。
获取对应的 Element，然后直接操作这些影子节点即可。
通过 meshes 获取所有 Mesh组件。
通过 getPrimitivesByNodeName 根据 GLTFNode 的 name 字段来获取其下的所有 Mesh组件。
通过 getPrimitivesByMeshName 根据 GLTFMesh 的 name 字段来获取其下的所有 Mesh组件。
获取对应的 Mesh组件。
通过 Mesh 可以获取对应的 材质 组件，然后再动态修改材质。
具体可以参考文档
https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/gltf/specification.html


## 动画问题

### Q: 怎么编写脚本动画

### Q: 怎么动态添加Animation并控制播放

### Q: 怎么获取 Animator 下的动画名？
可以通过 clipNames 获取所有片段的名称。
https://developers.weixin.qq.com/miniprogram/dev/api/xr-frame/classes/Animation.html#clipNames
动画名对应关系，可以参考官方文档，https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/gltf/specification.html#gltf
```
动画的名字 idle，对应的是 .gltf 文件中 animations 数组节点的每一个元素的 name 属性（参考官方文档）。
如果 .gltf 文件内的动画节点没有 name 属性，则会自动给动画分配名字 gltfAnimation#x，
其中 x 是数字编号，从0开始：gltfAnimation#0, gltfAnimation#1, 以此类推。
如果 .gltf 文件内有多个name相同的动画，也会使用这个规则，在名称后面添加#x作为动画名称，以此来区别。此时如果用不加#x的原始名称来索引动画，会返回#0的动画。
```

### Q: glTF模型如何控制动画播放

### Q: glTF模型动画，如何添加事件监听器？
`WXML` 里面可以用 bind:anim-stop="handleAnimationStop"，具体可以参考案例集里面的，AR典型案例 - 微信球案例

`脚本添加` 可以参考事件系统
 https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/core/event.html

