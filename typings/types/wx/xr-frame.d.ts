/// <reference path="./phys3D.d.ts" />
declare module 'XrFrame' {
    
  import * as xrFrameSystem from 'XrFrame/xrFrameSystem';
  import {IComponentSchema, IEntityComponents} from 'XrFrame/xrFrameSystem';
  
  export {
      IComponentSchema,
      IEntityComponents,
      IEffectAsset,
      IRenderStates,
      ISubMesh,
      IEnvDataOptions,
      IKeyframeAnimationData,
      IKeyframeAnimationInfo,
      IKeyframeAnimationOptions,
      ITextureOptions,
      IEngineSettings,
      IHandle,
      IVertexLayoutOptions,
      IVertexDataDescriptorOptions,
      IUniformDescriptorOptions,
      IImage,
      IRealDownloader,
      IDownloader,
      IFontSetting,
      IFeatures,
      IRect,
      IViewAction,
      IView,
      IAttachment,
      IRenderPassDescriptor,
      IGlyphInfo,
      IEventBridge,
      INativeMap,
      ILongIntNativeMap,
      ITransformData,
      IAssetsData,
      ICameraData,
      IGLTFElementData,
      ILightData,
      IMaterialData,
      IMeshData,
      IRenderTextureData,
      IRenderTarget,
      IEnvData,
      IAnimatorData,
      ICameraOrbitControlData,
      IARTrackerData,
      IAssetsSystemData,
      ITickSystemData,
      IAnimationSystemData,
      IRenderSystemData,
      IPhysicsSystemData,
      IARSystemData,
      ITextureLoaderOptions,
      IImageLoaderOptions,
      ICubeTextureLoaderOptions,
      IEnvDataLoaderOptions,
      IGLTFLoaderOptions,
      IKeyframeLoaderOptions,
      TDirection,
      Texture,
      UniformDescriptor,
      UniformBlock,
      VertexLayout,
      EVertexFormat,
      EVertexStep,
      EIndexType,
      ETextureType,
      ETextureFormat,
      EWrapMode,
      EFilterMode,
      EUniformType,
      ECullMode,
      EFaceWinding,
      ECompareFunc,
      EStencilOp,
      EBlendFactor,
      EBlendEquation,
      EColorMask,
      EPixelType,
      ELoadAction,
      EDataModelType,
      EMeshRenderType,
      EPrimitiveType,
      EShadowMode,
      EShadowFitMode,
      EVertexLayoutUsage,
      EVertexBatchOperator,
      EAnimationBlendType,
      EUseDefaultAddedAction,
      EUseDefaultRetainedAction,
      EUseDefaultRemovedAction,
      EEventType
  } from 'XrFrame/xrFrameSystem';
  
  export type Component<IData> = xrFrameSystem.Component<IData>;
  export type Element = xrFrameSystem.Element;
  export type EventManager = xrFrameSystem.EventManager;
  export type Effect = xrFrameSystem.Effect;
  export type Geometry = xrFrameSystem.Geometry;
  export type GLTFModel = xrFrameSystem.GLTFModel;
  export type EnvData = xrFrameSystem.EnvData;
  export type Animation = xrFrameSystem.Animation;
  export type KeyframeAnimation = xrFrameSystem.KeyframeAnimation;
  export type Vector2 = xrFrameSystem.Vector2;
  export type Vector3 = xrFrameSystem.Vector3;
  export type Vector4 = xrFrameSystem.Vector4;
  export type Quaternion = xrFrameSystem.Quaternion;
  export type Matrix3 = xrFrameSystem.Matrix3;
  export type Matrix4 = xrFrameSystem.Matrix4;
  export type Color = xrFrameSystem.Color;
  export type OBB = xrFrameSystem.OBB;
  export type BoundBall = xrFrameSystem.BoundBall;
  export type BoundBox = xrFrameSystem.BoundBox;
  export type Spherical = xrFrameSystem.Spherical;
  export type Transform = xrFrameSystem.Transform;
  export type AssetLoad = xrFrameSystem.AssetLoad;
  export type Assets = xrFrameSystem.Assets;
  export type Camera = xrFrameSystem.Camera;
  export type GLTF = xrFrameSystem.GLTF;
  export type Light = xrFrameSystem.Light;
  export type Material = xrFrameSystem.Material;
  export type Mesh = xrFrameSystem.Mesh;
  export type RenderTexture = xrFrameSystem.RenderTexture;
  export type Env = xrFrameSystem.Env;
  export type Animator = xrFrameSystem.Animator;
  export type CameraOrbitControl = xrFrameSystem.CameraOrbitControl;
  export type ARTracker = xrFrameSystem.ARTracker;
  export type Scene = xrFrameSystem.Scene;
  export type XRNode = xrFrameSystem.XRNode;
  export type XRShadow = xrFrameSystem.XRShadow;
  export type XRCamera = xrFrameSystem.XRCamera;
  export type XRMesh = xrFrameSystem.XRMesh;
  export type XRLight = xrFrameSystem.XRLight;
  export type XRGLTF = xrFrameSystem.XRGLTF;
  export type XRMaterial = xrFrameSystem.XRMaterial;
  export type XRAssetLoad = xrFrameSystem.XRAssetLoad;
  export type XRAssets = xrFrameSystem.XRAssets;
  export type XREnv = xrFrameSystem.XREnv;
  export type XRARTracker = xrFrameSystem.XRARTracker;
  export type AssetsSystem = xrFrameSystem.AssetsSystem;
  export type TickSystem = xrFrameSystem.TickSystem;
  export type AnimationSystem = xrFrameSystem.AnimationSystem;
  export type RenderSystem = xrFrameSystem.RenderSystem;
  export type PhysicsSystem = xrFrameSystem.PhysicsSystem;
  export type ARSystem = xrFrameSystem.ARSystem;
  export type TextureLoader = xrFrameSystem.TextureLoader;
  export type ImageLoader = xrFrameSystem.ImageLoader;
  export type CubeTextureLoader = xrFrameSystem.CubeTextureLoader;
  export type EnvDataLoader = xrFrameSystem.EnvDataLoader;
  export type GlTFLoader = xrFrameSystem.GlTFLoader;
  export type KeyframeLoader = xrFrameSystem.KeyframeLoader
  
  export interface IXrFrameSystem {
      registerComponent: typeof xrFrameSystem.registerComponent;
      registerElement: typeof xrFrameSystem.registerElement;
      registerDataValue: typeof xrFrameSystem.registerDataValue;
      registerEffect: typeof xrFrameSystem.registerEffect;
      registerGeometry: typeof xrFrameSystem.registerGeometry;
      registerTexture: typeof xrFrameSystem.registerTexture;
      registerUniformDesc: typeof xrFrameSystem.registerUniformDesc;
      registerVertexDataDesc: typeof xrFrameSystem.registerVertexDataDesc;
      registerVertexLayout: typeof xrFrameSystem.registerVertexLayout;
      Component: typeof xrFrameSystem.Component;
      Element: typeof xrFrameSystem.Element;
      EventManager: typeof xrFrameSystem.EventManager;
      Effect: typeof xrFrameSystem.Effect;
      Geometry: typeof xrFrameSystem.Geometry;
      GLTFModel: typeof xrFrameSystem.GLTFModel;
      EnvData: typeof xrFrameSystem.EnvData;
      Animation: typeof xrFrameSystem.Animation;
      KeyframeAnimation: typeof xrFrameSystem.KeyframeAnimation;
      Vector2: typeof xrFrameSystem.Vector2;
      Vector3: typeof xrFrameSystem.Vector3;
      Vector4: typeof xrFrameSystem.Vector4;
      Quaternion: typeof xrFrameSystem.Quaternion;
      Matrix3: typeof xrFrameSystem.Matrix3;
      Matrix4: typeof xrFrameSystem.Matrix4;
      Color: typeof xrFrameSystem.Color;
      OBB: typeof xrFrameSystem.OBB;
      BoundBall: typeof xrFrameSystem.BoundBall;
      BoundBox: typeof xrFrameSystem.BoundBox;
      Spherical: typeof xrFrameSystem.Spherical;
      Transform: typeof xrFrameSystem.Transform;
      AssetLoad: typeof xrFrameSystem.AssetLoad;
      Assets: typeof xrFrameSystem.Assets;
      Camera: typeof xrFrameSystem.Camera;
      GLTF: typeof xrFrameSystem.GLTF;
      Light: typeof xrFrameSystem.Light;
      Material: typeof xrFrameSystem.Material;
      Mesh: typeof xrFrameSystem.Mesh;
      RenderTexture: typeof xrFrameSystem.RenderTexture;
      Env: typeof xrFrameSystem.Env;
      Animator: typeof xrFrameSystem.Animator;
      CameraOrbitControl: typeof xrFrameSystem.CameraOrbitControl;
      ARTracker: typeof xrFrameSystem.ARTracker;
      Scene: typeof xrFrameSystem.Scene;
      XRNode: typeof xrFrameSystem.XRNode;
      XRShadow: typeof xrFrameSystem.XRShadow;
      XRCamera: typeof xrFrameSystem.XRCamera;
      XRMesh: typeof xrFrameSystem.XRMesh;
      XRLight: typeof xrFrameSystem.XRLight;
      XRGLTF: typeof xrFrameSystem.XRGLTF;
      XRMaterial: typeof xrFrameSystem.XRMaterial;
      XRAssetLoad: typeof xrFrameSystem.XRAssetLoad;
      XRAssets: typeof xrFrameSystem.XRAssets;
      XREnv: typeof xrFrameSystem.XREnv;
      XRARTracker: typeof xrFrameSystem.XRARTracker;
      AssetsSystem: typeof xrFrameSystem.AssetsSystem;
      TickSystem: typeof xrFrameSystem.TickSystem;
      AnimationSystem: typeof xrFrameSystem.AnimationSystem;
      RenderSystem: typeof xrFrameSystem.RenderSystem;
      PhysicsSystem: typeof xrFrameSystem.PhysicsSystem;
      ARSystem: typeof xrFrameSystem.ARSystem;
      TextureLoader: typeof xrFrameSystem.TextureLoader;
      ImageLoader: typeof xrFrameSystem.ImageLoader;
      CubeTextureLoader: typeof xrFrameSystem.CubeTextureLoader;
      EnvDataLoader: typeof xrFrameSystem.EnvDataLoader;
      GlTFLoader: typeof xrFrameSystem.GlTFLoader;
      KeyframeLoader: typeof xrFrameSystem.KeyframeLoader;
      EVertexFormat: typeof xrFrameSystem.EVertexFormat;
      EVertexStep: typeof xrFrameSystem.EVertexStep;
      EIndexType: typeof xrFrameSystem.EIndexType;
      ETextureType: typeof xrFrameSystem.ETextureType;
      ETextureFormat: typeof xrFrameSystem.ETextureFormat;
      EWrapMode: typeof xrFrameSystem.EWrapMode;
      EFilterMode: typeof xrFrameSystem.EFilterMode;
      EUniformType: typeof xrFrameSystem.EUniformType;
      ECullMode: typeof xrFrameSystem.ECullMode;
      EFaceWinding: typeof xrFrameSystem.EFaceWinding;
      ECompareFunc: typeof xrFrameSystem.ECompareFunc;
      EStencilOp: typeof xrFrameSystem.EStencilOp;
      EBlendFactor: typeof xrFrameSystem.EBlendFactor;
      EBlendEquation: typeof xrFrameSystem.EBlendEquation;
      EColorMask: typeof xrFrameSystem.EColorMask;
      EPixelType: typeof xrFrameSystem.EPixelType;
      ELoadAction: typeof xrFrameSystem.ELoadAction;
      EDataModelType: typeof xrFrameSystem.EDataModelType;
      EMeshRenderType: typeof xrFrameSystem.EMeshRenderType;
      EPrimitiveType: typeof xrFrameSystem.EPrimitiveType;
      EShadowMode: typeof xrFrameSystem.EShadowMode;
      EShadowFitMode: typeof xrFrameSystem.EShadowFitMode;
      EVertexLayoutUsage: typeof xrFrameSystem.EVertexLayoutUsage;
      EVertexBatchOperator: typeof xrFrameSystem.EVertexBatchOperator;
      EAnimationBlendType: typeof xrFrameSystem.EAnimationBlendType;
      EUseDefaultAddedAction: typeof xrFrameSystem.EUseDefaultAddedAction;
      EUseDefaultRetainedAction: typeof xrFrameSystem.EUseDefaultRetainedAction;
      EUseDefaultRemovedAction: typeof xrFrameSystem.EUseDefaultRemovedAction;
      EEventType: typeof xrFrameSystem.EEventType
      TransformSchema: IComponentSchema;
      AssetLoadSchema: IComponentSchema;
      AssetsSchema: IComponentSchema;
      CameraSchema: IComponentSchema;
      GLTFElementSchema: IComponentSchema;
      LightSchema: IComponentSchema;
      MaterialSchema: IComponentSchema;
      MeshSchema: IComponentSchema;
      RenderTextureSchema: IComponentSchema;
      EnvSchema: IComponentSchema;
      AnimatorSchema: IComponentSchema;
      CameraOrbitControlSchema: IComponentSchema;
      ARTrackSchema: IComponentSchema
      BasicDefaultComponents: IEntityComponents;
      SceneDefaultComponents: IEntityComponents;
      NodeDefaultComponents: IEntityComponents;
      ShadowDefaultComponents: IEntityComponents;
      CameraDefaultComponents: IEntityComponents;
      MeshDefaultComponents: IEntityComponents;
      LightDefaultComponents: IEntityComponents;
      GLTFDefaultComponents: IEntityComponents;
      MaterialDefaultComponents: IEntityComponents;
      AssetsDefaultComponents: IEntityComponents;
      EnvDefaultComponents: IEntityComponents;
      ARTrackerDefaultComponents: IEntityComponents
      BasicDataMapping: {[key: string]: string[]};
      SceneDataMapping: {[key: string]: string[]};
      NodeDataMapping: {[key: string]: string[]};
      ShadowDataMapping: {[key: string]: string[]};
      CameraDataMapping: {[key: string]: string[]};
      MeshDataMapping: {[key: string]: string[]};
      LightDataMapping: {[key: string]: string[]};
      GLTFDataMapping: {[key: string]: string[]};
      MaterialDataMapping: {[key: string]: string[]};
      AssetLoadDataMapping: {[key: string]: string[]};
      EnvDataMapping: {[key: string]: string[]};
      ARTrackerDataMapping: {[key: string]: string[]}
  }
}

declare module 'XrFrame/xrFrameSystem' {
  /**
    * xrFrameSystem.ts
    *
    *       * @Date    : 4/28/2022, 5:02:28 PM
    */
  import { Kanata } from 'XrFrame/ext';
  export { default as Component, registerComponent, IComponentSchema } from 'XrFrame/core/Component';
  export { default as Element, registerElement, IEntityComponents, BasicDefaultComponents, BasicDataMapping } from 'XrFrame/core/Element';
  export { registerDataValue } from 'XrFrame/core/DataValue';
  export { default as EventManager } from 'XrFrame/core/EventManager';
  export * from 'XrFrame/components';
  export * from 'XrFrame/elements';
  export * from 'XrFrame/systems';
  export * from 'XrFrame/loader';
  export { default as Effect, IEffectAsset, IRenderStates } from 'XrFrame/assets/Effect';
  export { default as Geometry, ISubMesh } from 'XrFrame/assets/Geometry';
  export { default as GLTFModel } from 'XrFrame/assets/GLTFModel';
  export { default as EnvData, IEnvDataOptions } from 'XrFrame/assets/EnvData';
  export { default as Animation, TDirection } from 'XrFrame/animation/Animation';
  export { default as KeyframeAnimation, IKeyframeAnimationData, IKeyframeAnimationInfo, IKeyframeAnimationOptions } from 'XrFrame/animation/KeyframeAnimation';
  export { registerEffect, registerGeometry, registerTexture, registerUniformDesc, registerVertexDataDesc, registerVertexLayout } from 'XrFrame/assets/factories';
  export { default as Vector2 } from 'XrFrame/math/vector2';
  export { default as Vector3 } from 'XrFrame/math/vector3';
  export { default as Vector4 } from 'XrFrame/math/vector4';
  export { default as Quaternion } from 'XrFrame/math/quaternion';
  export { default as Matrix3 } from 'XrFrame/math/matrix3';
  export { default as Matrix4 } from 'XrFrame/math/matrix4';
  export { default as Color } from 'XrFrame/math/color';
  export { default as OBB } from 'XrFrame/math/OBB';
  export { default as BoundBall } from 'XrFrame/math/boundBall';
  export { default as BoundBox } from 'XrFrame/math/boundBox';
  export { default as Spherical } from 'XrFrame/math/Spherical';
  export { ITextureOptions, IEngineSettings, EVertexFormat, EVertexStep, EIndexType, ETextureType, ETextureFormat, EWrapMode, EFilterMode, EUniformType, ECullMode, EFaceWinding, ECompareFunc, EStencilOp, EBlendFactor, EBlendEquation, EColorMask, EPixelType, ELoadAction, EDataModelType, EMeshRenderType, EPrimitiveType, EShadowMode, EShadowFitMode, EVertexLayoutUsage, EVertexBatchOperator, EAnimationBlendType, EUseDefaultAddedAction, EUseDefaultRetainedAction, EUseDefaultRemovedAction, IHandle, IVertexLayoutOptions, IVertexDataDescriptorOptions, IUniformDescriptorOptions, IImage, IRealDownloader, IDownloader, IFontSetting, IFeatures, IRect, IViewAction, IView, IAttachment, IRenderPassDescriptor, EEventType, IGlyphInfo, IEventBridge, INativeMap, ILongIntNativeMap } from 'XrFrame/kanata/lib/kanata';
  export type Texture = Kanata.Texture;
  export type UniformDescriptor = Kanata.UniformDescriptor;
  export type UniformBlock = Kanata.UniformBlock;
  export type VertexLayout = Kanata.VertexLayout;
}

declare module 'XrFrame/ext' {
  /**
    * ext.ts
    *
    *       * @Date    : 2022/3/17下午1:43:48
    */
  import * as Kanata from 'XrFrame/kanata/lib/kanata';
  const exparser: any;
  type Scene = import('XrFrame/core/Scene').default;
  const _wx: any;
  const Phys3D: any;
  function addKanata(scene: Scene, kanata: Kanata.IKanataInstance): void;
  function removeKanata(scene: Scene): void;
  function getKanata(scene: Scene): Kanata.IKanataInstance;
  export { Kanata, exparser, Phys3D, _wx, addKanata, removeKanata, getKanata };
}

declare module 'XrFrame/core/Component' {
  type Element = import('XrFrame/core/Element').default;
  export interface IComponentSchema {
      [key: string]: {
          type: string;
          defaultValue?: any;
      };
  }
  export default class Component<IData> {
      static TYPE: string;
      static SPLIT_DATA(dataStr: string): {
          [key: string]: string;
      };
      readonly schema: IComponentSchema;
      readonly priority: number;
      __DATA_TYPE: IData;
      protected _version: number;
      protected _currentData: IData;
      get el(): import('XrFrame/core/Element').default;
      get scene(): import('XrFrame/core/Scene').default;
      get version(): number;
      setData(data: Partial<IData>): void;
      getData<T extends keyof IData>(key: T): IData[T];
      onAdd(parent: Element, data: IData): void;
      onUpdate(data: IData, preData: IData): void;
      onTick(deltaTime: number, data: IData): void;
      onRemove(parent: Element, data: IData): void;
      onRelease(data: IData): void;
  }
  export function getComponent(type: string): new () => Component<any>;
  export function registerComponent(type: string, clz: new () => Component<any>): void;
  export {};
}

declare module 'XrFrame/core/Element' {
  /**
    * Element.ts
    *
    *       * @Date    : 2022/4/1上午10:34:06
    */
  import Component from 'XrFrame/core/Component';
  import EventManager, { TFrameworkEventTrigger } from 'XrFrame/core/EventManager';
  export interface IEntityComponents {
      [name: string]: {
          [key: string]: string;
      };
  }
  export const BasicDefaultComponents: IEntityComponents;
  export const BasicDataMapping: {
      [key: string]: string[];
  };
  export default class Element {
      static TYPE: string;
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
      readonly neverTick: boolean;
      get scene(): import('XrFrame/core/Scene').default;
      get parent(): Element;
      get event(): EventManager;
      constructor(_type: string, triggerEvent: TFrameworkEventTrigger);
      getChildAtIndex<T extends Element>(index: number): T;
      getChildByFilter<T extends Element>(filter: (child: Element) => boolean): T;
      getChildrenByFilter(filter: (child: Element) => boolean): Element[];
      getChildByClass<T extends Element>(clz: new (...args: any[]) => T): T;
      getChildrenByClass<T extends Element>(clz: new (...args: any[]) => T): T[];
      dfs<T extends any>(callback: (element: Element, params?: T) => T, defaultParams?: T, excludeRoot?: boolean): void;
      addComponent<T extends Component<any>>(clz: new () => T, options?: T['__DATA_TYPE']): T;
      getComponent<T extends Component<any>>(clz: new () => T): T;
      removeComponent(clz: new () => Component<any>): void;
      _associateValue(_v: any): void;
      addChild(child: Element): void;
      removeChild(child: Element): void;
      setId(id: string): void;
      release(): void;
      _appendChild(_child: Element, custom?: boolean): void;
      _removeChild(_child: Element, _index?: number, custom?: boolean): void;
      _insertBefore(_child: Element, _before?: Element, _index?: number): void;
      _replaceChild(_child: Element, _oldChild?: Element, _index?: number): void;
      _spliceBefore(_before: number | Element, _deleteCount: number, _list: Element): void;
      _spliceAppend(_list: Element): void;
      _spliceRemove(_before: Element, _deleteCount: number): void;
      _setId(_id: string): void;
      _setStyleScope(_styleScope: number): void;
      _setStyle(_styleText: string): void;
      _addClass(_elementClass: string, _styleScope?: number): void;
      _removeClass(_elementClass: string, _styleScope?: number): void;
      _setAttribute(_name: string, _value: any): void;
      _removeAttribute(_name: string): void;
      _setText(_content: string): void;
  }
  export function getElement(type: string): typeof Element;
  export function registerElement(type: string, clz: typeof Element): void;
}

declare module 'XrFrame/core/DataValue' {
  /**
    * DataValue.ts
    *
    *       * @Date    : 2022/3/17下午2:22:19
    */
  import Scene from 'XrFrame/core/Scene';
  interface IDataValueHandler<TDataValue> {
      create(value: string, defaultValue: any, scene: Scene): TDataValue;
  }
  export function isDataValueHandlerExisted(type: string): boolean;
  export function registerDataValue<TDataValue>(type: string, handler: IDataValueHandler<TDataValue>): void;
  export function parseDataValue<TDataValue>(type: string, value: string, defaultValue: any, scene: Scene): TDataValue;
  export {};
}

declare module 'XrFrame/core/EventManager' {
  /**
      * EventManager.ts
      *
      *         * @Date    : 2022/3/17下午3:54:03
      */
  import Observable from 'XrFrame/core/Observable';
  type Element = import('XrFrame/core/Element').default;
  export type TEventCallback<TParams> = (params: TParams, sender: Element) => void;
  export type TFrameworkEventTrigger = (name: string, details: any, options: {
          bubbles?: boolean;
          composed?: boolean;
          capturePhase?: boolean;
  }) => void;
  export default class EventManager {
          isEventManager: boolean;
          protected _observables: {
                  [type: string]: Observable;
          };
          protected _caches: {
                  [type: string]: {
                          value: any;
                          toXML: boolean;
                          bubbles: boolean;
                  };
          };
          constructor(_el: Element, _triggerElementEvent: TFrameworkEventTrigger);
          /**
              * 添加一个事件监听器。
              * **若监听时此事件尚未注册，会自动注册此事件！**
              */
          add<TEvent = any>(type: string, callback: TEventCallback<TEvent>, priority?: number): this;
          /**
              * 添加一个事件监听器，触发一次后自动移除。
              */
          addOnce<TEvent = any>(type: string, callback: TEventCallback<TEvent>, priority?: number): this;
          /**
              * 移除一个事件监听器。
              */
          remove<TEvent = any>(type: string, callback: TEventCallback<TEvent>): this;
          /**
              * 判断一个事件是否被注册。
              */
          has(type: string): boolean;
          /**
              * 判断一个时间的监听者数量。
              */
          getCount(type: string): number;
          /**
              * 清空所有事件。
              */
          clear(type: string): this;
          /**
              * 触发一个**已注册**的事件。
              *
              * @param immediately 是否要将事件立即分发，如果不则会先缓存，之后在每一帧更新前统一分发，避免不必要的分发。这通常用于HID性能优化。
              */
          trigger<TEvent = any>(type: string, event?: TEvent, immediately?: boolean, toXML?: boolean, bubbles?: boolean): this;
          /**
              * 分发某个缓存的事件，一般不需要自行触发。
              */
          flush(type: string): this;
          /**
              * 分发所有缓存的事件，一般不需要自行触发。
              */
          flushAll(): this;
  }
  export {};
}

declare module 'XrFrame/components' {
  export { default as Transform, ITransformData, TransformSchema } from 'XrFrame/components/Transform';
  export { default as AssetLoad, AssetLoadSchema } from 'XrFrame/components/AssetLoad';
  export { default as Assets, IAssetsData, AssetsSchema } from 'XrFrame/components/Assets';
  export { default as Camera, ICameraData, CameraSchema } from 'XrFrame/components/Camera';
  export { default as GLTF, IGLTFElementData, GLTFElementSchema } from 'XrFrame/components/GLTF';
  export { default as Light, ILightData, LightSchema } from 'XrFrame/components/Light';
  export { default as Material, IMaterialData, MaterialSchema } from 'XrFrame/components/Material';
  export { default as Mesh, IMeshData, MeshSchema } from 'XrFrame/components/Mesh';
  export { default as RenderTexture, IRenderTextureData, RenderTextureSchema, IRenderTarget } from 'XrFrame/components/RenderTexture';
  export { default as Env, IEnvData, EnvSchema } from 'XrFrame/components/Env';
  export { default as Animator, IAnimatorData, AnimatorSchema } from 'XrFrame/components/Animator';
  export { default as CameraOrbitControl, ICameraOrbitControlData, CameraOrbitControlSchema } from 'XrFrame/components/CameraOrbitControl';
  export { default as ARTracker, IARTrackerData, ARTrackSchema } from 'XrFrame/components/ARTracker';
}

declare module 'XrFrame/elements' {
  export { default as Scene, SceneDataMapping, SceneDefaultComponents } from 'XrFrame/core/Scene';
  export { default as XRNode, NodeDataMapping, NodeDefaultComponents } from 'XrFrame/elements/xr-node';
  export { default as XRShadow, ShadowDataMapping, ShadowDefaultComponents } from 'XrFrame/elements/xr-shadow';
  export { default as XRCamera, CameraDataMapping, CameraDefaultComponents } from 'XrFrame/elements/xr-camera';
  export { default as XRMesh, MeshDataMapping, MeshDefaultComponents } from 'XrFrame/elements/xr-mesh';
  export { default as XRLight, LightDataMapping, LightDefaultComponents } from 'XrFrame/elements/xr-light';
  export { default as XRGLTF, GLTFDataMapping, GLTFDefaultComponents } from 'XrFrame/elements/xr-gltf';
  export { default as XRMaterial, MaterialDataMapping, MaterialDefaultComponents } from 'XrFrame/elements/xr-asset-material';
  export { default as XRAssetLoad, AssetLoadDataMapping } from 'XrFrame/elements/xr-asset-load';
  export { default as XRAssets, AssetsDefaultComponents } from 'XrFrame/elements/xr-assets';
  export { default as XREnv, EnvDataMapping, EnvDefaultComponents } from 'XrFrame/elements/xr-env';
  export { default as XRARTracker, ARTrackerDataMapping, ARTrackerDefaultComponents } from 'XrFrame/elements/xr-ar-tracker';
}

declare module 'XrFrame/systems' {
  export { default as AssetsSystem, IAssetsSystemData } from 'XrFrame/systems/AssetsSystem';
  export { default as TickSystem, ITickSystemData } from 'XrFrame/systems/TickSystem';
  export { default as AnimationSystem, IAnimationSystemData } from 'XrFrame/systems/AnimationSystem';
  export { default as RenderSystem, IRenderSystemData } from 'XrFrame/systems/RenderSystem';
  export { default as PhysicsSystem, IPhysicsSystemData } from 'XrFrame/systems/PhysicsSystem';
  export { default as ARSystem, IARSystemData } from 'XrFrame/systems/ARSystem';
}

declare module 'XrFrame/loader' {
  export { default as TextureLoader, ITextureLoaderOptions } from 'XrFrame/loader/TextureLoader';
  export { default as ImageLoader, IImageLoaderOptions } from 'XrFrame/loader/ImageLoader';
  export { default as CubeTextureLoader, ICubeTextureLoaderOptions } from 'XrFrame/loader/CubeTextureLoader';
  export { default as EnvDataLoader, IEnvDataLoaderOptions } from 'XrFrame/loader/EnvDataLoader';
  export { default as GlTFLoader, IGLTFLoaderOptions } from 'XrFrame/loader/GlTFLoader';
  export { default as KeyframeLoader, IKeyframeLoaderOptions } from 'XrFrame/loader/KeyframeLoader';
}

declare module 'XrFrame/assets/Effect' {
  /**
      * Effect.ts
      *
      *         * @Date    : 2022/3/16下午4:44:48
      */
  import { Kanata } from 'XrFrame/ext';
  import { IAssetWithState } from 'XrFrame/loader/types';
  type Scene = import('XrFrame/core/Scene').default;
  export interface IRenderStates {
          renderQueue?: number;
          blendOn?: boolean;
          blendOnMask?: boolean;
          blendSrc?: Kanata.EBlendFactor;
          blendSrcMask?: boolean;
          blendSrcAlpha?: Kanata.EBlendFactor;
          blendSrcAlphaMask?: boolean;
          blendDst?: Kanata.EBlendFactor;
          blendDstMask?: boolean;
          blendDstAlpha?: Kanata.EBlendFactor;
          blendDstAlphaMask?: boolean;
          blendFunc?: Kanata.EBlendEquation;
          blendFuncMask?: boolean;
          cullOn?: boolean;
          cullOnMask?: boolean;
          cullFace?: Kanata.ECullMode;
          cullFaceMask?: boolean;
          depthWrite?: boolean;
          depthWriteMask?: boolean;
          depthTestOn?: boolean;
          depthTestOnMask?: boolean;
          depthTestComp?: Kanata.ECompareFunc;
          depthTestCompMask?: boolean;
          stencilWriteMask?: number;
          stencilWriteMaskMask?: boolean;
          stencilTestOn?: boolean;
          stencilTestOnMask?: boolean;
          stencilRef?: number;
          stencilRefMask?: boolean;
          stencilReadMask?: number;
          stencilReadMaskMask?: boolean;
          stencilComp?: Kanata.ECompareFunc;
          stencilCompMask?: boolean;
          stencilPass?: Kanata.EStencilOp;
          stencilPassMask?: boolean;
          stencilFail?: Kanata.EStencilOp;
          stencilFailMask?: boolean;
          stencilZFail?: Kanata.EStencilOp;
          stencilZFailMask?: boolean;
          primitiveType?: Kanata.EPrimitiveType;
          primitiveTypeMask?: boolean;
  }
  export interface IEffectAsset {
          version: number;
          name: string;
          properties?: Array<{
                  key: string;
                  type: Kanata.EUniformType;
                  default: number[];
                  macro?: string;
          }>;
          images?: Array<{
                  key: string;
                  default: string;
                  macro?: string;
          }>;
          defaultRenderQueue: number;
          passes: Array<{
                  lightMode: 'ForwardBase' | 'ForwardAdd' | 'ShadowCaster' | 'PostProcess' | 'Skybox' | 'ImageBasedLighting';
                  useMaterialRenderStates: boolean;
                  renderStates?: IRenderStates;
                  shaders: [number, number];
          }>;
          shaders: string[];
  }
  export default class Effect {
          protected _scene: Scene;
          readonly description: IEffectAsset;
          /**
              * 特效名称。
              */
          get name(): string;
          get scene(): import('XrFrame/core/Scene').default;
          /**
              * Backend对应的对象。
              * @internal
              */
          get kanataEffect(): import('XrFrame/kanata/lib/index').Effect;
          /**
              * 有几个Pass。
              */
          get passCount(): number;
          get loadingTextures(): {
                  [key: string]: IAssetWithState<import('XrFrame/kanata/lib/index').Texture>;
          };
          /**
              * 用于UniformBlock构建时传入
              * @internal
              */
          _shaderUniformBlockDesc?: Kanata.UniformDescriptor;
          /**
              * 是否没有properties。
              * @internal
              */
          _isNoProperties: boolean;
          /**
              * 是否没有images。
              * @internal
              */
          _isNoImages: boolean;
          /**
              * 根据特效配置生成特效资源。
              * @param description 特效配置。
              */
          constructor(_scene: Scene, description: IEffectAsset);
          /**
              * 材质调用方法，拷贝默认UniformBlock。
              * @internal
              */
          /**
              * 预编译
              */
          warmUp(): boolean;
  }
  export {};
}

declare module 'XrFrame/assets/Geometry' {
  /**
      * Geometry.ts
      *
      *         * @Date    : 2022/3/21下午5:25:11
      */
  import { Kanata } from 'XrFrame/ext';
  import BoundBall from 'XrFrame/math/boundBall';
  import Vector3 from 'XrFrame/math/vector3';
  type Scene = import('XrFrame/core/Scene').default;
  export interface ISubMesh {
          /**
              * 子mesh的顶点偏移。
              */
          offset: number;
          /**
              * 子mesh的顶点数量。
              */
          length: number;
          /**
              * 子mesh的材质索引。
              */
          materialIndex: number;
  }
  export default class Geometry {
          protected _scene: Scene;
          static readonly RAWLENGTH = 10;
          static readonly MAX_BONECOUNT = 96;
          _raw: Float32Array;
          /**
              * 获取IndexBuffer。
              */
          get indexBuffer(): import('XrFrame/kanata/lib/index').IndexBuffer;
          /**
              * 获取VertexBuffer。
              */
          get vertexBuffer(): import('XrFrame/kanata/lib/index').VertexBuffer;
          /**
              * 获取IndexData。
              * 这种类型的索引数据用于合批，只对于开启了`dynamicBatch`的Renderer有效。
              * 注意如果已经获取过`indexBuffer`，将无效。
              */
          get indexData(): import('XrFrame/kanata/lib/index').IndexData;
          /**
              * 获取VertexData。
              * 这种类型的顶点数据用于合批，只对于开启了`dynamicBatch`的Renderer有效。
              * 注意如果已经获取过`vertexBuffer`，将无效。
              */
          get vertexData(): import('XrFrame/kanata/lib/index').VertexData;
          /**
              * 该mesh是否有效，有些情况可能会造成这种现象，例如vertexLayout和buffer数量不匹配
              * 渲染时应该对该值做检查以防护
              * @internal
              */
          get valid(): boolean;
          /**
              * 包围球，只读。
              */
          get boundBall(): BoundBall;
          /**
              * 获取所有的SubMesh，不要修改。
              * @internal
              */
          get subMeshes(): ISubMesh[];
          /**
              * 构造一个Mesh。
              * 请不要直接使用，而是使用`Mesh.createFromDynamicArrayBuffer`。
              */
          constructor(_scene: Scene, vertexLayout: Kanata.VertexLayout, vBuffer: ArrayBufferView, iBuffer: ArrayBufferView, indexType?: Kanata.EIndexType);
          /**
              * 更新VertexBuffer和IndexBuffer。
              * @internal
              */
          uploadBufferData(vBufferOffset: number, vBufferLength: number, iBufferOffset: number, iBufferLength: number): void;
          /**
              * 更新VertexBuffer。
              * 仅在获取了`vertexBuffer`后有效。
              */
          uploadVertexBuffer(offset: number, buffer: ArrayBufferView): void;
          /**
              * 更新IndexBuffer。
              * 仅在获取了`indexBuffer`后有效。
              */
          uploadIndexBuffer(offset: number, buffer: ArrayBufferView): void;
          /**
              * 获取当前mesh有多少subMesh
              */
          getSubMeshCount(): number;
          /**
              * 获取指定序号的subMesh的索引起始点
              *
              * @returns {number} 索引起始点,返回-1代表SubMesh不存在
              */
          getIndiceStart(subMeshIndex: number): number;
          /**
              * 获取指定序号的subMesh的索引长度
              *
              * @returns {number} 索引长度，返回-1代表SubMesh不存在
              */
          getIndiceLength(subMeshIndex: number): number;
          /**
              * 获取指定序号的subMesh的材质序号
              *
              * @returns {number} 材质序号，返回-1代表subMesh不存在
              */
          getMaterialIndex(subMeshIndex: number): number;
          /**
              * 获取VertexLayout。
              */
          getVertexLayout(): Kanata.VertexLayout;
          /**
              * 修改subMesh。
              *
              * @param length 索引长度
              * @param offset 索引起始偏移
              */
          modifySubMesh(subMeshIndex: number, length: number, offset: number): boolean;
          /**
              * 增加subMesh。
              *
              * @param length 索引长度
              * @param offset 索引起始偏移
              */
          addSubMesh(length: number, offset: number, materialIndex?: number): void;
          /**
              *  动态更新包围球。
              */
          setBoundBall(center: Vector3, radius: number): void;
          /**
              * 获取第一个顶点Buffer原始数据，可能没有值。
              * @internal
              */
          /**
              * 获取索引Buffer原始数据。
              * @internal
              */
  }
  export {};
}

declare module 'XrFrame/assets/GLTFModel' {
  import Element from 'XrFrame/core/Element';
  import { Kanata } from 'XrFrame/ext';
  import { GLTFRootLoaded } from 'XrFrame/loader/glTF/GLTFRootNode';
  type Scene = import('XrFrame/core/Scene').default;
  /**
      * 收集glTF实例化过程中创建的对象，避免其GC。
      * @deprecated
      */
  export class GLTFInstanceResourceCollector {
          add(res: Kanata.IHandle): void;
          release(): void;
  }
  export default class GLTFModel {
          constructor(_scene: Scene, model: GLTFRootLoaded);
          static createFromBuffer(scene: Scene, buffer: ArrayBuffer): Promise<GLTFModel>;
          /**
              * @param scene verify context consistency
              */
          instantiate(parent: Element): Array<Element>;
  }
  export {};
}

declare module 'XrFrame/assets/EnvData' {
  /**
    * EnvData.ts
    *
    *       * @Date    : 5/11/2022, 4:07:41 PM
    */
  import { Kanata } from 'XrFrame/ext';
  export interface IEnvDataOptions {
      skybox?: {
          half: boolean;
          map: Kanata.Texture;
      };
      diffuse?: {
          coefficients: Float32Array;
      };
      specular?: {
          type: '2D';
          rgbd: boolean;
          mipmaps: boolean;
          mipmapCount?: number;
          map: Kanata.Texture;
      };
  }
  export default class EnvData {
      get useHalfSkyMap(): boolean;
      get skyboxMap(): import('XrFrame/kanata/lib/index').Texture;
      get hasDiffuse(): boolean;
      get diffuseSH(): Float32Array;
      get hasSpecular(): boolean;
      get specularRGBD(): boolean;
      get specularMipmaps(): boolean;
      get specularMipmapCount(): number;
      get specularMap(): import('XrFrame/kanata/lib/index').Texture;
      constructor(options: IEnvDataOptions);
      destroy(): void;
  }
}

declare module 'XrFrame/animation/Animation' {
  /**
      * Animation.ts
      *
      *         * @Date    : 6/17/2022, 3:17:12 PM
      */
  type Scene = import('XrFrame/core/Scene').default;
  type Element = import('XrFrame/core/Element').default;
  export type TDirection = 'forwards' | 'backwards' | 'both';
  export default class Animation<IData = any, IOptions = any> {
          __DATA_TYPE: IData;
          __OPTIONS_TYPE: IOptions;
          clipNames: string[];
          get scene(): import('XrFrame/core/Scene').default;
          constructor(_scene: Scene, data: IData);
          onInit(data: IData): void;
          onPlay(el: Element, clipName: string, options: IOptions): {
                  duration: number;
                  loop?: number;
                  delay?: number;
                  direction?: TDirection;
          };
          /**
              * @param progress 0~1
              */
          onUpdate(el: Element, progress: number, reverse: boolean): void;
          onPause(el: Element): void;
          onResume(el: Element): void;
          onStop(el: Element): void;
  }
  export {};
}

declare module 'XrFrame/animation/KeyframeAnimation' {
  import Animation, { TDirection } from "XrFrame/animation/Animation";
  type Element = import('XrFrame/core/Element').default;
  export interface IKeyframeAnimationInfo {
      keyframe: string;
      duration: number;
      ease: string;
      easeParams?: number[];
      loop?: number;
      delay?: number;
      direction?: TDirection;
  }
  export interface IKeyframeAnimationData {
      keyframe: {
          [name: string]: {
              [key: string]: {
                  [prop: string]: number | number[];
              };
          };
      };
      animation: {
          [name: string]: IKeyframeAnimationInfo;
      };
  }
  export enum EKeyframeAnimationPropType {
      Default = 0,
      Math = 1,
      Uniform = 2
  }
  export interface IKeyframeAnimationOptions {
      ease?: string;
      easeParams?: number[];
  }
  export class Keyframe {
      constructor(options: IKeyframeAnimationData['keyframe']['name']);
      start(el: Element): (p: number) => void;
  }
  export default class KeyframeAnimation extends Animation<IKeyframeAnimationData, IKeyframeAnimationOptions> {
      onInit(data: IKeyframeAnimationData): void;
      onPlay(el: Element, clipName: string, options: IKeyframeAnimationOptions): IKeyframeAnimationInfo;
      onUpdate(el: Element, progress: number, reverse: boolean): void;
      onPause(el: Element): void;
      onResume(el: Element): void;
      onStop(el: Element): void;
  }
  export {};
}

declare module 'XrFrame/assets/factories' {
  /**
    * factories.ts
    *
    *       * @Date    : 2022/3/23下午4:04:18
    */
  import Scene from "XrFrame/core/Scene";
  import Effect from "XrFrame/assets/Effect";
  import Geometry from "XrFrame/assets/Geometry";
  export function getAssetFactory<T = any>(type: string, id: string): (scene: Scene) => T;
  export const registerGeometry: (id: string, factory: (scene: Scene) => Geometry) => void;
  export const registerEffect: (id: string, factory: (scene: Scene) => Effect) => void;
  export const registerTexture: (id: string, factory: (scene: Scene) => import('XrFrame/kanata/lib/index').Texture) => void;
  export const registerTextureCube: (id: string, factory: (scene: Scene) => import('XrFrame/kanata/lib/index').Texture) => void;
  export const registerVertexDataDesc: (id: string, factory: (scene: Scene) => import('XrFrame/kanata/lib/index').VertexDataDescriptor) => void;
  export const registerUniformDesc: (id: string, factory: (scene: Scene) => import('XrFrame/kanata/lib/index').UniformDescriptor) => void;
  export const registerVertexLayout: (id: string, factory: (scene: Scene) => import('XrFrame/kanata/lib/index').VertexLayout) => void;
}

declare module 'XrFrame/math/vector2' {
  export default class Vector2 {
          /**
              * x值
              *
              * @type {number}
              * @memberof Vector2
              */
          get x(): number;
          set x(val: number);
          /**
              * y值
              *
              * @type {number}
              * @memberof Vector2
              */
          get y(): number;
          set y(val: number);
          /**
              * 零向量，不要对该对象进行修改
              *
              * @readonly
              * @static
              * @type {V3ReadOnly}
              * @memberof Vector3
              */
          static readonly ZERO: Vector2;
          /**
              * 一向量，不要对该对象进行修改
              *
              * @readonly
              * @static
              * @type {V3ReadOnly}
              * @memberof Vector3
              */
          static readonly ONE: Vector2;
          _raw: Float32Array;
          /**
              * 使用一个数组创建
              * 此操作会拷贝一份数组
              *
              * @static
              * @param {number[]} array 数据源，长度必须为2，否则会抛出异常
              * @returns {Vector2} 创建出来的向量
              * @memberof Vector2
              */
          static createFromArray(array: number[]): Vector2;
          /**
              * 使用某个已有的typedArray创建
              * 此操作不会拷贝数据，而是在原来的内存区域上操作
              *
              * @static
              * @param {Float32Array} array 数据源
              * @param {number} [offset=0] 数据源中的偏移
              * @returns {Vector2} 创建出来的向量
              * @memberof Vector2
              */
          static createFromTypedArray(array: Float32Array, offset?: number): Vector2;
          /**
              * 返回向量数据
              *
              * @returns {number[]} 矩阵数据，以JSArray返回
              * @memberof Vector2
              */
          toArray(): number[];
          /**
              * 判断与目标向量的值是否相等
              *
              * @param {V2ReadOnly} v 目标向量
              * @returns {boolean} 是否相等，这里误差小于10^-6视为相等
              * @memberof Vector2
              */
          equal(v: Vector2): boolean;
          /**
              * 拷贝目标向量的值到该向量
              *
              * @param {V2ReadOnly} val 目标向量
              * @returns {Vector2} 自身
              * @memberof Vector2
              */
          set(val: Vector2): Vector2;
          /**
              * 设置向量的值
              *
              * @param {number} x x值
              * @param {number} y y值
              * @returns {Vector2} 自身
              * @memberof Vector2
              */
          setValue(x: number, y: number): Vector2;
          /**
              * 向量加法
              *
              * @param {V2ReadOnly} v 目标向量
              * @param {Vector2} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector2} 计算结果
              * @memberof Vector2
              */
          add(v: Vector2, dst?: Vector2): Vector2;
          /**
              * 向量减法
              *
              * @param {V2ReadOnly} v 目标向量
              * @param {Vector2} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector2} 计算结果
              * @memberof Vector2
              */
          sub(v: Vector2, dst?: Vector2): Vector2;
          /**
              * 向量归一化，如该向量为零向量，则结果依然为零向量
              *
              * @param {Vector2} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector2} 计算结果
              * @memberof Vector2
              */
          normalize(dst?: Vector2): Vector2;
          /**
              * 向量缩放
              *
              * @param {number} f 缩放比
              * @param {Vector2} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector2} 计算结果
              * @memberof Vector2
              */
          scale(f: number, dst?: Vector2): Vector2;
          /**
              * 在该向量与目标向量之间计算插值
              *
              * @param {V2ReadOnly} v 目标向量
              * @param {number} f 插值系数
              * @param {Vector2} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector2} 计算结果
              * @memberof Vector2
              */
          lerp(v: Vector2, f: number, dst?: Vector2): Vector2;
          /**
              * 取反
              * @returns
              */
          negate(): this;
          /**
              * 向量点乘
              *
              * @param {V2ReadOnly} v 目标向量
              * @returns {number} 计算结果
              * @memberof Vector2
              */
          dot(v: Vector2): number;
          /**
              * 向量的模
              *
              * @returns {number} 计算结果
              * @memberof Vector2
              */
          length(): number;
          /**
              * 拷贝该向量
              *
              * @returns {Vector2} 拷贝出来的对象
              * @memberof Vector2
              */
          clone(): Vector2;
          /**
              * 是否为零向量
              *
              * @returns {boolean}
              * @memberof Vector2
              */
          isZero(): boolean;
          /**
              * 获取向量旋转角，以角度表示
              *
              * @returns {number} 旋转角，以角度表示
              * @memberof Vector2
              */
          getAngle(): number;
          setArray(value: ArrayLike<number>, offset?: number): Vector2;
  }
}

declare module 'XrFrame/math/vector3' {
  import QuatReadOnly from "XrFrame/math/quaternion";
  import M4ReadOnly from "XrFrame/math/matrix4";
  export default class Vector3 {
          /**
              * x值
              *
              * @type {number}
              * @memberof Vector3
              */
          get x(): number;
          set x(val: number);
          /**
              * y值
              *
              * @type {number}
              * @memberof Vector3
              */
          get y(): number;
          set y(val: number);
          /**
              * z值
              *
              * @type {number}
              * @memberof Vector3
              */
          get z(): number;
          set z(val: number);
          /**
              * 零向量，不要对该对象进行修改
              *
              * @readonly
              * @static
              * @type {Vector3}
              * @memberof Vector3
              */
          static readonly ZERO: Vector3;
          /**
              * 一向量，不要对该对象进行修改
              *
              * @readonly
              * @static
              * @type {Vector3}
              * @memberof Vector3
              */
          static readonly ONE: Vector3;
          /**
              * 上方向，不要对该对象进行修改
              *
              * @static
              * @type {Vector3}
              * @memberof Vector3
              */
          static readonly Up: Vector3;
          /**
              * 前方向，基于左手坐标系，不要对该对象进行修改
              *
              * @static
              * @type {Vector3}
              * @memberof Vector3
              */
          static readonly ForwardLH: Vector3;
          _raw: Float32Array;
          /**
              * 使用一个数组创建
              * 此操作会拷贝一份数组
              *
              * @static
              * @param {number[]} array 数据源，长度必须为3，否则会抛出异常
              * @returns {Vector3} 创建出来的向量
              * @memberof Vector3
              */
          static createFromArray(array: number[]): Vector3;
          /**
              * 使用某个已有的typedArray创建
              * 此操作不会拷贝数据，而是在原来的内存区域上操作
              *
              * @static
              * @param {Float32Array} array 数据源
              * @param {number} [offset=0] 数据源中的偏移
              * @returns {Vector3}
              * @memberof Vector3
              */
          static createFromTypedArray(array: Float32Array, offset?: number): Vector3;
          /**
              * 使用四元数进行向量旋转
              *
              * @static
              * @param {Vector3} source 源向量
              * @param {QuatReadOnly} rotation 用于旋转的四元数
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Vector3
              */
          static transformQuat(source: Vector3, rotation: QuatReadOnly, dst?: Vector3): Vector3;
          static transformCoordinate(coordinate: Vector3, transform: M4ReadOnly, dst?: Vector3): Vector3;
          /**
              * 返回向量数据
              *
              * @returns {number[]} 矩阵数据，以JSArray返回
              * @memberof Vector3
              */
          toArray(): number[];
          /**
              * 判断与目标向量的值是否相等
              *
              * @param {Vector3} v 目标向量
              * @returns {boolean} 是否相等，这里误差小于10^-6视为相等
              * @memberof Vector3
              */
          equal(v: Vector3): boolean;
          /**
              * 拷贝目标向量的值到该向量
              *
              * @param {Vector3} val 目标向量
              * @returns {Vector3} 自身
              * @memberof Vector3
              */
          set(v: Vector3): Vector3;
          /**
              * 设置向量的值
              *
              * @param {number} x x
              * @param {number} y y
              * @param {number} z z
              * @returns {Vector3} 自身
              * @memberof Vector3
              */
          setValue(x: number, y: number, z: number): Vector3;
          setFromArray(xyz: number[]): Vector3;
          /**
              * 向量加法
              *
              * @param {Vector3} v 目标向量
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Vector3
              */
          add(v: Vector3, dst?: Vector3): Vector3;
          /**
              * 向量减法
              *
              * @param {Vector3} v 目标向量
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Vector3
              */
          sub(v: Vector3, dst?: Vector3): Vector3;
          /**
              * 向量叉乘
              *
              * @param {Vector3} v 目标向量
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Vector3
              */
          cross(v: Vector3, dst?: Vector3): Vector3;
          /**
              * 向量归一化
              *
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Vector3
              */
          normalize(dst?: Vector3): Vector3;
          /**
              * 向量缩放
              *
              * @param {number} f 缩放比
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Vector3
              */
          scale(f: number, dst?: Vector3): Vector3;
          /**
              * 向量缩放
              *
              * @param {number} x x缩放比
              * @param {number} y y缩放比
              * @param {number} z z缩放比
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Vector3
              */
          scaleXYZ(x: number, y: number, z: number, dst?: Vector3): Vector3;
          /**
              * 在该向量与目标向量之间计算插值
              *
              * @param {Vector3} v 目标向量
              * @param {number} f 插值系数
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Vector3
              */
          lerp(v: Vector3, f: number, dst?: Vector3): Vector3;
          /**
              * 取反
              * @returns
              */
          negate(): this;
          /**
              * 向量点乘
              *
              * @param {Vector3} v 目标向量
              * @returns {number} 计算结果
              * @memberof Vector3
              */
          dot(v: Vector3): number;
          /**
              * 向量的模
              *
              * @returns {number} 计算结果
              * @memberof Vector3
              */
          length(): number;
          /**
              * 拷贝该向量
              *
              * @returns {Vector3} 拷贝出来的对象
              * @memberof Vector3
              */
          clone(): Vector3;
          /**
              * 是否为零向量
              *
              * @returns {boolean}
              * @memberof Vector3
              */
          isZero(): boolean;
          /**
              * 获取到目标点的距离
              *
              * @param {Vector3} p 目标点
              * @returns {number} 计算结果
              * @memberof Vector3
              */
          distanceTo(p: Vector3): number;
          /**
              * 获取到目标点的角度
              *
              * @param {Vector3} location 目标点
              * @returns {number} 计算结果
              * @memberof Vector3
              */
          angleTo(location: Vector3, dst?: Vector3): Vector3;
          setFromMatrixColumn(m: M4ReadOnly, index: number): Vector3;
          fromArray(array: Float32Array, offset: number): Vector3;
          setFromMatrixScale(m: M4ReadOnly): Vector3;
          /**
              * create by janzen
              * Sets this vector to the position elements of the transformation matrix
              */
          setFromMatrixPosition(worldMatrix: M4ReadOnly): Vector3;
          /**
              * create by janzen
              * Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective.
              */
          applyMatrix4(m: M4ReadOnly): Vector3;
          /**
              * create by roamye
              * Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective.
              */
          applyMatrix4Raw(m: Float32Array): this;
          applyQuaternion(q: QuatReadOnly): this;
          /**
              * create by janzen
              * Transforms the direction of this vector by a matrix (the upper left 3 x 3 subset of a m) and then normalizes the result.
              */
          transformDirection(m: M4ReadOnly): Vector3;
          /**
              * create by roamye
              * Transforms the direction of this vector by a matrix (the upper left 3 x 3 subset of a m) and then normalizes the result.
              */
          transformDirectionRaw(raw: Float32Array): Vector3;
          /**
              * created by shanexyzhou
              * 从物理引擎内的RawVec3f生成Vector3
              */
          static fromPhysics(v: any): Vector3;
          fromPhysics(v: any): Vector3;
          static Phys3D?: typeof phys3D;
          static clearPhysicsPool(): void;
          /**
              * created by shanexyzhou
              * 生成物理引擎内的RawVec3f
              */
          toPhysics(): any;
          setArray(value: ArrayLike<number>, offset?: number): Vector3;
          print(): void;
  }
  export class Vector3_READONLY extends Vector3 {
          get x(): number;
          set x(v: number);
          get y(): number;
          set y(v: number);
          get z(): number;
          set z(v: number);
          constructor(array?: Float32Array, offset?: number);
          set(): this;
          setValue(): this;
  }
}

declare module 'XrFrame/math/vector4' {
  export default class Vector4 {
          /**
              * x值
              *
              * @type {number}
              * @memberof Vector4
              */
          get x(): number;
          set x(val: number);
          /**
              * y值
              *
              * @type {number}
              * @memberof Vector4
              */
          get y(): number;
          set y(val: number);
          /**
              * z值
              *
              * @type {number}
              * @memberof Vector4
              */
          get z(): number;
          set z(val: number);
          /**
              * w值
              *
              * @type {number}
              * @memberof Vector4
              */
          get w(): number;
          set w(val: number);
          /**
              * 零向量，不要对该对象进行修改
              *
              * @static
              * @readonly
              * @type {Vector4}
              * @memberof Vector4
              */
          static readonly ZERO: Vector4;
          /**
              * 一向量，不要对该对象进行修改
              *
              * @readonly
              * @static
              * @type {V3ReadOnly}
              * @memberof Vector3
              */
          static readonly ONE: Vector4;
          _raw: Float32Array;
          /**
              * 使用一个数组创建
              * 此操作会拷贝一份数组
              *
              * @static
              * @param {number[]} array 数据源，长度必须为4，否则会抛出异常
              * @returns {Vector4} 创建出来的向量
              * @memberof Vector4
              */
          static createFromArray(array: number[]): Vector4;
          /**
              * 使用某个已有的typedArray创建
              * 此操作不会拷贝数据，而是在原来的内存区域上操作
              *
              * @static
              * @param {Float32Array} array 数据源
              * @param {number} [offset=0] 数据源中的偏移
              * @returns {Vector4}
              * @memberof Vector4
              */
          static createFromTypedArray(array: Float32Array, offset?: number): Vector4;
          /**
              * 返回向量数据
              *
              * @returns {number[]} 矩阵数据，以JSArray返回
              * @memberof Vector4
              */
          toArray(): number[];
          /**
              * 判断与目标向量的值是否相等
              *
              * @param {Vector4} v 目标向量
              * @returns {boolean} 是否相等，这里误差小于10^-6视为相等
              * @memberof Vector4
              */
          equal(v: Vector4): boolean;
          /**
              * 拷贝目标向量的值到该向量
              *
              * @param {Vector4} val 目标向量
              * @returns {Vector4} 自身
              * @memberof Vector4
              */
          set(v: Vector4): Vector4;
          /**
              * 设置向量的值
              *
              * @param {number} x x值
              * @param {number} y y值
              * @param {number} z z值
              * @param {number} w w值
              * @returns {Vector4} 自身
              * @memberof Vector4
              */
          setValue(x: number, y: number, z: number, w: number): Vector4;
          /**
              * 向量加法
              *
              * @param {Vector4} v 目标向量
              * @param {Vector4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector4} 计算结果
              * @memberof Vector4
              */
          add(v: Vector4, dst?: Vector4): Vector4;
          /**
              * 向量减法
              *
              * @param {Vector4} v 目标向量
              * @param {Vector4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector4} 计算结果
              * @memberof Vector4
              */
          sub(v: Vector4, dst?: Vector4): Vector4;
          /**
              * 向量缩放
              *
              * @param {number} f 缩放比
              * @param {Vector4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector4} 计算结果
              * @memberof Vector4
              */
          scale(f: number, dst?: Vector4): Vector4;
          /**
              * 在该向量与目标向量之间计算插值
              *
              * @param {Vector4} v 目标向量
              * @param {number} f 插值系数
              * @param {Vector4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector4} 计算结果
              * @memberof Vector4
              */
          lerp(v: Vector4, f: number, dst?: Vector4): Vector4;
          /**
              * 取反
              * @returns
              */
          negate(): this;
          /**
              * 向量点乘
              *
              * @param {Vector4} v 目标向量
              * @returns {number} 计算结果
              * @memberof Vector4
              */
          dot(v: Vector4): number;
          /**
              * 是否为零向量
              *
              * @returns {boolean}
              * @memberof Vector4
              */
          isZero(): boolean;
          /**
              * 拷贝该向量
              *
              * @returns {Vector4} 拷贝出来的对象
              * @memberof Vector4
              */
          clone(): Vector4;
          setArray(value: ArrayLike<number>, offset?: number): Vector4;
  }
}

declare module 'XrFrame/math/quaternion' {
  import Vector3 from "XrFrame/math/vector3";
  import V3ReadOnly from "XrFrame/math/vector3";
  import QuatReadOnly from "XrFrame/math/quaternion";
  import M4ReadOnly from "XrFrame/math/matrix4";
  /**
      * @public
      */
  export default class Quaternion {
          set x(val: number);
          /**
              * y值
              *
              * @type {number}
              * @memberof Quaternion
              */
          get y(): number;
          set y(val: number);
          /**
              * z值
              *
              * @type {number}
              * @memberof Quaternion
              */
          get z(): number;
          set z(val: number);
          /**
              * w值
              *
              * @type {number}
              * @memberof Quaternion
              */
          get w(): number;
          set w(val: number);
          /**
              * 默认四元数，不要对该对象进行修改
              *
              * @readonly
              * @static
              * @type {QuatReadOnly}
              * @memberof Quaternion
              */
          static readonly DEFAULT: QuatReadOnly;
          _raw: Float32Array;
          /**
              * 从旋转矩阵创建
              *
              * @static
              * @param {Matrix4} mat
              * @param {Quaternion} [dst]
              * @returns {Quaternion}
              * @memberof Quaternion
              */
          static createFromMatrix4(mat: M4ReadOnly, dst?: Quaternion): Quaternion;
          /**
              * 从轴向旋转创建
              *
              * @static
              * @param {V3ReadOnly} axis 旋转轴
              * @param {number} rad 旋转幅度
              * @param {Quaternion} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Quaternion} 计算结果
              * @memberof Quaternion
              */
          static createFromAxisAngle(axis: V3ReadOnly, rad: number, dst?: Quaternion): Quaternion;
          /**
              * 由视角方向创建四元数
              *
              * @static
              * @param {V3ReadOnly} forward 前方向
              * @param {V3ReadOnly} up 上方向
              * @param {Quaternion} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Quaternion} 计算结果
              * @memberof Quaternion
              */
          static lookRotation(forward: V3ReadOnly, up: V3ReadOnly, dst?: Quaternion): Quaternion;
          /**
              * 使用数值创建
              *
              * @static
              * @param {number} x x
              * @param {number} y y
              * @param {number} z z
              * @param {number} w w
              * @returns {Quaternion} 创建出来的四元数
              * @memberof Quaternion
              */
          static createFromNumber(x: number, y: number, z: number, w: number): Quaternion;
          /**
              * 使用一个数组创建
              * 此操作会拷贝一份数组
              *
              * @static
              * @param {number[]} array 数据源，长度必须为4，否则会抛出异常
              * @returns {Quaternion}
              * @memberof Quaternion
              */
          static createFromArray(array: number[]): Quaternion;
          /**
              * 使用某个已有的typedArray创建
              * 此操作不会拷贝数据，而是在原来的内存区域上操作
              *
              * @static
              * @param {Float32Array} array 数据源
              * @param {number} [offset=0] 数据源中的偏移
              * @returns {Quaternion}
              * @memberof Quaternion
              */
          static createFromTypedArray(array: Float32Array, offset?: number): Quaternion;
          /**
              * 通过俩个向量创建四元数
              * @param vFrom
              * @param vTo
              * @returns
              */
          static createFromUnitVectors(vFrom: Vector3, vTo: Vector3): QuatReadOnly;
          /**
              * 拷贝目标四元数的值到自身
              *
              * @param {Quaternion} quat 目标四元数
              * @returns {Quaternion} 自身
              * @memberof Quaternion
              */
          set(quat: Quaternion): Quaternion;
          /**
              * 设置四元数的值
              *
              * @param {number} x
              * @param {number} y
              * @param {number} z
              * @param {number} w
              * @returns {Quaternion} 自身
              * @memberof Quaternion
              */
          setValue(x: number, y: number, z: number, w: number): Quaternion;
          /**
              * 球面插值
              *
              * @param {Quaternion} right 目标四元数
              * @param {number} t 插值系数，越接近 1 则结果越接近目标
              * @param {Quaternion} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Quaternion} 计算结果
              * @memberof Quaternion
              */
          slerp(right: QuatReadOnly, t: number, dst?: Quaternion): Quaternion;
          /**
              * 四元数反转
              *
              * @param {Quaternion} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Quaternion} 计算结果
              * @memberof Quaternion
              */
          invert(dst?: Quaternion): Quaternion;
          /**
              * 四元数相加
              *
              * @param {Quaternion} quat 目标四元数
              * @param {Quaternion} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Quaternion} 计算结果
              * @memberof Quaternion
              */
          add(quat: QuatReadOnly, dst?: Quaternion): Quaternion;
          /**
              * 四元数相减
              *
              * @param {Quaternion} quat 目标四元数
              * @param {Quaternion} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Quaternion} 计算结果
              * @memberof Quaternion
              */
          sub(quat: QuatReadOnly, dst?: Quaternion): Quaternion;
          /**
              * 四元数相乘
              *
              * @param {Quaternion} quat 目标四元数
              * @param {Quaternion} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Quaternion} 计算结果
              * @memberof Quaternion
              */
          multiply(quat: QuatReadOnly, dst?: Quaternion): Quaternion;
          premultiply(q: QuatReadOnly): QuatReadOnly;
          /**
              * 点乘
              * @param q
              */
          dot(q: QuatReadOnly): number;
          length(): number;
          normalize(): this;
          setFromUnitVectors(vFrom: any, vTo: any): this;
          /**
              * 相对角度
              * @param q
              */
          angleTo(q: QuatReadOnly): number;
          /**
              * 转向对应的角度
              * @param q
              * @param step
              */
          rotateTowards(q: any, step: any): QuatReadOnly;
          /**
              * 拷贝四元数
              *
              * @returns {Quaternion} 拷贝后的对象
              * @memberof Quaternion
              */
          clone(): Quaternion;
          /**
              * 四元数是否为默认四元数（表示零旋转）
              *
              * @returns {boolean}
              * @memberof Quaternion
              */
          isDefault(): boolean;
          /**
              * 将该四元数转换成欧拉角，x代表Pitch,y代表Yaw,z代表Roll
              * 旋转的顺序为YXZ
              *
              * @notation 2022.6.1 by shanexyzhou
              * 这个函数有bug：
              * 正确转换：[ -0.7, 0, 0, 0.7 ] → [ x: -1.5707963, y: 0, z: 0 ]
              * 目前结果：[ x: -1.5707963, y: -1.5707963, z: 1.5707963 ] (错误)
              * 待修复，目前先别用这个函数。
              *
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Quaternion
              */
          toEulerAngles(dst?: Vector3): Vector3;
          /**
              * 判断与目标四元数的值是否相等
              *
              * @param {QuatReadOnly} quat 目标四元数
              * @returns {boolean}
              * @memberof Quaternion
              */
          equal(quat: QuatReadOnly): boolean;
          /**
              * created by shanexyzhou
              * 从物理引擎内的RawQuaternion生成Quaternion
              */
          static fromPhysics(v: phys3D.RawQuaternion): Quaternion;
          fromPhysics(v: phys3D.RawQuaternion): Quaternion;
          static Phys3D?: typeof phys3D;
          static clearPhysicsPool(): void;
          /**
              * created by shanexyzhou
              * 生成物理引擎内的RawQuaternion
              */
          toPhysics(): phys3D.RawQuaternion;
          setArray(value: ArrayLike<number>, offset?: number): Quaternion;
  }
}

declare module 'XrFrame/math/matrix3' {
  import Vector2 from "XrFrame/math/vector2";
  import V2ReadOnly from "XrFrame/math/vector2";
  export default class Matrix3 {
          get raw(): Float32Array;
          _raw: Float32Array;
          /**
              * 使用一个数组创建
              * 此操作会拷贝一份数组
              *
              * @static
              * @param {number[]} array 数据源，长度必须为9，否则会抛出异常
              * @returns {Matrix3} 创建出来的矩阵
              * @memberof Matrix3
              */
          static createFromArray(array: number[]): Matrix3;
          /**
              * 使用某个已有的typedArray创建
              * 此操作不会拷贝数据，而是在原来的内存区域上操作
              *
              * @static
              * @param {Float32Array} array 数据源
              * @param {number} [offset=0] 数据源中的偏移
              * @returns {Matrix3} 创建出来的矩阵
              * @memberof Matrix3
              */
          static createFromTypedArray(array: Float32Array, offset?: number): Matrix3;
          /**
              * 返回矩阵数据
              *
              * @returns {number[]} 矩阵数据，以JSArray返回
              * @memberof Matrix3
              */
          toArray(): number[];
          /**
              * 将该矩阵进行位移变换
              *
              * @param {number} tx x轴位移
              * @param {number} ty y轴位移
              * @param {Matrix3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix3} 计算结果
              * @memberof Matrix3
              */
          translate(tx: number, ty: number, dst?: Matrix3): Matrix3;
          /**
              * 将该矩阵进行缩放变换
              *
              * @param {number} sx x轴缩放
              * @param {number} sy y轴缩放
              * @param {Matrix3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix3} 计算结果
              * @memberof Matrix3
              */
          scale(sx: number, sy: number, dst?: Matrix3): Matrix3;
          /**
              * 将该矩阵进行旋转变换
              *
              * @param {number} radians 旋转幅度，用弧度表示
              * @param {Matrix3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix3} 计算结果
              * @memberof Matrix3
              */
          rotate(radians: number, dst?: Matrix3): Matrix3;
          /**
              * 求该矩阵的逆
              *
              * @param {Matrix3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix3} 计算结果
              * @memberof Matrix3
              */
          inverse(dst?: Matrix3): Matrix3;
          /**
              * 将该矩阵与另一个矩阵相乘
              *
              * @param {Matrix3} m 右乘矩阵
              * @param {Matrix3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix3} 计算结果
              * @memberof Matrix3
              */
          multiply(m: Matrix3, dst?: Matrix3): Matrix3;
          /**
              * 矩阵变换作用于点
              *
              * @param {Vector2} v 点
              * @param {Vector2} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector2} 计算结果
              * @memberof Matrix3
              */
          transformPoint(v: V2ReadOnly, dst?: Vector2): Vector2;
          setArray(value: ArrayLike<number>, offset?: number): Matrix3;
  }
}

declare module 'XrFrame/math/matrix4' {
  import Vector3 from "XrFrame/math/vector3";
  import Vector4 from "XrFrame/math/vector4";
  import V3ReadOnly from "XrFrame/math/vector3";
  import V4ReadOnly from "XrFrame/math/vector4";
  import QuatReadOnly from "XrFrame/math/quaternion";
  import M3ReadOnly from "XrFrame/math/matrix3";
  /**
      * @public
      */
  export default class Matrix4 {
          _raw: Float32Array;
          /**
              * 构造相机矩阵
              *
              * @static
              * @param {Vector3} position 相机位置
              * @param {Vector3} target 相机目标位置
              * @param {Vector3} up 上方向
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static lookAt(position: V3ReadOnly, target: V3ReadOnly, up: V3ReadOnly, dst?: Matrix4): Matrix4;
          /**
              * 构造透视投影矩阵
              *
              * @static
              * @param {number} fieldOfViewRadians 视野大小，用弧度表示
              * @param {number} aspect 宽高比
              * @param {number} near 近平面
              * @param {number} far 远平面
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static perspective(fieldOfViewRadians: number, aspect: number, near: number, far: number, dst?: Matrix4): Matrix4;
          /**
              * 构造正交投影矩阵
              *
              * @static
              * @param {number} left 左平面
              * @param {number} right 右平面
              * @param {number} bottom 上平面
              * @param {number} top 下平面
              * @param {number} near 近平面
              * @param {number} far 远平面
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number, dst?: Matrix4): Matrix4;
          /**
              * 将四元数转换为旋转矩阵
              *
              * @static
              * @param {Quaternion} quat 四元数
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static fromQuaternion(quat: QuatReadOnly, dst?: Matrix4): Matrix4;
          /**
              * 使用一个数组创建
              * 此操作会拷贝一份数组
              *
              * @static
              * @param {number[]} array 数据源，长度必须为16，否则会抛出异常
              * @returns {Matrix4} 创建出来的矩阵
              * @memberof Matrix4
              */
          static createFromArray(array: number[]): Matrix4;
          /**
              * 使用某个已有的typedArray创建
              * 此操作不会拷贝数据，而是在原来的内存区域上操作
              *
              * @static
              * @param {Float32Array} array 数据源
              * @param {number} [offset=0] 数据源中的偏移
              * @returns {Matrix4} 创建出来的矩阵
              * @memberof Matrix4
              */
          static createFromTypedArray(array: Float32Array, offset?: number): Matrix4;
          /**
              * 创建绕X轴旋转的矩阵
              *
              * @static
              * @param {number} rad 旋转幅度，用弧度表示
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static createRotationX(rad: number, dst?: Matrix4): Matrix4;
          /**
              * 创建绕Y轴旋转的矩阵
              *
              * @static
              * @param {number} rad 旋转幅度，用弧度表示
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static createRotationY(rad: number, dst?: Matrix4): Matrix4;
          /**
              * 创建绕Z轴旋转的矩阵
              *
              * @static
              * @param {number} rad 旋转轴
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static createRotationZ(rad: number, dst?: Matrix4): Matrix4;
          /**
              * 创建绕指定轴旋转的矩阵
              *
              * @static
              * @param {Vector3} axis 旋转轴
              * @param {number} angleInRadians 旋转幅度，用弧度表示
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static createRotationAxis(axis: V3ReadOnly, angleInRadians: number, dst?: Matrix4): Matrix4;
          /**
              * 将位移旋转缩放合成一个RST矩阵，旋转用矩阵表示
              *
              * @static
              * @param {V3ReadOnly} translation 位移向量
              * @param {M4ReadOnly} rotation 旋转矩阵
              * @param {V3ReadOnly} scale 缩放向量
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static composeTRS(translation: V3ReadOnly, rotation: Matrix4, scale: V3ReadOnly, dst?: Matrix4): Matrix4;
          /**
              * 将位移旋转缩放合成一个RST矩阵，旋转用四元数表示
              *
              * @static
              * @param {V3ReadOnly} translation 位移向量
              * @param {QuatReadOnly} rotation 旋转四元数
              * @param {V3ReadOnly} scale 缩放向量
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static composeTQS(translation: V3ReadOnly, rotation: QuatReadOnly, scale: V3ReadOnly, dst?: Matrix4): Matrix4;
          /**
              * 从二维RST矩阵扩展到三维RST矩阵
              *
              * @static
              * @param {Matrix3} m3 二维RST矩阵
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          static composeFromRST3(m3: M3ReadOnly, dst?: Matrix4): Matrix4;
          /**
              * 返回矩阵数据
              *
              * @returns {number[]} 矩阵数据，以JSArray返回
              * @memberof Matrix4
              */
          toArray(): number[];
          /**
              * 将该矩阵进行位移变换
              *
              * @param {number} tx x轴位移
              * @param {number} ty y轴位移
              * @param {number} tz z轴位移
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          translate(tx: number, ty: number, tz: number, dst?: Matrix4): Matrix4;
          /**
              * 将该矩阵进行缩放变换
              *
              * @param {number} sx x轴缩放
              * @param {number} sy y轴缩放
              * @param {number} sz z轴缩放
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          scale(sx: number, sy: number, sz: number, dst?: Matrix4): Matrix4;
          /**
              * 将该矩阵绕x轴旋转
              *
              * @param {number} rx 旋转幅度，用弧度表示
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          xRotate(rx: number, dst?: Matrix4): Matrix4;
          /**
              * 将该矩阵绕y轴旋转
              *
              * @param {number} ry 旋转幅度，用弧度表示
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          yRotate(ry: number, dst?: Matrix4): Matrix4;
          /**
              * 将该矩阵绕z轴旋转
              *
              * @param {number} rz 旋转幅度，用弧度表示
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          zRotate(rz: number, dst?: Matrix4): Matrix4;
          /**
              * 将该矩阵绕指定轴旋转
              *
              * @param {Vector3} axis 轴向量
              * @param {number} angleInRadians 旋转幅度，用弧度表示
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          axisRotate(axis: V3ReadOnly, angleInRadians: number, dst?: Matrix4): Matrix4;
          /**
              * 将该矩阵使用指定四元数旋转
              *
              * @param {Quaternion} quaternion 四元数
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          rotateByQuaternion(quaternion: QuatReadOnly, dst?: Matrix4): Matrix4;
          /**
              * 求该矩阵的逆
              *
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          inverse(dst?: Matrix4): Matrix4;
          /**
              * 求该矩阵的转置
              *
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          transpose(dst?: Matrix4): Matrix4;
          /**
              * 将该矩阵与另一个矩阵相乘
              *
              * @param {Matrix4} m 右乘矩阵
              * @param {Matrix4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Matrix4} 计算结果
              * @memberof Matrix4
              */
          multiply(m: Matrix4, dst?: Matrix4): Matrix4;
          /**
              * 矩阵变换作用于向量
              *
              * @param {Vector4} v 向量
              * @param {Vector4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector4} 计算结果
              * @memberof Matrix4
              */
          transformVector(v: V4ReadOnly, dst?: Vector4): Vector4;
          /**
              * 矩阵变换作用于方向
              *
              * @param {Vector3} dir 方向
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Matrix4
              */
          transformDirection(dir: V3ReadOnly, dst?: Vector3): Vector3;
          /**
              * 矩阵变换作用于点
              *
              * @param {Vector3} p 点
              * @param {Vector3} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector3} 计算结果
              * @memberof Matrix4
              */
          transformPoint(p: V3ReadOnly, dst?: Vector3): Vector3;
          /**
              * 拷贝目标矩阵的值到该矩阵
              *
              * @param {M4ReadOnly} val 目标
              * @returns {Matrix4} 自身
              * @memberof Matrix4
              */
          set(val: Matrix4): Matrix4;
          /**
              * 拷贝该矩阵
              *
              * @returns {Matrix4} 拷贝出来的对象
              * @memberof Matrix4
              */
          clone(): Matrix4;
          /**
              * 分解RTS矩阵为位移、旋转、缩放向量，返回是否成功
              *
              * @param {Vector3} dstTranslation 目标位移向量
              * @param {Matrix4} dstRotationMatrix 目标旋转矩阵
              * @param {Vector3} dstScale 目标缩放分量
              * @returns {boolean} 分解是否成功，如不成功，可能是缩放分量为0
              * @memberof Matrix4
              */
          decomposeTransRotMatScale(dstTranslation: Vector3, dstRotationMatrix: Matrix4, dstScale: Vector3): boolean;
          /**
              * 设置该矩阵某行某列的值
              *
              * @param {number} value 值
              * @param {number} column 列数
              * @param {number} row 行数
              * @returns {Matrix4} 自身
              * @memberof Matrix4
              */
          setValue(value: number, column: number, row: number): Matrix4;
          /**
              * 获取矩阵某行某列的值
              *
              *
              * @param {number} column 列数
              * @param {number} row 行数
              * @returns {number} 自身
              * @memberof Matrix4
              */
          getValue(column: number, row: number): number;
          /**
              * 设置矩阵某列
              *
              * @param {V4ReadOnly} vec 列向量
              * @param {number} column 列数
              * @returns {Matrix4} 自身
              * @memberof Matrix4
              */
          setColumn(vec: V4ReadOnly, column: number): Matrix4;
          /**
              * 获取矩阵某列
              *
              * @param {number} column 列数
              * @param {Vector4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector4} 该列数据
              * @memberof Matrix4
              */
          getColumn(column: number, dst?: Vector4): Vector4;
          /**
              * 设置矩阵某行
              *
              * @param {V4ReadOnly} vec 行向量
              * @param {number} row 行数
              * @returns {Matrix4} 自身
              * @memberof Matrix4
              */
          setRow(vec: V4ReadOnly, row: number): Matrix4;
          /**
              * 获取矩阵某行
              *
              * @param {number} row 行数
              * @param {Vector4} [dst] 计算结果输出到的目标对象，如不传则新建一个
              * @returns {Vector4} 该行数据
              * @memberof Matrix4
              */
          getRow(row: number, dst?: Vector4): Vector4;
          setArray(value: ArrayLike<number>, offset?: number): Matrix4;
          print(): void;
  }
}

declare module 'XrFrame/math/color' {
  import Vector3 from "XrFrame/math/vector3";
  export enum BlendType {
      Alpha = 0,
      RGB = 1,
      RGBA = 2,
      None = 3
  }
  export const GetColorFromHex: (str: any) => number;
  /**
    * @public
    */
  export default class Color {
      get r(): number;
      set r(val: number);
      get g(): number;
      set g(val: number);
      get b(): number;
      set b(val: number);
      get a(): number;
      set a(val: number);
      static get WHITE(): Color;
      static get BLACK(): Color;
      static get TRANSPARENT(): Color;
      static BlendType: typeof BlendType;
      static blendColorHex(colorHexA: number, colorHexB: number, type?: BlendType): number;
      static multiplyColorHex(colorHexA: number, colorHexB: number, type?: BlendType): number;
      static getValue32FromRGBA(r: number, g: number, b: number, a: number): number;
      static getValue32FromHSVA(): void;
      static percentRoundFn(num: number): number;
      static diffc(v: number, c: number, diff: number): number;
      static rgb2hsv(r: number, g: number, b: number, dst?: Vector3): Vector3;
      static hsvV2rgb(h: number, s: number, v: number, dst?: Vector3): Vector3;
      static randomMix(colorHexA: number, colorHexB: number, randomSeed?: number): number;
      static fromHex(hex: number): Color;
      static fromHexString(hexString: string): Color;
      static fromFloatArray(arr: number[]): Color;
      equals(target: Color): boolean;
      set(val: Color): void;
      setRGBA(r: number, g: number, b: number, a: number): void;
      setValue32(v32: number): void;
      toNormalizedArray(): [number, number, number, number];
      toRGBAString(): string;
      mix(color: Color, dst?: Color): Color;
  }
}

declare module 'XrFrame/math/OBB' {
  import Vector3 from "XrFrame/math/vector3";
  export default class OBB {
      constructor();
      setValues(cenX: number, cenY: number, cenZ: number, forward: Vector3, w: number, h: number, d: number): void;
      get center(): Vector3;
      set center(pos: Vector3);
      get width(): number;
      set width(w: number);
      get height(): number;
      set height(h: number);
      get depth(): number;
      set depth(d: number);
      setForward(forward: Vector3): void;
      get AxisX(): Vector3;
      get AxisY(): Vector3;
      get AxisZ(): Vector3;
  }
}

declare module 'XrFrame/math/boundBall' {
  import Vector3 from "XrFrame/math/vector3";
  import V3ReadOnly from "XrFrame/math/vector3";
  export default class BoundBall {
          static readonly OFFSETS: Readonly<{
                  center: number;
                  radius: number;
          }>;
          /**
              * 包围球中心
              *
              * @type {V3ReadOnly}
              * @memberof BoundBall
              */
          get center(): V3ReadOnly;
          set center(val: V3ReadOnly);
          /**
              * 包围球半径
              *
              * @type {number}
              * @memberof BoundBall
              */
          get radius(): number;
          set radius(val: number);
          _raw: Float32Array;
          _offset: number;
          protected _center?: Vector3;
          constructor(raw?: Float32Array, offset?: number);
          /**
              * 使用中心和半径创建包围球
              *
              * @static
              * @param {V3ReadOnly} center
              * @param {number} radius
              * @returns {BoundBall}
              * @memberof BoundBall
              */
          static createFromCenterAndRadius(center: V3ReadOnly, radius: number): BoundBall;
          /**
              * 设置值
              *
              * @param {V3ReadOnly} center
              * @param {number} radius
              * @returns {BoundBall}
              * @memberof BoundBall
              */
          setValue(center: V3ReadOnly, radius: number): BoundBall;
          /**
              * 使用一系列点初始化
              *
              * @param {V3ReadOnly[]} points
              * @returns {BoundBall} 自身
              * @memberof BoundBall
              */
          initByPoints(points: V3ReadOnly[]): BoundBall;
          initByPointRadius(center: V3ReadOnly, radius: number): void;
  }
}

declare module 'XrFrame/math/boundBox' {
  import Vector3 from "XrFrame/math/vector3";
  import V3ReadOnly from "XrFrame/math/vector3";
  export default class BoundBox {
          static readonly OFFSETS: Readonly<{
                  center: number;
                  size: number;
          }>;
          /**
              * 包围盒中心
              *
              * @type {Vector3}
              * @memberof BoundBox
              */
          get center(): V3ReadOnly;
          set center(val: V3ReadOnly);
          /**
              * 包围盒尺寸
              *
              * @memberof BoundBox
              */
          get size(): V3ReadOnly;
          set size(val: V3ReadOnly);
          _raw: Float32Array;
          _offset: number;
          protected _center?: Vector3;
          protected _size?: Vector3;
          constructor(raw?: Float32Array, offset?: number);
          /**
              * 使用中心和尺寸创建包围球
              *
              * @static
              * @param {V3ReadOnly} center 中心
              * @param {V3ReadOnly} size 尺寸
              * @returns {BoundBall}
              * @memberof BoundBall
              */
          static createFromCenterAndSize(center: V3ReadOnly, size: V3ReadOnly): BoundBox;
          /**
              * 设置值
              *
              * @param {V3ReadOnly} center
              * @param {V3ReadOnly} size
              * @returns {BoundBox}
              * @memberof BoundBox
              */
          setValue(center: V3ReadOnly, size: V3ReadOnly): BoundBox;
          initByPoints(points: Vector3[], length?: number): void;
          startInitByPoints(): void;
          addPoint(corner: Vector3): void;
          endInitByPoints(): void;
  }
}

declare module 'XrFrame/math/Spherical' {
  /**
      * Spherical.ts
      *
      *         * @Date    : 2022/1/14下午4:49:50
      */
  import Vector3 from 'XrFrame/math/vector3';
  /**
      * 球面坐标系。
      */
  export default class Spherical {
          static EPS: number;
          isSpherical: boolean;
          /**
              * 球面半径。
              */
          radius: number;
          /**
              * 点在球面上的横向旋转角度。
              */
          phi: number;
          /**
              * 点在球面上的纵向旋转角度。
              */
          theta: number;
          /**
              * 球面球心。
              */
          center: Vector3;
          constructor(radius?: number, phi?: number, theta?: number);
          set(radius: number, phi: number, theta: number): this;
          clone(): Spherical;
          copy(other: Spherical): this;
          /**
              * restrict phi to be between EPS and PI-EPS。
              */
          makeSafe(): this;
          /**
              * 从笛卡尔坐标系的Vector3转换。
              */
          setFromVector3(vector: Vector3): this;
          /**
              * 从笛卡尔坐标系的x、y、z转换。
              */
          setFromCartesianCoords(x: number, y: number, z: number): this;
          /**
              * 转换到笛卡尔坐标系的Vector3。
              */
          toVector3(vector?: Vector3): Vector3;
  }
}

declare module 'XrFrame/kanata/lib/kanata' {
  
  import * as IKanata from 'XrFrame/kanata/lib/frontend';
  import {IEngineSettings} from 'XrFrame/kanata/lib/backend/interface';
  
  export * from 'XrFrame/kanata/lib/backend/interface';
  export {ITextureOptions, IRenderPassDescriptor} from 'XrFrame/kanata/lib/index';
  
  export type AnimatorComponent = IKanata.AnimatorComponent;
  export type CameraComponent = IKanata.CameraComponent;
  export type LightCameraComponent = IKanata.LightCameraComponent;
  export type CullingComponent = IKanata.CullingComponent;
  export type MeshRendererComponent = IKanata.MeshRendererComponent;
  export type SkinnedSkeletonComponent = IKanata.SkinnedSkeletonComponent;
  export type DynamicBonesComponent = IKanata.DynamicBonesComponent;
  export type Entity2D = IKanata.Entity2D;
  export type Entity3D = IKanata.Entity3D;
  export type AnimationClipModel = IKanata.AnimationClipModel;
  export type AnimationClipBinding = IKanata.AnimationClipBinding;
  export type AnimatorControllerModel = IKanata.AnimatorControllerModel;
  export type AnimatorControllerStateModel = IKanata.AnimatorControllerStateModel;
  export type DataBuffer = IKanata.DataBuffer;
  export type DataModel = IKanata.DataModel;
  export type Effect = IKanata.Effect;
  export type Material = IKanata.Material;
  export type SkeletonBoneInverseModel = IKanata.SkeletonBoneInverseModel;
  export type UniformBlock = IKanata.UniformBlock;
  export type UniformDescriptor = IKanata.UniformDescriptor;
  export type IndexBuffer = IKanata.IndexBuffer;
  export type IndexData = IKanata.IndexData;
  export type VertexBuffer = IKanata.VertexBuffer;
  export type VertexData = IKanata.VertexData;
  export type VertexLayout = IKanata.VertexLayout;
  export type VertexDataDescriptor = IKanata.VertexDataDescriptor;
  export type View = IKanata.View;
  export type ScalableList = IKanata.ScalableList;
  export type RenderPass = IKanata.RenderPass;
  export type Texture = IKanata.Texture;
  export type RenderEnv = IKanata.RenderEnv
  
  export interface IKanataInstance {
      Image: typeof IKanata.Image;
      Downloader: typeof IKanata.Downloader;
      IS_VALID: typeof IKanata.IS_VALID;
      GET_MAIN_CANVAS: typeof IKanata.GET_MAIN_CANVAS;
      Phys3D: typeof IKanata.Phys3D;
      AnimatorComponent: typeof IKanata.AnimatorComponent;
      CameraComponent: typeof IKanata.CameraComponent;
      LightCameraComponent: typeof IKanata.LightCameraComponent;
      CullingComponent: typeof IKanata.CullingComponent;
      MeshRendererComponent: typeof IKanata.MeshRendererComponent;
      SkinnedSkeletonComponent: typeof IKanata.SkinnedSkeletonComponent;
      DynamicBonesComponent: typeof IKanata.DynamicBonesComponent;
      Entity2D: typeof IKanata.Entity2D;
      Entity3D: typeof IKanata.Entity3D;
      AnimationClipModel: typeof IKanata.AnimationClipModel;
      AnimationClipBinding: typeof IKanata.AnimationClipBinding;
      AnimatorControllerModel: typeof IKanata.AnimatorControllerModel;
      AnimatorControllerStateModel: typeof IKanata.AnimatorControllerStateModel;
      DataBuffer: typeof IKanata.DataBuffer;
      DataModel: typeof IKanata.DataModel;
      Effect: typeof IKanata.Effect;
      Material: typeof IKanata.Material;
      SkeletonBoneInverseModel: typeof IKanata.SkeletonBoneInverseModel;
      UniformBlock: typeof IKanata.UniformBlock;
      UniformDescriptor: typeof IKanata.UniformDescriptor;
      IndexBuffer: typeof IKanata.IndexBuffer;
      IndexData: typeof IKanata.IndexData;
      VertexBuffer: typeof IKanata.VertexBuffer;
      VertexData: typeof IKanata.VertexData;
      VertexLayout: typeof IKanata.VertexLayout;
      VertexDataDescriptor: typeof IKanata.VertexDataDescriptor;
      View: typeof IKanata.View;
      ScalableList: typeof IKanata.ScalableList;
      crossContext: typeof IKanata.crossContext;
      RenderPass: typeof IKanata.RenderPass;
      Texture: typeof IKanata.Texture;
      RenderEnv: typeof IKanata.RenderEnv;
      renderEnv: typeof IKanata.renderEnv;
      createWeakRef: typeof IKanata.createWeakRef;
      createWeakRefSentry: typeof IKanata.createWeakRefSentry;
      createNativeUUMap: typeof IKanata.createNativeUUMap;
      createNativeSUMap: typeof IKanata.createNativeSUMap;
      createNativeULUMap: typeof IKanata.createNativeULUMap;
      loadTTFFont: typeof IKanata.loadTTFFont;
      getGlyphInfo: typeof IKanata.getGlyphInfo;
      refreshNodesWorldTransform: typeof IKanata.refreshNodesWorldTransform;
      setGlobalPhysicSystem: typeof IKanata.setGlobalPhysicSystem;
      bindRigidBodyToNode: typeof IKanata.bindRigidBodyToNode;
      bindCCTToNode: typeof IKanata.bindCCTToNode;
      unbindRigidBody: typeof IKanata.unbindRigidBody;
      unbindCCT: typeof IKanata.unbindCCT;
      setNodeName: typeof IKanata.setNodeName;
      setRenderComponentName: typeof IKanata.setRenderComponentName;
      debugPrint: typeof IKanata.debugPrint;
      eventBridge: typeof IKanata.eventBridge;
      destroy: typeof IKanata.destroy;
      update: typeof IKanata.update
  }
  
  
  export function CREATE_INSTANCE(MAIN_CANVAS: HTMLCanvasElement, ENGINE_SETTINGS: IEngineSettings, ENGINE_MODE: 'Game' | 'Editor', IS_SUB_CONTEXT: boolean, HOST: string): IKanataInstance;
  export function RELEASE_INSTANCE(MAIN_CANVAS: HTMLCanvasElement): void;
}

declare module 'XrFrame/core/Scene' {
  /**
    * Scene.ts
    *
    *       * @Date    : 2022/3/16下午3:32:57
    */
  import Transform from 'XrFrame/components/Transform';
  import { Kanata } from 'XrFrame/ext';
  import AssetsSystem from 'XrFrame/systems/AssetsSystem';
  import RenderSystem from 'XrFrame/systems/RenderSystem';
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  import { Material } from 'XrFrame/components';
  import Effect, { IEffectAsset } from 'XrFrame/assets/Effect';
  import Geometry from 'XrFrame/assets/Geometry';
  import AnimationSystem from 'XrFrame/systems/AnimationSystem';
  import PhysicsSystem from 'XrFrame/systems/PhysicsSystem';
  import ARSystem from 'XrFrame/systems/ARSystem';
  import { XRShadow } from 'XrFrame/elements';
  export const SceneDefaultComponents: IEntityComponents;
  export const SceneDataMapping: {
      [key: string]: string[];
  };
  export default class Scene extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly isScene: boolean;
      get ready(): boolean;
      get scene(): this;
      get rootShadow(): XRShadow;
      get assets(): AssetsSystem;
      get render(): RenderSystem;
      get animation(): AnimationSystem;
      get physics(): PhysicsSystem;
      get ar(): ARSystem;
      get width(): number;
      get height(): number;
      get frameWidth(): number;
      get frameHeight(): number;
      get timestamp(): number;
      /**@internal */
      get rootNode(): import('XrFrame/kanata/lib/index').Entity3D;
      get canvas(): HTMLCanvasElement;
      get backendVersion(): number[];
      get backendCommit(): string;
      get backendUsePuppetSokol(): boolean;
      createElement<T extends Element>(clz: new (...args: any) => T): T;
      getElementById(id: string): Element;
      getNodeById(nodeId: string): Transform;
      createImage(): Kanata.IImage;
      createTexture(options: Kanata.ITextureOptions): Kanata.Texture;
      createEffect(description: IEffectAsset): Effect;
      createUniformBlockDesc(options: Kanata.IUniformDescriptorOptions): Kanata.UniformDescriptor;
      createUniformBlock(descriptor: Kanata.UniformDescriptor): Kanata.UniformBlock;
      createMaterial(effect: Effect, defaultUniforms?: {
          [key: string]: number | ArrayLike<number> | Kanata.Texture;
      }): Material;
      createVertexLayout(options: Kanata.IVertexLayoutOptions): Kanata.VertexLayout;
      createGeometry(vertexLayout: Kanata.VertexLayout, vBuffer: ArrayBufferView, iBuffer: ArrayBufferView, indexType?: Kanata.EIndexType): Geometry;
  }
}

declare module 'XrFrame/core/Observable' {
  /**
      * Observable.ts
      *
      *         * @Date    : 4/18/2022, 7:33:42 PM
      */
  export default class Observable<TParams = any, TSender = any> {
          isObservable: boolean;
          /**
              * 拥有的监听者数量。
              */
          get count(): number;
          /**
              * 添加一个回调到队列中。
              */
          add(callback: (params: TParams, sender?: TSender) => void | boolean, priority?: number): this;
          /**
              * 添加一个回调到队列中，并再被触发执行一次后自动移除。
              */
          addOnce(callback: (params: TParams, sender?: TSender) => void | boolean, priority?: number): this;
          /**
              * 清空队列。
              */
          clear(): this;
          /**
              * 从队列中移除一个回调。
              */
          remove(callback: (params: TParams, sender?: TSender) => void | boolean): this;
          /**
              * 通过一个参数触发一次广播，调用所有回调。
              */
          notify(params: TParams, sender?: TSender): this;
  }
}

declare module 'XrFrame/components/Transform' {
  /**
    * Transform.ts
    *
    *       * @Date    : 2022/3/16下午3:48:05
    */
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  import Matrix4 from 'XrFrame/math/matrix4';
  import Quaternion from 'XrFrame/math/quaternion';
  import Vector3 from 'XrFrame/math/vector3';
  export interface ITransformData {
      nodeId: string;
      position: number[];
      rotation: number[];
      scale: number[];
      visible: boolean;
  }
  export const TransformSchema: IComponentSchema;
  export default class Transform extends Component<ITransformData> {
      readonly schema: IComponentSchema;
      readonly priority: number;
      get node(): import('XrFrame/kanata/lib/index').Entity3D;
      get worldMatrix(): Matrix4;
      get worldPosition(): Vector3;
      get worldQuaternion(): Quaternion;
      get worldScale(): Vector3;
      get worldForward(): Vector3;
      get worldUp(): Vector3;
      get worldRight(): Vector3;
      get position(): Vector3;
      get rotation(): Vector3;
      get quaternion(): Quaternion;
      get scale(): Vector3;
      get visible(): boolean;
      set visible(value: boolean);
      setLocalMatrix(mat: Matrix4): void;
      onAdd(parent: Element, data: ITransformData): void;
      onUpdate(data: ITransformData, preData: ITransformData): void;
      onTick(deltaTime: number, data: ITransformData): void;
      onRemove(parent: Element, data: ITransformData): void;
      onRelease(data: ITransformData): void;
  }
}

declare module 'XrFrame/components/AssetLoad' {
  /**
    * AssetLoad.ts
    *
    *       * @Date    : 2022/3/31下午4:56:14
    */
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  import { IAssetLoadData } from 'XrFrame/loader/types';
  export const AssetLoadSchema: IComponentSchema;
  export default class AssetLoad extends Component<IAssetLoadData> {
      readonly schema: IComponentSchema;
      get loadParams(): IAssetLoadData<any>;
      onAdd(parent: Element, data: IAssetLoadData): void;
      onUpdate(data: IAssetLoadData, preData: IAssetLoadData): void;
      onRemove(parent: Element, data: IAssetLoadData<any>): void;
  }
}

declare module 'XrFrame/components/Assets' {
  /**
    * Assets.ts
    *
    *       * @Date    : 2022/3/24下午3:18:14
    */
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import { IAssetLoadData } from 'XrFrame/loader/types';
  export interface IAssetsData {
  }
  export const AssetsSchema: IComponentSchema;
  export default class Assets extends Component<IAssetsData> {
      readonly schema: IComponentSchema;
  }
}

declare module 'XrFrame/components/Camera' {
  /**
      * Camera.ts
      *
      *         * @Date    : 2022/3/17下午5:25:34
      */
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  import { Kanata } from 'XrFrame/ext';
  import Vector3 from 'XrFrame/math/vector3';
  import Matrix4 from 'XrFrame/math/matrix4';
  import { IRenderTarget } from 'XrFrame/components/RenderTexture';
  import Transform from 'XrFrame/components/Transform';
  export type TCameraBackground = 'default' | 'skybox' | 'ar';
  export interface ICameraData {
          target: Transform;
          depth: number;
          isPerspective: boolean;
          fov: number;
          near: number;
          far: number;
          orthSize: number;
          background: TCameraBackground;
          isARCamera: boolean;
          isClearDepth: boolean;
          isClearStencil: boolean;
          isClearColor: boolean;
          clearDepth: number;
          clearStencil: number;
          clearColor: number[];
  }
  export const CameraSchema: IComponentSchema;
  export default class Camera extends Component<ICameraData> {
          readonly schema: IComponentSchema;
          readonly priority: number;
          get depth(): number;
          get renderTarget(): IRenderTarget;
          /**
              * 渲染的View。
              */
          get view(): import('XrFrame/kanata/lib/index').View;
          get id(): number;
          get background(): TCameraBackground;
          get target(): Transform;
          get near(): number;
          get far(): number;
          /**
              * @internal
              */
          cull(cullResult: Kanata.ScalableList, lightMode: string): void;
          /**
              * @internal
              */
          clear(): void;
          /**
              * @internal
              */
          draw(renderList: Kanata.ScalableList, lightMode: string): void;
          /**
              * 将世界坐标系位置转换到齐次裁剪空间。
              */
          convertWorldPositionToClip(worldPos: Vector3, dst?: Vector3): Vector3;
          /**
              * 将齐次裁剪空间转换到世界坐标系位置。
              */
          convertClipPositionToWorld(clipPos: Vector3, dst?: Vector3): Vector3;
          /**
              * 修改viewMatrix的设置类型。
              *
              * @param manual 是否要设置为手动模式。
              * @param mat4 手动模式下，要设置的值。
              */
          changeViewMatrix(manual: boolean, mat4?: Matrix4 | Float32Array): void;
          /**
              * 修改projectMatrix的设置类型。
              *
              * @param manual 是否要设置为手动模式。
              * @param mat4 手动模式下，要设置的值。
              */
          changeProjectMatrix(manual: boolean, mat4?: Matrix4 | Float32Array): void;
          onAdd(parent: Element, data: ICameraData): void;
          onUpdate(data: ICameraData, preData: ICameraData): void;
          onRemove(parent: Element, data: ICameraData): void;
          onRelease(data: ICameraData): void;
          protected _processData(data: ICameraData, preData: ICameraData): void;
          protected _changeAspect(): void;
          protected _modifyToRenderSystem: () => void;
          protected _rebuildView(data: ICameraData): void;
  }
}

declare module 'XrFrame/components/GLTF' {
  import GLTFModel from 'XrFrame/assets/GLTFModel';
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  export interface IGLTFElementData {
      model: GLTFModel;
  }
  export const GLTFElementSchema: IComponentSchema;
  export default class GLTF extends Component<IGLTFElementData> {
      readonly schema: IComponentSchema;
      readonly priority: number;
      onUpdate(data: IGLTFElementData, preData: IGLTFElementData): void;
      onRemove(parent: Element, data: IGLTFElementData): void;
      onRelease(data: IGLTFElementData): void;
  }
}

declare module 'XrFrame/components/Light' {
  /**
    * Light.ts
    *
    *       * @Date    : 2022/3/16下午4:45:56
    */
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  export enum ELightType {
      Ambient = "ambient",
      Directional = "directional",
      Point = "point",
      Spot = "spot"
  }
  export interface ILightData {
      type: ELightType;
      color: number[];
      intensity: number;
      range: number;
      innerConeAngle: number;
      outerConeAngle: number;
  }
  export const LightSchema: IComponentSchema;
  export default class Light extends Component<ILightData> {
      readonly schema: IComponentSchema;
      readonly priority: number;
      get type(): ELightType;
      get color(): number[];
      get intensity(): number;
      get range(): number;
      get innerConeAngle(): number;
      get outerConeAngle(): number;
      onAdd(parent: Element, data: ILightData): void;
      onUpdate(data: ILightData, preData: ILightData): void;
      onTick(deltaTime: number, data: ILightData): void;
      onRemove(parent: Element, data: ILightData): void;
      onRelease(data: ILightData): void;
  }
}

declare module 'XrFrame/components/Material' {
  /**
      * Material.ts
      *
      *         * @Date    : 2022/3/24上午11:21:54
      */
  import { Kanata } from 'XrFrame/ext';
  import Effect from 'XrFrame/assets/Effect';
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  import Vector2 from 'XrFrame/math/vector2';
  import Vector3 from 'XrFrame/math/vector3';
  import Vector4 from 'XrFrame/math/vector4';
  import Matrix3 from 'XrFrame/math/matrix3';
  import Matrix4 from 'XrFrame/math/matrix4';
  export interface IMaterialData {
          assetId: string;
          effect: Effect;
          uniforms: [string, string][];
          states: [string, string][];
  }
  export const MaterialSchema: IComponentSchema;
  export default class Material extends Component<IMaterialData> {
          readonly schema: IComponentSchema;
          get kanataMaterial(): import('XrFrame/kanata/lib/index').Material;
          set alphaMode(value: 'OPAQUE' | 'BLEND' | 'MASK');
          set alphaCutOff(value: number);
          get renderQueue(): number;
          set renderQueue(value: number);
          initByEffect(effect: Effect, defaultUniforms?: {
                  [key: string]: ArrayLike<number> | number | Kanata.Texture;
          }): void;
          /**
              * 获取一个Float
              */
          getFloat(key: string): number;
          /**
              * 设置一个Float
              *
              * @returns 是否设置成功
              */
          setFloat(key: string, value: number): boolean;
          /**
              * 设置一个Vector
              *
              * @returns 是否设置成功
              */
          setVector(key: string, value: Vector2 | Vector3 | Vector4): boolean;
          /**
              * 获取一个Vector值的拷贝
              */
          getVector(key: string): Vector2 | Vector3 | Vector4;
          /**
              * 设置一个Matrix
              *
              * @returns 是否设置成功
              */
          setMatrix(key: string, value: Matrix3 | Matrix4): boolean;
          /**
              * 获取一个Vector值的拷贝
              */
          getMatrix(key: string): Matrix3 | Matrix4;
          /**
              * 设置一张贴图
              *
              * @returns 是否设置成功
              */
          setTexture(key: string, value: Kanata.Texture): boolean;
          resetTexture(key: string): import('XrFrame/kanata/lib/index').Texture;
          /**
              * 直接通过Backend纹理ID设置纹理，注意需要自己持有纹理引用。
              * @internal
              *
              * @returns 是否设置成功
              */
          setFontTexture(key: string, id: number): boolean;
          /**
              * 获取材质中已设置的贴图
              */
          getTexture(key: string): Kanata.Texture;
          /**
              * 设置渲染状态
              * 只有标记了 useMaterialRenderStates 的Pass会受到影响
              */
          setRenderState(key: string, value: number | boolean): boolean;
          /**
              * 清除渲染状态
              * 清除材质的渲染状态，转而从effect中使用默认值
              */
          clearRenderState(key: string): boolean;
          /**
              * 获取渲染状态
              */
          getRenderState(key: string): number | boolean;
          /**
              * 设置宏。
              */
          setMacro(key: string, value: boolean): void;
          setMacros(marcos: {
                  [key: string]: number | boolean;
          }): void;
          /**
              * 获取宏。
              */
          getMacro(key: string): boolean;
          onAdd(parent: Element, data: IMaterialData): void;
          onUpdate(data: IMaterialData, preData: IMaterialData): void;
          onRemove(parent: Element, data: IMaterialData): void;
          /**
              * 拷贝自身，生成一份新的材质数据
              */
          clone(): Material;
  }
}

declare module 'XrFrame/components/Mesh' {
  /**
    * Model.ts
    *
    *       * @Date    : 2022/3/16下午4:48:09
    */
  import Geometry from 'XrFrame/assets/Geometry';
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  import { Kanata } from 'XrFrame/ext';
  import Material from 'XrFrame/components/Material';
  export interface IMeshData {
      neverCull?: boolean;
      geometry: Geometry;
      material: Material;
      uniforms?: [string, string][];
      states?: [string, string][];
  }
  export const MeshSchema: IComponentSchema;
  export default class Mesh extends Component<IMeshData> {
      readonly schema: IComponentSchema;
      readonly priority: number;
      protected getUniformDesc(): Kanata.UniformDescriptor;
      protected getMeshType(): Kanata.EMeshRenderType;
      protected _cull: Kanata.CullingComponent;
      protected _mesh: Kanata.MeshRendererComponent;
      protected _sourceMaterial: Material;
      protected _geometry: Geometry;
      protected _material: Material;
      get geometry(): Geometry;
      get material(): Material;
      set material(value: Material);
      get id(): number;
      get visible(): boolean;
      set visible(value: boolean);
      onAdd(parent: Element, data: IMeshData): void;
      onTick(deltaTime: number, data: IMeshData): void;
      onUpdate(data: IMeshData, preData: IMeshData): void;
      onRemove(parent: Element, data: IMeshData): void;
      onRelease(data: IMeshData): void;
      protected _getMarcos(geometry: Geometry): {};
  }
}

declare module 'XrFrame/components/RenderTexture' {
  /**
      * RenderTexture.ts
      *
      *         * @Date    : 2022/3/29下午3:12:12
      */
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  import { Kanata } from 'XrFrame/ext';
  export interface IRenderTarget {
          width: number;
          height: number;
          renderPass: Kanata.RenderPass;
  }
  export interface IRenderTextureData {
          assetId?: string;
          width: number;
          height: number;
  }
  export const RenderTextureSchema: IComponentSchema;
  export default class RenderTexture extends Component<IRenderTextureData> {
          static IS(obj: any): obj is RenderTexture;
          readonly schema: IComponentSchema;
          readonly isRenderTexture: boolean;
          get depthStencil(): import('XrFrame/kanata/lib/index').Texture;
          get needSampleCount(): any;
          /**
              * 获取第一个色彩纹理。
              * @internal
              */
          get texture(): import('XrFrame/kanata/lib/index').Texture;
          /**
              * 获取深度纹理。
              * @internal
              */
          get depthTexture(): import('XrFrame/kanata/lib/index').Texture;
          /**
              * 获取Backend实例。
              * @internal
              */
          get renderPass(): import('XrFrame/kanata/lib/index').RenderPass;
          /**
              * 贴图高。
              */
          get height(): number;
          /**
              * 贴图宽。
              */
          get width(): number;
          onAdd(parent: Element, data: IRenderTextureData): void;
          /**
              * 销毁RenderTexture。
              */
          onRelease(): void;
  }
}

declare module 'XrFrame/components/Env' {
  /**
    * Env.ts
    *
    *       * @Date    : 5/11/2022, 5:21:48 PM
    */
  import { Kanata } from 'XrFrame/ext';
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import EnvData from 'XrFrame/assets/EnvData';
  import { Element } from 'XrFrame/xrFrameSystem';
  export interface IEnvData {
      envData?: EnvData;
      skyMap?: Kanata.Texture;
      rotation: number;
      diffuseExp: number;
      specularExp: number;
  }
  export const EnvSchema: IComponentSchema;
  export default class Env extends Component<IEnvData> {
      readonly schema: IComponentSchema;
      get useHalfSkyMap(): boolean;
      get skyMap(): import('XrFrame/kanata/lib/index').Texture;
      get rotation(): number;
      get hasDiffuse(): boolean;
      get diffuseSH(): Float32Array;
      get diffuseExp(): number;
      get hasSpecular(): boolean;
      get specularRGBD(): boolean;
      get specularMipmaps(): boolean;
      get specularMipmapCount(): number;
      get specularMap(): import('XrFrame/kanata/lib/index').Texture;
      get specularExp(): number;
      onAdd(parent: Element, data: IEnvData): void;
      onUpdate(data: IEnvData, preData: IEnvData): void;
      onRelease(data: IEnvData): void;
  }
}

declare module 'XrFrame/components/Animator' {
  /**
    * Animator.ts
    *
    *       * @Date    : 6/17/2022, 2:52:44 PM
    */
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Animation from 'XrFrame/animation/Animation';
  import Element from 'XrFrame/core/Element';
  export interface IAnimationPlayOptions {
      speed?: number;
      loop?: number;
      delay?: number;
      direction?: 'forwards' | 'backwards' | 'both';
  }
  export enum EAnimationPlayState {
      Playing = 0,
      Paused = 1,
      Stopt = 2
  }
  export interface IAnimatorData {
      keyframe: Animation;
      clipMap?: {
          [key: string]: string;
      };
      autoPlay?: {
          clip?: string;
          speed?: string;
          loop?: string;
          delay?: string;
          direction?: 'forwards' | 'backwards' | 'both';
          [key: string]: string;
      };
  }
  export const AnimatorSchema: IComponentSchema;
  export default class Animator extends Component<IAnimatorData> {
      readonly schema: IComponentSchema;
      onAdd(parent: Element, data: IAnimatorData): void;
      onUpdate(data: IAnimatorData, preData: IAnimatorData): void;
      onRemove(parent: Element, data: IAnimatorData): void;
      onRelease(data: IAnimatorData): void;
      addAnimation<T extends Animation>(anim: T, clipMap?: {
          [name: string]: string;
      }): void;
      removeAnimation(anim: Animation): void;
      play(name: string, options?: IAnimationPlayOptions & {
          [key: string]: any;
      }): void;
      pause(): void;
      resume(): void;
      stop(): void;
  }
}

declare module 'XrFrame/components/CameraOrbitControl' {
  /**
      * CameraOrbitControl.ts
      *
      *         * @Date    : 5/19/2022, 1:22:59 PM
      */
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  import Vector3 from 'XrFrame/math/vector3';
  export interface ICameraOrbitControlData {
          isLockX: boolean;
          isLockY: boolean;
          isLockZoom: boolean;
          isLockRotate: boolean;
          isLockMove: boolean;
          zoomMax: number;
          zoomMin: number;
          panSpeed: number;
          rotateSpeed: number;
          zoomSpeed: number;
          enableDamping: boolean;
          dampingFactor: number;
  }
  export const CameraOrbitControlSchema: IComponentSchema;
  export default class CameraOrbitControl extends Component<ICameraOrbitControlData> {
          readonly schema: IComponentSchema;
          /**
              * 是否锁定横向旋转。
              */
          isLockX: boolean;
          /**
              * 是否锁定纵向旋转。
              */
          isLockY: boolean;
          /**
              * 是否锁定缩放。
              */
          isLockZoom: boolean;
          /**
              * 是否锁定旋转。
              */
          isLockRotate: boolean;
          /**
              * 是否锁定移动。
              */
          isLockMove: boolean;
          /**
              * 是否已经开启。
              */
          isEnabled: boolean;
          /**
              * 允许的最大缩放值。
              */
          zoomMax: number;
          /**
              * 允许的最小缩放值。
              */
          zoomMin: number;
          /**
              * 允许的最大平移边界。
              */
          panMax: Vector3;
          /**
              * 允许的最小平移边界。
              */
          panMin: Vector3;
          /**
              * 平移速度。
              */
          panSpeed: number;
          /**
              * 旋转速度。
              */
          rotateSpeed: number;
          /**
              * 缩放速度。
              */
          zoomSpeed: number;
          /**
              * 开启阻尼缓动。
              */
          enableDamping: boolean;
          /**
              * 阻尼系数。
              */
          dampingFactor: number;
          /**
              * 当前是否正在缓动。
              */
          get damping(): boolean;
          /**
              * 获取当前目标。
              */
          get target(): Vector3;
          /**
              * 添加到世界，继承请先`super.onAdd()`。
              */
          onAdd(parent: Element, data: ICameraOrbitControlData): void;
          /**
              * 每一帧更新，继承请先`super.onUpdate()`。
              */
          onUpdate(data: ICameraOrbitControlData): void;
          onTick(deltaTime: number, data: ICameraOrbitControlData): void;
          /**
              * 销毁，继承请先`super.onUpdate()`。
              */
          onRemove(): void;
          /**
              * 启动控制器。
              */
          enable(): void;
          /**
              * 关闭控制器。
              */
          disable(): void;
  }
}

declare module 'XrFrame/components/ARTracker' {
  /**
    * ARTracker.ts
    *
    *       * @Date    : 6/24/2022, 11:35:30 AM
    */
  import { Kanata } from 'XrFrame/ext';
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  export type TTrackMode = 'Plane' | 'Marker' | 'OSD';
  export interface IARTrackerData {
      mode: TTrackMode;
      autoHide?: boolean;
      image?: Kanata.IImage;
      src?: string;
  }
  export const ARTrackSchema: IComponentSchema;
  export default class ARTracker extends Component<IARTrackerData> {
      readonly schema: IComponentSchema;
      get mode(): TTrackMode;
      get filePath(): string;
      get trackId(): number;
      get hitId(): number;
      onAdd(parent: Element, data: IARTrackerData): void;
      onUpdate(data: IARTrackerData, preData: IARTrackerData): void;
      onRemove(parent: Element, data: IARTrackerData): void;
  }
}

declare module 'XrFrame/elements/xr-node' {
  /**
    * xr-node.ts
    *
    *       * @Date    : 2022/3/18下午2:15:02
    */
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const NodeDefaultComponents: IEntityComponents;
  export const NodeDataMapping: {
      [key: string]: string[];
  };
  export default class XRNode extends Element {
      static IS(element: Element): element is XRNode;
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
      readonly isXRNode: boolean;
  }
}

declare module 'XrFrame/elements/xr-shadow' {
  /**
    * xr-shadow.ts
    *
    *       * @Date    : 6/14/2022, 3:59:17 PM
    */
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const ShadowDefaultComponents: IEntityComponents;
  export const ShadowDataMapping: {
      [key: string]: string[];
  };
  export default class XRShadow extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
      _appendChild(_child: Element, custom?: boolean): void;
      _removeChild(_child: Element, _index?: number, custom?: boolean): void;
      _insertBefore(_child: Element, _before?: Element, _index?: number): void;
      _replaceChild(_child: Element, _oldChild?: Element, _index?: number): void;
      _spliceBefore(_before: number | Element, _deleteCount: number, _list: Element): void;
      _spliceAppend(_list: Element): void;
      _spliceRemove(_before: Element, _deleteCount: number): void;
  }
}

declare module 'XrFrame/elements/xr-camera' {
  /**
    * xr-camera.ts
    *
    *       * @Date    : 2022/3/29下午5:03:57
    */
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const CameraDefaultComponents: IEntityComponents;
  export const CameraDataMapping: {
      [key: string]: string[];
  };
  export default class XRCamera extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
  }
}

declare module 'XrFrame/elements/xr-mesh' {
  /**
    * xr-mesh.ts
    *
    *       * @Date    : 2022/3/29下午5:05:49
    */
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const MeshDefaultComponents: IEntityComponents;
  export const MeshDataMapping: {
      [key: string]: string[];
  };
  export default class XRMesh extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
  }
}

declare module 'XrFrame/elements/xr-light' {
  /**
    * xr-light.ts
    *
    *       * @Date    : 4/12/2022, 10:37:57 AM
    */
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const LightDefaultComponents: IEntityComponents;
  export const LightDataMapping: {
      [key: string]: string[];
  };
  export default class XRLight extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
  }
}

declare module 'XrFrame/elements/xr-gltf' {
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const GLTFDefaultComponents: IEntityComponents;
  export const GLTFDataMapping: {
      [key: string]: string[];
  };
  export default class XRGLTF extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
  }
}

declare module 'XrFrame/elements/xr-asset-material' {
  /**
    * xr-asset-material.ts
    *
    *       * @Date    : 2022/3/18下午5:27:37
    */
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const MaterialDefaultComponents: IEntityComponents;
  export const MaterialDataMapping: {
      [key: string]: string[];
  };
  export default class XRMaterial extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
  }
}

declare module 'XrFrame/elements/xr-asset-load' {
  /**
    * xr-asset-load.ts
    *
    *       * @Date    : 2022/3/16下午5:29:40
    */
  import Element from 'XrFrame/core/Element';
  export const AssetLoadDataMapping: {
      [key: string]: string[];
  };
  export default class XRAssetLoad extends Element {
      readonly dataMapping: {
          [key: string]: string[];
      };
      readonly neverTick: boolean;
  }
}

declare module 'XrFrame/elements/xr-assets' {
  /**
    * xr-assets.ts
    *
    *       * @Date    : 2022/3/16下午5:28:52
    */
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const AssetsDefaultComponents: IEntityComponents;
  export default class XRAssets extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly neverTick: boolean;
  }
}

declare module 'XrFrame/elements/xr-env' {
  /**
    * xr-env.ts
    *
    *       * @Date    : 5/12/2022, 12:56:19 PM
    */
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const EnvDefaultComponents: IEntityComponents;
  export const EnvDataMapping: {
      [key: string]: string[];
  };
  export default class XREnv extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
      readonly neverTick: boolean;
  }
}

declare module 'XrFrame/elements/xr-ar-tracker' {
  /**
    * xr-ar-tracker.ts
    *
    *       * @Date    : 6/27/2022, 3:42:45 PM
    */
  import Element, { IEntityComponents } from 'XrFrame/core/Element';
  export const ARTrackerDefaultComponents: IEntityComponents;
  export const ARTrackerDataMapping: {
      [key: string]: string[];
  };
  export default class XRARTracker extends Element {
      readonly defaultComponents: IEntityComponents;
      readonly dataMapping: {
          [key: string]: string[];
      };
  }
}

declare module 'XrFrame/systems/AssetsSystem' {
  import Component from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  import { IAssetLoadData, IAssetWithState } from 'XrFrame/loader/types';
  export interface IAssetsSystemData {
  }
  export default class AssetsSystem extends Component<IAssetsSystemData> {
      readonly priority: number;
      addAsset<T>(type: string, id: string, asset: T): void;
      loadAsset(params: IAssetLoadData, parent?: Element): Promise<IAssetWithState<any>>;
      releaseAsset(type: string, id: string): void;
      getAsset<T>(type: string, id: string, fallback?: string): T;
      getAssetWithState<T>(type: string, id: string, fallback?: string): IAssetWithState<T>;
      cancelAsset(type: string, id: string): void;
      onRelease(data: IAssetsSystemData): void;
  }
}

declare module 'XrFrame/systems/TickSystem' {
  /**
    * TickSystem.ts
    *
    *       * @Date    : 2022/3/29上午10:50:57
    */
  import Component from 'XrFrame/core/Component';
  export interface ITickSystemData {
  }
  export default class TickSystem extends Component<ITickSystemData> {
      readonly priority: number;
      onTick(deltaTime: number, data: ITickSystemData): void;
  }
}

declare module 'XrFrame/systems/AnimationSystem' {
  /**
    * AnimationSystem.ts
    *
    *       * @Date    : 6/17/2022, 2:35:17 PM
    */
  import Animator from 'XrFrame/components/Animator';
  import Component from 'XrFrame/core/Component';
  export interface IAnimationSystemData {
  }
  export default class AnimationSystem extends Component<IAnimationSystemData> {
      readonly priority: number;
      onTick(deltaTime: number, data: IAnimationSystemData): void;
  }
}

declare module 'XrFrame/systems/RenderSystem' {
  /**
      * RenderSystem.ts
      *
      *         * @Date    : 2022/3/16下午4:20:58
      */
  import Component from 'XrFrame/core/Component';
  import Element from 'XrFrame/core/Element';
  import Camera from 'XrFrame/components/Camera';
  import Env from 'XrFrame/components/Env';
  import RenderGraph from 'XrFrame/render-graph/RenderGraph';
  import LightManager from 'XrFrame/systems/LightManager';
  import Observable from 'XrFrame/core/Observable';
  export interface IRenderSystemData {
  }
  export default class RenderSystem extends Component<IRenderSystemData> {
          readonly priority: number;
          protected _lights: LightManager;
          protected _renderGraph?: RenderGraph;
          protected _sortedCameras: Camera[];
          protected _dirtyCameras: Camera[];
          protected _camerasChangeEvent: Observable<this>;
          protected _env: Env;
          /**
              * @internal
              */
          get lights(): LightManager;
          /**
              * @internal
              */
          get env(): Env;
          /**
              * @internal
              */
          get camerasChangeEvent(): Observable<this, any>;
          /**
              * 获取场景中的所有相机，已按照深度排序。
              *
              * @internal
              */
          get cameras(): Camera[];
          /**
              * 获取场景中的所有当帧修改过的相机，已按照深度排序。
              *
              * @internal
              */
          get changedCameras(): Camera[];
          /**
              * 当前正在使用的RenderGraph。
              */
          get renderGraph(): RenderGraph<any>;
          /**
              * 修改全局宏信息。
              */
          changeMacros(macros: {
                  [name: string]: string | number | boolean;
          }): void;
          /**
              * 获取全局宏信息。
              */
          getMacro(key: string): string | number | boolean;
          onAdd(parent: Element, data: IRenderSystemData): void;
          onTick(): void;
          onRelease(data: IRenderSystemData): void;
          /**
              * 使用某个RenderGraph，默认会使用内置的`ForwardBaseRG`。
              */
          useRenderGraph(rg: RenderGraph): void;
          /**
              * 开启全局GPU实例化。
              */
          enableInstance(): void;
          /**
              * 关闭全局GPU实例化。
              */
          disableInstance(): void;
          /**
              * @internal
              */
          /**
              * @internal
              */
          /**
              * @internal
              */
          protected _sortCameras(): void;
          dispose(): void;
  }
}

declare module 'XrFrame/systems/PhysicsSystem' {
  import { Camera } from 'XrFrame/components';
  import Component from 'XrFrame/core/Component';
  import { Kanata } from 'XrFrame/ext';
  import { RaycastDesc } from 'XrFrame/physics/raycast';
  import Element from "XrFrame/core/Element";
  import Shape from 'XrFrame/components/physics/Shape';
  export interface ShapeTouchEvent {
          camera: Camera;
          target: Element;
          shape?: Shape;
          x: number;
          y: number;
          dir: [number, number, number];
          force: number;
  }
  export interface ShapeDrageEvent {
          camera: Camera;
          target: Element;
          shape?: Shape;
          deltaX: number;
          deltaY: number;
          x: number;
          y: number;
          dir: [number, number, number];
          force: number;
  }
  export interface IPhysicsSystemData {
  }
  export default class PhysicsSystem extends Component<IPhysicsSystemData> {
          /**
              * @internal
              */
          nativeSystem: phys3D.PhysSystem;
          constructor();
          addShape(shape: Shape): void;
          removeShape(shape: Shape): void;
          onAdd(): void;
          onTick(deltaTime: number, data: IPhysicsSystemData): void;
          bindRigidbodyWithEntity(rigidbody: phys3D.Rigidbody, entity: Kanata.Entity3D): void;
          /**
              * 射线检测，判断给定射线是否与至少一个碰撞体相交，并返回与**最近**的那个碰撞体相交的信息。
              */
          raycast(desc: RaycastDesc): boolean;
  }
}

declare module 'XrFrame/systems/ARSystem' {
  import { Camera, Mesh } from 'XrFrame/components';
  import ARTracker, { TTrackMode } from 'XrFrame/components/ARTracker';
  import Component, { IComponentSchema } from 'XrFrame/core/Component';
  type Element = import('XrFrame/core/Element').default;
  export interface IARSystemData {
      modes: TTrackMode[];
  }
  export const EnvSchema: IComponentSchema;
  export default class ARSystem extends Component<IARSystemData> {
      readonly schema: IComponentSchema;
      readonly priority: number;
      get arModes(): TTrackMode[];
      get arVersion(): number;
      onAdd(parent: Element, data: IARSystemData): void;
      onTick(deltaTime: number, data: IARSystemData): void;
      onRemove(parent: Element, data: IARSystemData): void;
      onRelease(data: IARSystemData): void;
      placeHere(nodeIdOrElement: string | Element, switchVisible?: boolean): void;
      resetPlane(): void;
  }
  export {};
}

declare module 'XrFrame/loader/TextureLoader' {
  /**
    * TextureLoader.ts
    *
    *       * @Date    : 2022/4/1下午5:19:36
    */
  import { Kanata } from 'XrFrame/ext';
  import AssetLoader, { ILoaderOptionsSchema } from 'XrFrame/loader/AssetLoader';
  import { IAssetLoadData } from 'XrFrame/loader/types';
  export interface ITextureLoaderOptions {
      anisoLevel?: number;
  }
  type ITextureLoadData = IAssetLoadData<ITextureLoaderOptions>;
  export default class TextureLoader extends AssetLoader<Kanata.Texture, ITextureLoaderOptions> {
      readonly schema: ILoaderOptionsSchema;
      load(params: ITextureLoadData, callbacks: {
          onLoading(params: ITextureLoadData, progress: number): void;
          onLoaded(params: ITextureLoadData, value: Kanata.Texture): void;
          onError(params: ITextureLoadData, error: Error): void;
      }): void;
      getBuiltin(): {
          assetId: string;
          src: string;
          options: {};
      }[];
      release(params: ITextureLoadData, value: Kanata.Texture): void;
  }
  export {};
}

declare module 'XrFrame/loader/ImageLoader' {
  /**
    * ImageLoader.ts
    *
    *       * @Date    : 6/13/2022, 12:40:11 PM
    */
  import { Kanata } from 'XrFrame/ext';
  import AssetLoader, { ILoaderOptionsSchema } from 'XrFrame/loader/AssetLoader';
  import { IAssetLoadData } from 'XrFrame/loader/types';
  export interface IImageLoaderOptions {
  }
  type IImageLoadData = IAssetLoadData<IImageLoaderOptions>;
  export default class ImageLoader extends AssetLoader<Kanata.IImage, IImageLoaderOptions> {
      readonly schema: ILoaderOptionsSchema;
      load(params: IImageLoadData, callbacks: {
          onLoading(params: IImageLoadData, progress: number): void;
          onLoaded(params: IImageLoadData, value: Kanata.IImage): void;
          onError(params: IImageLoadData, error: Error): void;
      }): void;
      release(params: IImageLoadData, value: Kanata.IImage): void;
  }
  export {};
}

declare module 'XrFrame/loader/CubeTextureLoader' {
  /**
    * CubeCubeTextureLoader.ts
    *
    *       * @Date    : 5/10/2022, 11:24:51 AM
    */
  import { Kanata } from 'XrFrame/ext';
  import AssetLoader, { ILoaderOptionsSchema } from 'XrFrame/loader/AssetLoader';
  import { IAssetLoadData } from 'XrFrame/loader/types';
  export interface ICubeTextureLoaderOptions {
      anisoLevel: number;
      faces: string[];
  }
  type ICubeTextureLoadData = IAssetLoadData<ICubeTextureLoaderOptions>;
  export default class CubeTextureLoader extends AssetLoader<Kanata.Texture, ICubeTextureLoaderOptions> {
      readonly schema: ILoaderOptionsSchema;
      load(params: ICubeTextureLoadData, callbacks: {
          onLoading(params: ICubeTextureLoadData, progress: number): void;
          onLoaded(params: ICubeTextureLoadData, value: Kanata.Texture): void;
          onError(params: ICubeTextureLoadData, error: Error): void;
      }): void;
      release(params: ICubeTextureLoadData, value: Kanata.Texture): void;
  }
  export {};
}

declare module 'XrFrame/loader/EnvDataLoader' {
  /**
    * EnvDataLoader.ts
    *
    *       * @Date    : 5/10/2022, 11:27:49 AM
    */
  import EnvData from 'XrFrame/assets/EnvData';
  import AssetLoader, { ILoaderOptionsSchema } from 'XrFrame/loader/AssetLoader';
  import { IAssetLoadData } from 'XrFrame/loader/types';
  interface IBufferSlice {
      offset: number;
      length: number;
      type: string;
  }
  export interface IEnvDataSource {
      skybox?: {
          type: '2D' | 'Cube';
          half: boolean;
          map: (string | string[]) | IBufferSlice;
      };
      diffuse?: {
          coefficients: number[][];
      };
      specular?: {
          type: '2D';
          rgbd: boolean;
          mipmaps: boolean;
          mipmapCount?: number;
          map: string | IBufferSlice;
      };
  }
  export interface IEnvDataLoaderOptions {
  }
  type IEnvDataLoadData = IAssetLoadData<IEnvDataLoaderOptions>;
  export default class EnvDataLoader extends AssetLoader<EnvData, IEnvDataLoaderOptions> {
      readonly schema: ILoaderOptionsSchema;
      load(params: IEnvDataLoadData, callbacks: {
          onLoading(params: IEnvDataLoadData, progress: number): void;
          onLoaded(params: IEnvDataLoadData, value: EnvData): void;
          onError(params: IEnvDataLoadData, error: Error): void;
      }): Promise<void>;
      getBuiltin(): {
          assetId: string;
          src: string;
          options: IEnvDataLoaderOptions;
      }[];
      release(params: IEnvDataLoadData, value: EnvData): void;
  }
  export {};
}

declare module 'XrFrame/loader/GlTFLoader' {
  /**
      * GLTFLoader.ts
      *
      *         * @Date    : 2022/3/16下午3:47:56
      */
  import GLTF from 'XrFrame/assets/GLTFModel';
  import AssetLoader, { ILoaderOptionsSchema } from 'XrFrame/loader/AssetLoader';
  import { IAssetLoadData } from 'XrFrame/loader/types';
  import { Scene } from 'XrFrame/elements';
  export enum GLBChunkType {
          JSON = 1313821514,
          BIN = 5130562
  }
  export interface IGLTFLoaderOptions {
          ignoreTextureError?: boolean;
  }
  type IGLTFLoadData = IAssetLoadData<IGLTFLoaderOptions>;
  export default class GLTFLoader extends AssetLoader<GLTF, IGLTFLoaderOptions> {
          readonly schema: ILoaderOptionsSchema;
          load(params: IGLTFLoadData, callbacks: {
                  onLoading(params: IGLTFLoadData, progress: number): void;
                  onLoaded(params: IGLTFLoadData, value: GLTF): void;
                  onError(params: IGLTFLoadData, error: Error): void;
          }): Promise<void>;
          cancel(params: IGLTFLoadData): void;
          release(params: IGLTFLoadData, value: GLTF): void;
          static createGLTFModel(scene: Scene, buffer: ArrayBuffer, src?: string): Promise<GLTF>;
  }
  export {};
}

declare module 'XrFrame/loader/KeyframeLoader' {
  /**
    * KeyframeLoader.ts
    *
    *       * @Date    : 6/21/2022, 6:48:33 PM
    */
  import KeyframeAnimation from 'XrFrame/animation/KeyframeAnimation';
  import AssetLoader, { ILoaderOptionsSchema } from 'XrFrame/loader/AssetLoader';
  import { IAssetLoadData } from 'XrFrame/loader/types';
  export interface IKeyframeLoaderOptions {
  }
  type IKeyframeLoadData = IAssetLoadData<IKeyframeLoaderOptions>;
  export default class KeyframeLoader extends AssetLoader<KeyframeAnimation, IKeyframeLoaderOptions> {
      readonly schema: ILoaderOptionsSchema;
      load(params: IKeyframeLoadData, callbacks: {
          onLoading(params: IKeyframeLoadData, progress: number): void;
          onLoaded(params: IKeyframeLoadData, value: KeyframeAnimation): void;
          onError(params: IKeyframeLoadData, error: Error): void;
      }): Promise<void>;
  }
  export {};
}

declare module 'XrFrame/loader/types' {
  /**
    * types.ts
    *
    *       * @Date    : 2022/4/1下午2:19:33
    */
  type Assets = import('XrFrame/components/Assets').default;
  export function isAsset(value: any): value is IAssetWithState<any>;
  export enum EAssetState {
      Undefined = 0,
      Defer = 1,
      Loading = 2,
      Existed = 3
  }
  export interface IAssetWithState<T> {
      __isAsset: boolean;
      __params?: IAssetLoadData;
      __group?: Assets;
      value?: T;
      state: EAssetState;
      promise?: Promise<IAssetWithState<T>>;
  }
  export interface IAssetLoadData<T = any> {
      type: string;
      assetId: string;
      src: string;
      weight?: number;
      options: T;
      defer?: boolean;
      canceled?: boolean;
      startTs?: number;
      duration?: number;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/GLTFRootNode' {
  import Scene from "XrFrame/core/Scene";
  import { GLTFAnimationsLoaded, GLTFAnimationsNodeRaw } from "XrFrame/loader/glTF/animations/GLTFAnimationsNode";
  import { GLTFAccessorsLoaded, GLTFAccessorsNodeRaw } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFBuffersNodeRaw } from "XrFrame/loader/glTF/buffers/GLTFBuffersNode";
  import { GLTFBufferViewsLoaded, GLTFBufferViewsNodeRaw } from "XrFrame/loader/glTF/buffers/GLTFBufferViewsNode";
  import { GLTFExtensionsProfiles } from "XrFrame/loader/glTF/extensions/GLTFExtensions";
  import { GLTFMeshesLoaded, GLTFMeshesNodeRaw } from "XrFrame/loader/glTF/geometry/GLTFMeshesNode";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFMaterialsLoaded, GLTFMaterialsNodeRaw } from "XrFrame/loader/glTF/materials/GLTFMaterialsNode";
  import GLTFNodesNode, { GLTFNodesLoaded, GLTFNodesNodeRaw } from "XrFrame/loader/glTF/scenes/GLTFNodesNode";
  import { GLTFSceneLoaded } from "XrFrame/loader/glTF/scenes/GLTFSceneNode";
  import { GLTFScenesLoaded, GLTFScenesNodeRaw } from "XrFrame/loader/glTF/scenes/GLTFScenesNode";
  import { GLTFSkinsLoaded, GLTFSkinsNodeRaw } from "XrFrame/loader/glTF/skins/GLTFSkinsNode";
  import { GLTFImagesLoaded, GLTFImagesNodeRaw } from "XrFrame/loader/glTF/textures/GLTFImagesNode";
  import { GLTFSamplersLoaded, GLTFSamplersNodeRaw } from "XrFrame/loader/glTF/textures/GLTFSamplersNode";
  import { GLTFTexturesLoaded, GLTFTexturesNodeRaw } from "XrFrame/loader/glTF/textures/GLTFTexturesNode";
  export interface GLTFRootNodeRaw {
      buffers?: GLTFBuffersNodeRaw;
      bufferViews?: GLTFBufferViewsNodeRaw;
      accessors?: GLTFAccessorsNodeRaw;
      images?: GLTFImagesNodeRaw;
      samplers?: GLTFSamplersNodeRaw;
      textures?: GLTFTexturesNodeRaw;
      materials?: GLTFMaterialsNodeRaw;
      meshes?: GLTFMeshesNodeRaw;
      nodes?: GLTFNodesNodeRaw;
      scenes?: GLTFScenesNodeRaw;
      skins?: GLTFSkinsNodeRaw;
      animations?: GLTFAnimationsNodeRaw;
      scene?: number;
      extensions?: object;
      extensionsRequired?: Array<string>;
      extensionsUsed?: Array<string>;
  }
  export interface GLTFRootLoaded {
      buffers: Array<ArrayBuffer>;
      bufferViews: GLTFBufferViewsLoaded;
      accessors: GLTFAccessorsLoaded;
      images: GLTFImagesLoaded;
      samplers: GLTFSamplersLoaded;
      textures: GLTFTexturesLoaded;
      materials: GLTFMaterialsLoaded;
      meshes: GLTFMeshesLoaded;
      nodes: GLTFNodesLoaded;
      scenes: GLTFScenesLoaded;
      scene: GLTFSceneLoaded;
      skins: GLTFSkinsLoaded;
      animations: GLTFAnimationsLoaded;
  }
  export interface GLTFDesc {
      raw: object;
      scene: Scene;
      uri?: string;
      extensionProfiles?: GLTFExtensionsProfiles;
      defaultBinary?: ArrayBuffer;
  }
  export default class GLTFRootNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFRootNodeRaw;
      readonly uri: string;
      readonly defaultBinary: ArrayBuffer | null;
      nodesNode: GLTFNodesNode | undefined;
      constructor(desc: GLTFDesc);
      build(): void;
      preload(): Promise<GLTFRootLoaded>;
      getLoadedResource(): GLTFRootLoaded;
      getNodesByPath(path: string): Array<GLTFBaseNode>;
      getRootExtensionRaw(extName: string): object | undefined;
      /**
        * 在preload完之后可以调用这个函数，会把原始buffer的引用都释放掉。
        * 每个子节点的raw也会释放掉（以防数据是dataURI的形式）。
        */
      releaseRawBuffer(): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend' {
  import MeshRendererComponent from 'XrFrame/kanata/lib/frontend/component/MeshRendererComponent';
  import renderEnv from 'XrFrame/kanata/lib/frontend/resource/renderEnv';
  export { RenderEnv } from 'XrFrame/kanata/lib/frontend/resource/renderEnv';
  export { default as AnimatorComponent } from 'XrFrame/kanata/lib/frontend/component/AnimatorComponent';
  export { default as CameraComponent } from 'XrFrame/kanata/lib/frontend/component/CameraComponent';
  export { default as LightCameraComponent } from 'XrFrame/kanata/lib/frontend/component/LightCameraComponent';
  export { default as CullingComponent } from 'XrFrame/kanata/lib/frontend/component/CullingComponent';
  export { default as MeshRendererComponent } from 'XrFrame/kanata/lib/frontend/component/MeshRendererComponent';
  export { default as SkinnedSkeletonComponent } from 'XrFrame/kanata/lib/frontend/component/SkinnedSkeletonComponent';
  export { default as DynamicBonesComponent } from 'XrFrame/kanata/lib/frontend/component/DynamicBonesComponent';
  export { default as Entity2D } from 'XrFrame/kanata/lib/frontend/entity/Entity2D';
  export { default as Entity3D } from 'XrFrame/kanata/lib/frontend/entity/Entity3D';
  export { default as AnimationClipModel } from 'XrFrame/kanata/lib/frontend/resource/AnimationClipModel';
  export { default as AnimationClipBinding } from 'XrFrame/kanata/lib/frontend/resource/AnimationClipBinding';
  export { default as AnimatorControllerModel } from 'XrFrame/kanata/lib/frontend/resource/AnimatorControllerModel';
  export { default as AnimatorControllerStateModel } from 'XrFrame/kanata/lib/frontend/resource/AnimatorControllerStateModel';
  export { default as DataBuffer } from 'XrFrame/kanata/lib/frontend/resource/DataBuffer';
  export { default as DataModel } from 'XrFrame/kanata/lib/frontend/resource/DataModel';
  export { default as Effect } from 'XrFrame/kanata/lib/frontend/resource/Effect';
  export { default as Material } from 'XrFrame/kanata/lib/frontend/resource/Material';
  export { default as RenderPass, IRenderPassOptions } from 'XrFrame/kanata/lib/frontend/resource/RenderPass';
  export { default as SkeletonBoneInverseModel } from 'XrFrame/kanata/lib/frontend/resource/SkeletonBoneInverseModel';
  export { default as Texture, ITextureOptions } from 'XrFrame/kanata/lib/frontend/resource/Texture';
  export { default as UniformBlock } from 'XrFrame/kanata/lib/frontend/resource/UniformBlock';
  export { default as UniformDescriptor } from 'XrFrame/kanata/lib/frontend/resource/UniformDescriptor';
  export { default as IndexBuffer } from 'XrFrame/kanata/lib/frontend/resource/IndexBuffer';
  export { default as IndexData } from 'XrFrame/kanata/lib/frontend/resource/IndexData';
  export { default as VertexBuffer } from 'XrFrame/kanata/lib/frontend/resource/VertexBuffer';
  export { default as VertexData } from 'XrFrame/kanata/lib/frontend/resource/VertexData';
  export { default as VertexLayout } from 'XrFrame/kanata/lib/frontend/resource/VertexLayout';
  export { default as VertexDataDescriptor } from 'XrFrame/kanata/lib/frontend/resource/VertexDataDescriptor';
  export { default as View } from 'XrFrame/kanata/lib/frontend/resource/View';
  export { default as ScalableList } from 'XrFrame/kanata/lib/frontend/resource/ScalableList';
  export { default as crossContext } from 'XrFrame/kanata/lib/frontend/shared/crossContext';
  const IS_VALID: () => boolean, GET_MAIN_CANVAS: () => HTMLCanvasElement, Image: {
      new (): import('XrFrame/kanata/lib/backend').IImage;
      IS(obj: any): obj is import('XrFrame/kanata/lib/backend').IImage;
  }, Phys3D: any;
  const downloader: import('XrFrame/kanata/lib/backend').IDownloader;
  export { renderEnv };
  export { Image, downloader as Downloader, IS_VALID, GET_MAIN_CANVAS, Phys3D };
  export const createWeakRef: <T>(wrapper: T) => {
      deref: () => T;
  };
  export const createWeakRefSentry: () => any;
  export const createNativeUUMap: () => import('XrFrame/kanata/lib/backend').INativeMap<number>;
  export const createNativeSUMap: () => import('XrFrame/kanata/lib/backend').INativeMap<string>;
  export const createNativeULUMap: () => import('XrFrame/kanata/lib/backend').ILongIntNativeMap;
  export const loadTTFFont: (url: string, callback: (font: string) => void) => void;
  export const getGlyphInfo: (fontSetting: import('XrFrame/kanata/lib/backend').IFontSetting, charCode: number) => import('XrFrame/kanata/lib/backend').IGlyphInfo;
  export const refreshNodesWorldTransform: () => void;
  export const setGlobalPhysicSystem: (system: any) => void;
  export const bindRigidBodyToNode: (rigidBody: any, nodeId: number) => void;
  export const bindCCTToNode: (cc: any, nodeId: number) => void;
  export const unbindRigidBody: (rigidBody: any) => void;
  export const unbindCCT: (cc: any) => void;
  export function destroy(): void;
  export function update(delta: number): void;
  export const setNodeName: (id: number, name: string) => void;
  export const setRenderComponentName: (comp: MeshRendererComponent, name: string) => void;
  export const debugPrint: (msg: string) => void;
  export const eventBridge: {
      bindEntityToBone: any;
      unbindEntityFromBone: any;
      bindEntitiesToBones: any;
      unbindEntitiesFromBones: any;
  };
}

declare module 'XrFrame/kanata/lib/backend/interface' {
  /**
      * index.ts
      *
      *         * @Date    : 2020/8/18 下午4:48:36
      */
  export interface IEngineSettings {
          /** log过滤器 */
          logFilter: boolean;
          /** log等级 */
          logLevel: string;
          /** 最大缓存极限 */
          cacheSizeLimit: number;
          /** 是否开启MSAA */
          realSizeLimit: number;
          /** 设计分辨率宽 */
          designWidth: number;
          /** 设计分辨率高 */
          designHeight: number;
          /** 渲染分辨率宽 */
          renderWidth: number;
          /** 渲染分辨率高 */
          renderHeight: number;
          /** 是否开启MSAA */
          mainScreenMSAA: boolean;
          /** loader下载文件的默认根路径 */
          baseURL: string;
          /** 如果baseURL找不到并且重试次数`globalHTTPRetry`大于0，则会依次尝试使用 */
          backupURLs: string[];
          /** 全局loader下载文件重试次数 */
          globalHTTPRetry: string;
          /** 物理引擎的重力 */
          gravity: number;
          /** 物理引擎的模拟步进固定间隔 */
          fixedDeltaTime: number;
          useEngineSubcontext: boolean;
          /** 物理碰撞矩阵，以十六进制字符串表示 */
          physics3DLayerCollisionMatrix: string;
          /** 拼缓存的文件名的 */
          cacheDelimiter: string;
          /** 自动生成的worker文件入口路径 */
          workerPath: string;
          /** worker执行任务超时时间 */
          workerTimeout: number;
          gfxIgnoreAssert: boolean;
          profileGfx: string;
          /** 全局Uniform定义 */
          shaderGlobalProperties: {
                  key: string;
                  type: 'Float' | 'Vector2' | 'Vector3' | 'Vector4' | 'Matrix4' | 'Texture';
                  default: number | number[] | string;
          }[];
          /** 音频全局定义 */
          audio?: {
                  /** 全局音量  */
                  globalVolume?: number;
                  /** 真实音频数量上限 */
                  maxRealVoices?: number;
          };
  }
  /**
      * 顶点数据格式枚举。
      */
  export enum EVertexFormat {
          FLOAT = 0,
          FLOAT2 = 1,
          FLOAT3 = 2,
          FLOAT4 = 3,
          BYTE4 = 4,
          BYTE4N = 5,
          UBYTE4 = 6,
          UBYTE4N = 7,
          SHORT2 = 8,
          SHORT2N = 9,
          SHORT4 = 10,
          SHORT4N = 11,
          UINT10_N2 = 12
  }
  /**
      * 顶点数据步进类型枚举。
      */
  export enum EVertexStep {
          /**
              * 逐顶点。
              */
          PER_VERTEX = 0,
          /**
              * 在使用Instance的情况下，逐实例。
              */
          PER_INSTANCE = 1
  }
  /**
      * 索引数据类型。
      */
  export enum EIndexType {
          /**
              * 无效值。
              */
          NONE = 1,
          /**
              * 16位索引。
              */
          UINT16 = 2,
          /**
              * 32位索引，注意在某些设备上不支持。
              */
          UINT32 = 3
  }
  /**
      * 压缩纹理类型。
      */
  export type TCompressTexture = 'etc1' | 'etc2' | 'astc' | 'pvrtc' | 's3tc';
  /**
      * 纹理类型雷剧。
      */
  export enum ETextureType {
          /**
              * 2D纹理。
              */
          D2 = 0,
          /**
              * 立方体纹理。
              */
          Cube = 1,
          /**
              * 2D纹理数组。
              */
          D2Array = 2,
          /**
              * 3D纹理。
              */
          D3 = 3
  }
  /**
      * 纹理格式枚举。
      */
  export enum ETextureFormat {
          /** Inputs or Render Target Formats. */
          RGBA8 = 0,
          SRGBA8 = 1,
          RGB10A2 = 2,
          RG8 = 3,
          R8 = 4,
          RGBA32F = 5,
          RGBA16F = 6,
          RG11B10F = 7,
          /** Render Target Only. */
          Depth_Low = 20,
          Depth_High = 21,
          Depth_Stencil = 22,
          RGBA4 = 23,
          RGB565 = 24,
          RGB5A1 = 25,
          /** Compresseds */
          ETC1RGB8 = 100,
          ETC2RGB8 = 110,
          ETC2RGBA8 = 111,
          PVRTC2RGBV1 = 120,
          PVRTC4RGBV1 = 121,
          PVRTC2RGBAV1 = 122,
          PVRTC4RGBAV1 = 123,
          ASTC4x4 = 140,
          ASTC5x5 = 141,
          ASTC6x6 = 142,
          ASTC8x6 = 143,
          ASTC8x8 = 144,
          DXT1 = 150,
          DXT3 = 151,
          DXT5 = 152
  }
  /**
      * 纹理寻址模式枚举。
      */
  export enum EWrapMode {
          REPEAT = 1,
          CLAMP_TO_EDGE = 2,
          MIRRORED_REPEAT = 3
  }
  /**
      * 纹理过滤模式枚举。
      */
  export enum EFilterMode {
          NEAREST = 1,
          LINEAR = 2,
          NEAREST_MIPMAP_NEAREST = 3,
          NEAREST_MIPMAP_LINEAR = 4,
          LINEAR_MIPMAP_NEAREST = 5,
          LINEAR_MIPMAP_LINEAR = 6
  }
  /**
      * Uniform值得类型枚举。
      */
  export enum EUniformType {
          FLOAT = 0,
          FLOAT2 = 1,
          FLOAT3 = 2,
          FLOAT4 = 3,
          MAT2 = 4,
          MAT3 = 5,
          MAT4 = 6,
          SAMPLER = 7
  }
  /**
      * 背面剔除类型枚举。
      */
  export enum ECullMode {
          NONE = 0,
          FRONT = 1,
          BACK = 2
  }
  /**
      * 正面顶点绕序枚举。
      */
  export enum EFaceWinding {
          CCW = 1,
          CW = 2
  }
  /**
      * 各种测试的比较函数枚举。
      */
  export enum ECompareFunc {
          LESS = 1,
          LEQUAL = 2,
          EQUAL = 3,
          GEQUAL = 4,
          GREATER = 5,
          NOTEQUAL = 6,
          NEVER = 7,
          ALWAYS = 8
  }
  /**
      * 模板测试操作枚举。
      */
  export enum EStencilOp {
          ZERO = 0,
          KEEP = 1,
          REPLACE = 2,
          INCR_WRAP = 3,
          INCR = 4,
          DECR_WRAP = 5,
          DECR = 6,
          INVERT = 7
  }
  /**
      * 混合因子枚举。
      */
  export enum EBlendFactor {
          ZERO = 0,
          ONE = 1,
          SRC_COLOR = 2,
          ONE_MINUS_SRC_COLOR = 3,
          SRC_ALPHA = 4,
          ONE_MINUS_SRC_ALPHA = 5,
          DST_ALPHA = 6,
          ONE_MINUS_DST_ALPHA = 7,
          DST_COLOR = 8,
          ONE_MINUS_DST_COLOR = 9,
          SRC_ALPHA_SATURATE = 10,
          CONSTANT_COLOR = 11,
          ONE_MINUS_CONSTANT_COLOR = 12
  }
  /**
      * 混合方式枚举。
      */
  export enum EBlendEquation {
          FUNC_ADD = 0,
          FUNC_SUBTRACT = 1,
          FUNC_REVERSE_SUBTRACT = 2,
          MIN = 3,
          MAX = 4
  }
  /**
      * 颜色通道掩码枚举。
      */
  export enum EColorMask {
          /**
              * 将会禁掉所有通道的输出。
              */
          NONE = 16,
          R = 1,
          G = 2,
          B = 4,
          A = 8,
          RGB = 7,
          RGBA = 15
  }
  /**
      * 像素数据类型枚举。
      */
  export enum EPixelType {
          UNSIGNED_BYTE = 5121,
          FLOAT = 5126,
          UNSIGNED_SHORT_5_6_5 = 33635,
          UNSIGNED_SHORT_4_4_4_4 = 32819,
          UNSIGNED_SHORT_5_5_5_1 = 32820
  }
  /**
      * 清屏操作枚举。
      */
  export enum ELoadAction {
          /**
              * 清除屏幕颜色。
              */
          CLEAR = 0,
          /**
              * 不清屏，但依赖前面渲染的结果。
              */
          LOAD = 1,
          /**
              * 完全不关心是否清屏。
              */
          DONTCARE = 2
  }
  export enum EDataModelType {
          AnimationClip = 1,
          SkeletonBoneInverse = 2
  }
  /**
      * 渲染组件类型枚举。
      */
  export enum EMeshRenderType {
          /**
              * 未知类型。
              */
          UnKnown = 0,
          /**
              * 静态3D类型。
              */
          Static3D = 1,
          /**
              * 蒙皮3D类型。
              */
          Skinned3D = 2,
          /**
              * UI类型。
              */
          UI = 3
  }
  /**
      * 图元渲染类型枚举。
      */
  export enum EPrimitiveType {
          TRIANGLES = 0,
          TRIANGLE_STRIP = 1,
          LINES = 2,
          LINE_STRIP = 3,
          POINTS = 4,
          ZERO = 5
  }
  /**
      * 阴影类型枚举。
      */
  export enum EShadowMode {
          /**
              * 关闭阴影。
              */
          None = 0,
          /**
              * 开启单级联阴影，并开启PCF。
              */
          OneCascade_PCF = 1,
          /**
              * 开启二级联阴影，并开启PCF。
              */
          TwoCascade_PCF = 2,
          /**
              * 开启四级联阴影，并开启PCF。
              */
          FourCascade_PCF = 4,
          /**
              * 开启单级联阴影，并开启PCSS。
              */
          PCSS = 5
  }
  /**
      * 阴影匹配类型枚举。
      */
  export enum EShadowFitMode {
          /**
              * 阴影范围适配视锥体。
              * 更稳定，可能降低阴影精度。
              */
          FitFrustum = 0,
          /**
              * 阴影范围适配物体。
              * 能提高阴影精度，但可能会导致阴影不稳定。
              */
          FitObjects = 1
  }
  /**
      * 顶点数据布局用途枚举。
      */
  export enum EVertexLayoutUsage {
          CUSTOM = 0,
          POSITION = 1,
          NORMAL = 2,
          TANGENT = 3,
          UV0 = 4,
          UV1 = 5,
          UV2 = 6,
          COLOR = 7,
          BONEINDEX = 8,
          BONEWEIGHT = 9
  }
  /**
      * 动态合批操作符枚举。
      */
  export enum EVertexBatchOperator {
          /**
              * 矩阵乘法。
              */
          MatrixMultiple = 0,
          /**
              * Scale offset。
              */
          UVST = 1
  }
  export enum EAnimationBlendType {
          Override = 0,
          Additive = 1
  }
  export enum EUseDefaultAddedAction {
          Ignore = 0,
          Refresh = 1
  }
  export enum EUseDefaultRetainedAction {
          Keep = 0,
          Refresh = 1,
          WriteBack = 2
  }
  export enum EUseDefaultRemovedAction {
          Keep = 0,
          Clear = 1,
          WriteBack = 2
  }
  export const RENDER_ENV_OFFSETS: {
          size: number;
          resetFlag: number;
          renderPass: number;
          canvasWidth: number;
          canvasHeight: number;
          uniforms: number;
          useInstanceOrNeverTranspose: number;
  };
  export const POOL_SUB_ID_MASK = 65472;
  export const POOL_SUB_ID_SHIT = 6;
  export const ENTITY2D_OFFSETS: {
          size: number;
          rotation: number;
          position: number;
          scale: number;
          worldMatrix: number;
  };
  export const ENTITY3D_OFFSETS: {
          size: number;
          dfRotationType: number;
          rotationType: number;
          rotation: number;
          position: number;
          scale: number;
          worldOffset: number;
          worldMatrix: number;
  };
  export const CULLING_OFFSETS: {
          size: number;
          active: number;
          dfActive: number;
          layer: number;
          boundingBallCenter: number;
          boundingBallRadius: number;
          entityId: number;
  };
  export const CAMERA_OFFSETS: {
          size: number;
          view: number;
          depth: number;
          active: number;
          fov: number;
          aspect: number;
          near: number;
          far: number;
          up: number;
          eye: number;
          orthoSize: number;
          isProjection: number;
          cullingMask: number;
          canvasSizeY: number;
          targetTransform: number;
          viewMatrix: number;
          projectionMatrix: number;
          viewMatrixInverse: number;
          viewMatrix2D: number;
          projectionMatrix2D: number;
          viewMatrixInverse2D: number;
          manualMatrix: number;
          layerCullDistances: number;
  };
  export const LIGHT_OFFSETS: {
          size: number;
          view: number;
          depth: number;
          active: number;
          shadowDistance: number;
          shadowMode: number;
          shadowFilterMode: number;
          lightDir: number;
          bounds: number;
          lightSpaceMatrices: number;
  };
  export const MESH_OFFSETS: {
          dynamicBatch: number;
          skinHandle: number;
          castShadow: number;
          bindTarget: number;
          start: number;
          size: number;
          materialId: number;
          vertexBufferId: number;
          indexBufferId: number;
          startIndex: number;
          numIndices: number;
  };
  export const EFFECT_OFFSETS: {
          size: number;
          useMaterialStates: number;
          fstencil: number;
          bstencil: number;
          blendRGBA: number;
          colorDepth: number;
          state: number;
  };
  export const MATERIAL_OFFSETS: {
          size: number;
          renderQueue: number;
          effect: number;
          uniformBlock: number;
          fstencilMask: number;
          bstencilMask: number;
          blendRGBAMask: number;
          colorDepthMask: number;
          stateMask: number;
          fstencil: number;
          bstencil: number;
          blendRGBA: number;
          colorDepth: number;
          state: number;
          useInstance: number;
  };
  export const SKINNED_SKELETON_OFFSETS: {
          boneInverseModelId: number;
          boneIndices: number;
          perBoneIndices: number;
          perBoneEntityId: number;
          perBoneMatrixOld: number;
          perBoneMatrixNew: number;
  };
  export const DYNAMIC_BONES_OFFSETS: {
          stiffness: number;
          elasticity: number;
          damping: number;
  };
  export interface IHandle {
          id: number;
          data?: ArrayBuffer;
          destroy?: Function;
          __feObj?: any;
  }
  /**
      * 顶点布局解构初始化参数。
      */
  export interface IVertexLayoutOptions {
          /**
              * 顶点属性列表。
              */
          attributes: {
                  /**
                      * 属性名字。
                      */
                  name: string;
                  /**
                      * 属性名格式。
                      */
                  format: EVertexFormat;
                  /**
                      * 属性在Buffer中的偏移量（字节）。
                      */
                  offset: number;
                  /**
                      * 属性的用途。
                      */
                  usage: EVertexLayoutUsage;
          }[];
          /**
              * 步进类型。
              *
              * @default EVertexStep.PER_VERTEX
              */
          step?: EVertexStep;
          /**
              * 步长，不设定会自动计算。
              */
          stride?: number;
          /**
              * 步进单位。
              *
              * @default 1
              */
          stepRate?: number;
  }
  /**
      * 动态合批描述符创建参数。
      */
  export interface IVertexDataDescriptorOptions {
          vuMap: [string, string, EVertexBatchOperator?][];
          ignored?: string[];
          ubIndex?: number;
  }
  /**
      * UniformBlock描述符创建参数。
      */
  export interface IUniformDescriptorOptions {
          /**
              * 名字。
              */
          name?: string;
          /**
              * Uniform描述列表。
              */
          uniforms: {
                  /**
                      * 名字。
                      */
                  name: string;
                  /**
                      * 类型。
                      */
                  type: EUniformType;
                  /**
                      * 长度。
                      */
                  num?: number;
                  /**
                      * @deprecated
                      */
                  needTranspose?: boolean;
          }[];
  }
  /**
      * 引擎原生图片接口。
      */
  export interface IImage {
          /**
              * 是否要预乘Alpha。
              */
          premultiplyAlpha: boolean;
          /**
              * 加载完成的回调。
              */
          onload: (() => void) | null;
          /**
              * 出错的回调。
              */
          onerror: ((error: Error) => void) | null;
          /**
              * 图片类型，当`src`为`ArrayBuffer`时必传。
              */
          type?: string;
          /**
              * 图片地址或者待解码的ArrayBuffer。
              */
          src: string | ArrayBuffer | ArrayBufferView;
          /**
              * 图片本地缓存地址，仅在微信内有用。
              */
          localPath?: string;
          /**
              * 图片宽度。
              */
          width: number;
          /**
              * 图片高度。
              */
          height: number;
          /**
              * 解码数据，视不同Backend而定。
              */
          readonly data?: ArrayBuffer | HTMLImageElement;
  }
  /**
      * 可用于纹理的资源。
      */
  export type TTextureSource = ArrayBuffer | ArrayBufferView | IImage;
  /**
      * 外部需要注入的下载器接口。
      */
  export interface IRealDownloader {
          load: (options: {
                  src: string;
                  encoding: 'binary' | 'utf-8' | undefined;
                  onLoad: (res: {
                          data: ArrayBuffer;
                          filePath: string;
                  }) => void;
                  onError: (error: Error) => void;
          }) => void;
  }
  /**
      * 下载器。
      */
  export interface IDownloader {
          REAL_DOWNLOADER: IRealDownloader;
          LOAD(options: Parameters<IRealDownloader['load']>[0]): void;
  }
  /**
      * 字体配置。
      */
  export interface IFontSetting {
          fontFamily: string;
          bold?: string;
          italic?: string;
          size?: number;
  }
  /**
      * 渲染层提供的特性列表。
      */
  export interface IFeatures {
          /**
              * 是否支持GPU实例化。
              */
          gpuInstance: boolean;
          /**
              * 是否支持3D动态合批。
              */
          dynamicBatch3D: boolean;
          /**
              * 是否支持硬件SRGB解码。
              */
          srgb: boolean;
          /**
              * 是否支持各向异性滤波。
              */
          textureAnisotropic: boolean;
          /**
              * 是否支持浮点纹理。
              */
          textureFloat: boolean;
          /**
              * 是否支持半精度浮点纹理。
              */
          textureHalfFloat: boolean;
          /**
              * 是否支持浮点类型的颜色缓冲。
              */
          colorBufferFloat: boolean;
          /**
              * 是否支持深度纹理。
              */
          depthTexture: boolean;
          /**
              * 是否支持在片段着色器采样深度。
              */
          fragDepth: boolean;
  }
  export interface IRect {
          x: number;
          y: number;
          w: number;
          h: number;
  }
  /**
      * 对一个View进行清屏的操作。
      */
  export interface IViewAction {
          /**
              * 颜色操作。
              */
          colorAction?: ELoadAction;
          /**
              * 深度操作。
              */
          depthAction?: ELoadAction;
          /**
              * 模板操作。
              */
          stencilAction?: ELoadAction;
          /**
              * 用于清屏的颜色值。
              *
              * @default [0,0,0,0]
              */
          clearColor?: [number, number, number, number];
          /**
              * 用于清屏的深度值。
              *
              * @default 1
              */
          clearDepth?: number;
          /**
              * 用于清屏的模板值。
              *
              * @default 0
              */
          clearStencil?: number;
  }
  /**
      * 视图接口。
      */
  export interface IView {
          /**
              * 视图清屏操作。
              */
          passAction: IViewAction;
          /**
              * 视图区域。
              */
          viewport: IRect;
          /**
              * 裁剪区域。
              */
          scissor: IRect;
  }
  /**
      * 附件接口。
      */
  export interface IAttachment {
          texture: IHandle;
          level?: number;
          slice?: number;
  }
  /**
      * 渲染通道描述符。
      */
  export interface IRenderPassDescriptor {
          colors: IAttachment[];
          depth: IAttachment;
          stencil: IAttachment;
  }
  export enum EEventType {
          SetRootEntity = 1,
          AddChild = 2,
          AddChildAtIndex = 3,
          RemoveFromParent = 4,
          DisperseSubTree = 5,
          BindToBone = 6,
          BindToBones = 7,
          UnBindFromBone = 8,
          UnBindFromBones = 9,
          EntityCommandActive = 10,
          EntityCommandInActive = 11
  }
  export interface IGlyphInfo {
          code: number;
          tex: number;
          uv_x: number;
          uv_y: number;
          uv_w: number;
          uv_h: number;
          advance: number;
          bearing_x: number;
          bearing_y: number;
          width: number;
          height: number;
  }
  export interface IEventBridge {
          entityAddChild(entity: number, child: number): void;
          entityAddChildAtIndex(entity: number, child: number, index: number): void;
          entityRemoveFromParent(entity: number): void;
          entityClear(entity: number): void;
          entitySetActive(entity: number, active: boolean): void;
          entitySetLocalMatrixDirty(entity: number): void;
          setRootEntity(entity: number): void;
          refreshWorldTransform(): void;
          bindEntityToBone(entity: {
                  id: number;
          }, boneEntity: {
                  id: number;
          }): void;
          unbindEntityFromBone(entity: {
                  id: number;
          }): void;
          bindEntitiesToBones(entities: Array<{
                  id: number;
          }>, boneEntities: Array<{
                  id: number;
          }>): void;
          unbindEntitiesFromBones(entities: Array<{
                  id: number;
          }>): void;
  }
  export interface IRenderEnv extends IHandle {
          version?: string;
          backendType: string;
          registerFallbackEffect(lightMode: string, handle?: IHandle): void;
          changeMacros(macros: {
                  [name: string]: string | number | boolean;
          }): void;
          changeVirtualMacros(macros: {
                  [name: string]: boolean;
          }): void;
          setInternalInstanceInfo(type: EMeshRenderType, info: {
                  uniformKey: string;
                  attributeName: string;
                  type: EUniformType;
          }[], ignored: string[]): void;
          supportCompressTextures: TCompressTexture[];
          features: IFeatures;
          commit_version: string;
          use_puppet_sokol: boolean;
  }
  export interface INativeMap<T> {
          set(key: T, value: number): void;
          get(key: T): number | undefined;
          del(key: T): void;
  }
  export interface ILongIntNativeMap {
          set(key1: number, key2: number, value: number): void;
          get(key1: number, key2: number): number | undefined;
          del(key1: number, key2: number): void;
  }
  export type WeakRef = any;
}

declare module 'XrFrame/kanata/lib/index' {
  /**
      * index.ts
      *
      *         * @Date    : 2020/8/18 下午4:48:36
      */
  export * from 'XrFrame/kanata/lib/frontend';
  export * from 'XrFrame/kanata/lib/backend/interface';
  export const VERSION = "1.0.3";
  const Puppet: any;
  export { Puppet };
  /**
      * 根据数据，返回二维节点对应结构的Float32array
      */
  export function composeRawBufferEntity2D(rotation: number, position: ArrayLike<number>, scale: ArrayLike<number>): Float32Array;
  /**
      * 根据数据，返回三维节点对应结构的Float32array，除WorldMatrix。
      */
  export function composeRawBufferEntity3D(useEuler: boolean, rotation: ArrayLike<number>, position: ArrayLike<number>, scale: ArrayLike<number>): Float32Array;
  /**
      * 根据数据，返回三维节点对应结构的Float32array
      */
  export function composeRawBufferEntity3DWhole(useEuler: boolean, rotation: ArrayLike<number>, position: ArrayLike<number>, scale: ArrayLike<number>): Float32Array;
}

declare module 'XrFrame/render-graph/RenderGraph' {
  import RGNode, { TRGNodeAny } from 'XrFrame/render-graph/RGNode';
  import Camera from 'XrFrame/components/Camera';
  type RenderSystem = import('XrFrame/systems/RenderSystem').default;
  type Scene = import('XrFrame/core/Scene').default;
  interface IDigraphNode {
          node: TRGNodeAny;
          ins: number;
          dist: number[];
  }
  /**
      * 渲染图。
      *
      * @category Render
      */
  export default class RenderGraph<IOptions = any> {
          protected _name: string;
          protected _options: IOptions;
          protected _scene?: Scene;
          protected _isActive: boolean;
          protected _isDirty: boolean;
          protected _unusedIds: number[];
          protected _digraph: (IDigraphNode | undefined)[];
          protected _sorted: TRGNodeAny[];
          /**
              * 图名字。
              */
          get name(): string;
          /**
              * 当前正在运行的Game实例。
              */
          get scene(): import('XrFrame/core/Scene').default;
          /**
              * 当前的渲染上下文。
              */
          get context(): import('XrFrame/systems/RenderSystem').default;
          constructor(_name: string, _options: IOptions);
          /**
              * 创建一个节点。
              */
          createNode<TRGNode extends TRGNodeAny>(name: string, clz: new (...args: any) => TRGNode, options: TRGNode['options']): TRGNode;
          /**
              * 销毁一个节点。
              */
          destroyNode(rgNode: TRGNodeAny): void;
          /**
              * 连接两个节点。
              *
              * @param inputKey 需要将`from`节点的输出连接到哪个`to`节点的输入。
              */
          connect<TToNode extends TRGNodeAny>(from: TRGNodeAny, to: TToNode, inputKey?: keyof TToNode['inputTypes']): void;
          /**
              * 断开两个节点的连接。
              */
          disconnect(from: TRGNodeAny, to: TRGNodeAny): void;
          /**
              * @internal
              */
          /**
              * @internal
              */
          /**
              * @internal
              */
          /**
              * 清空整个图，一般用于图的重新构建。
              *
              * @param filter 过滤出需要保留、不被销毁的缓存节点，这些节点只会被重置状态。
              */
          protected _clear(filter?: (node: RGNode<any, any, any>) => boolean): void;
          protected _handleCamerasChange: (context: RenderSystem) => void;
          /**
              * 图在被第一次真正使用时的回调。
              */
          onActive(context: RenderSystem, options: IOptions): void;
          /**
              * 在渲染上下文中的相机改变时调用，一般用于重新构建图。
              */
          onCamerasChange(cameras: Camera[], changeCameras: Camera[]): void;
          /**
              * 在图每帧执行前调用。
              */
          onExecuteBegin(context: RenderSystem, options: IOptions): void;
          /**
              * 在图每帧执行后调用。
              */
          onExecuteDone(context: RenderSystem, options: IOptions): void;
          /**
              * 在图不再使用时调用。
              */
          onDisable(context: RenderSystem, options: IOptions): void;
          /**
              * @internal
              *
              * 编译整张图。
              */
          showDebugInfo(callback?: (digraph: (IDigraphNode | undefined)[], sorted: TRGNodeAny[]) => void): string;
  }
  export {};
}

declare module 'XrFrame/systems/LightManager' {
  /**
    * LightManager.ts
    *
    *       * @Date    : 4/11/2022, 2:29:36 PM
    */
  import Camera from 'XrFrame/components/Camera';
  import Light from 'XrFrame/components/Light';
  export interface IMainLightsInfo {
      hasAmbient: boolean;
      hasMainDir: boolean;
      ambientColorIns: Float32Array;
      mainDir: Float32Array;
      mainColorIns: Float32Array;
  }
  export interface IAddLightsInfo {
      count: number;
      info: Float32Array;
      dir: Float32Array;
      pos: Float32Array;
      colorIns: Float32Array;
  }
  export default class LightManager {
  }
}

declare module 'XrFrame/physics/raycast' {
  import Vector3 from "XrFrame/math/vector3";
  import RaycastHit from "XrFrame/physics/RaycastHit";
  /**
      * raycast函数的参数。
      * @field origin 射线起点。
      * @field unitDir 射线方向（单位向量）。
      * @field distance 射线的最大长度。
      * @field hit 用来接收碰撞信息的容器。
      * @field layerMask 可以用来屏蔽一些碰撞体。
      * @field （未实现）queryTriggerInteraction，是否能与Trigger相交（默认能）。
      */
  export type RaycastDesc = {
          origin: Vector3;
          unitDir: Vector3;
          distance?: number;
          hit?: RaycastHit;
          layerMask?: number;
  };
  /**
      * 射线检测，判断给定射线是否与至少一个碰撞体相交，并返回与**最近**的那个碰撞体相交的信息。
      */
  export function raycast(Phys3D: typeof phys3D, system: phys3D.PhysSystem, desc: RaycastDesc): boolean;
}

declare module 'XrFrame/components/physics/Shape' {
  import Component from "XrFrame/core/Component";
  import Element from "XrFrame/core/Element";
  import Vector3 from "XrFrame/math/vector3";
  import { Kanata } from "XrFrame/ext";
  import Rigidbody from "XrFrame/components/physics/Rigidbody";
  export const shapeMap: Map<phys3D.Collider, Shape>;
  export enum ShapeType {
          None = 0,
          Box = 1,
          CharacterController = 2,
          Capsule = 3,
          Mesh = 4,
          Sphere = 5
  }
  export interface IShapeData {
  }
  /**
      * 碰撞体的基类。
      * @abstract
      */
  export default class Shape extends Component<IShapeData> {
          /**
              * 物理组件在节点上的执行顺序，排在渲染节点之后、用户脚本之前。
              */
          readonly priority: number;
          _nativeStaticRigidbody: phys3D.Rigidbody | null;
          _nativeColliders: Array<phys3D.Collider>;
          protected _rigidbodyComp: Rigidbody | null;
          protected _type: ShapeType;
          onAdd(parent: Element, data: IShapeData): void;
          onRelease(): void;
          get entity(): Kanata.Entity3D;
          get type(): ShapeType;
          set type(v: ShapeType);
          /**
              * 碰撞体是否是Trigger，开启后不参与碰撞，但是能触发Trigger系列的事件：
              * {@link onTriggerEnter}, {@link onTriggerStay}, {@link onTriggerExit}。
              * @default false
              */
          get isTrigger(): boolean;
          set isTrigger(v: boolean);
          /**
              * @internal
              */
          get scale(): Vector3;
          set scale(v: Vector3);
          /**
              * 获取碰撞体附着的刚体组件。
              * 目前不支持刚体，必定返回null。
              */
          get attachedRigidbody(): any;
          /**
              * 设置碰撞体的contactOffset，必须为正数。
              * *一对*碰撞体，如果他们之间的最近距离小于他们的contactOffset之和，那么物理系统在一次*物理模拟*后就会产生一次碰撞。
              */
          get contactOffset(): number;
          set contactOffset(v: number);
          /** @internal */
          constructor();
          enable(): void;
          disable(): void;
          /**
              * 交给子类重载实现
              * @deprecated
              */
          protected _create(data: IShapeData): void;
          /** @internal */
          onAddRigidbody(rigidbody: Rigidbody): void;
          /** @internal */
          onRemoveRigidbody(): void;
          /**
              * @virtual 子类调用该方法之前必须确保_nativeCollider已经创建
              */
          protected _baseInit(): void;
  }
}

declare module 'XrFrame/loader/AssetLoader' {
  import { IAssetLoadData } from 'XrFrame/loader/types';
  type Scene = import('XrFrame/core/Scene').default;
  export interface ILoaderOptionsSchema {
          [key: string]: {
                  type: string;
                  defaultValue?: any;
          };
  }
  export default class AssetLoader<T, ILoadOptions> {
          readonly schema: ILoaderOptionsSchema;
          get scene(): import('XrFrame/core/Scene').default;
          constructor(_scene: Scene, type: string);
          /**
              * 加载一个资源，并根据情况执行`callbacks`中的回调。
              */
          load(data: IAssetLoadData<ILoadOptions>, callbacks: {
                  onLoading(params: IAssetLoadData<ILoadOptions>, progress: number): void;
                  onLoaded(params: IAssetLoadData<ILoadOptions>, result: T, localPath?: string): void;
                  onError(params: IAssetLoadData<ILoadOptions>, error: Error): void;
          }): void;
          /**
              * 取消加载特定实体。一般不需要自己编写逻辑，而是使用`entity.canceled`在加载终点丢弃。
              * 注意`entity.canceled`是在这里赋值的，所以一般继承请务必先执行`super.cancel()`！
              */
          cancel(params: IAssetLoadData<ILoadOptions>): void;
          /**
              * 释放资源时将会调用，用于自定义释放逻辑。
              */
          release(params: IAssetLoadData<ILoadOptions>, value: T): void;
          /**
              * 返回默认资源列表。
              */
          getBuiltin(): {
                  assetId: string;
                  src: string;
                  options: ILoadOptions;
          }[];
  }
  export function getAssetLoaderTypes(): string[];
  export function getAssetLoader(type: string): new (scene: import('XrFrame/core/Scene').default, type: string) => AssetLoader<any, any>;
  export function registerAssetLoader(type: string, clz: new (scene: Scene, type: string) => AssetLoader<any, any>): void;
  export {};
}

declare module 'XrFrame/loader/glTF/animations/GLTFAnimationsNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFNodesLoaded } from "XrFrame/loader/glTF/scenes/GLTFNodesNode";
  import GLTFAnimationNode, { GLTFAnimationLoaded, GLTFAnimationNodeRaw } from "XrFrame/loader/glTF/animations/GLTFAnimationNode";
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  type ChildNode = GLTFAnimationNode;
  export type GLTFAnimationsNodeRaw = Array<GLTFAnimationsNodeRaw>;
  export type GLTFAnimationsLoaded = Array<GLTFAnimationLoaded>;
  export default class GLTFAnimationsNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFAnimationNodeRaw): GLTFAnimationNode;
      readonly raw: GLTFAnimationsNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [accessors: GLTFAccessorsLoaded, nodes: GLTFNodesLoaded]) => Promise<GLTFAnimationsLoaded>;
      getLoadedResource(): GLTFAnimationsLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/buffers/GLTFAccessorsNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import GLTFAccessorNode, { GLTFAccessorLoaded, GLTFAccessorNodeRaw } from "XrFrame/loader/glTF/buffers/GLTFAccessorNode";
  import { GLTFBufferViewsLoaded } from "XrFrame/loader/glTF/buffers/GLTFBufferViewsNode";
  type ChildNode = GLTFAccessorNode;
  export type GLTFAccessorsNodeRaw = Array<GLTFAccessorsNodeRaw>;
  export type GLTFAccessorsLoaded = Array<GLTFAccessorLoaded>;
  export default class GLTFAccessorsNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFAccessorNodeRaw): GLTFAccessorNode;
      readonly raw: GLTFAccessorsNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: GLTFBufferViewsLoaded) => Promise<GLTFAccessorsLoaded>;
      getLoadedResource(): GLTFAccessorsLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/buffers/GLTFBuffersNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import GLTFBufferNode, { GLTFBufferNodeRaw } from "XrFrame/loader/glTF/buffers/GLTFBufferNode";
  type ChildNode = GLTFBufferNode;
  export type GLTFBuffersNodeRaw = Array<GLTFBufferNodeRaw>;
  export type GLTFBuffersLoaded = Array<ArrayBuffer>;
  export default class GLTFBuffersNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFBufferNodeRaw): GLTFBufferNode;
      readonly raw: GLTFBuffersNodeRaw;
      get nodeName(): string;
      getLoadedResource(): GLTFBuffersLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/buffers/GLTFBufferViewsNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFBufferLoaded } from "XrFrame/loader/glTF/buffers/GLTFBufferNode";
  import GLTFBufferViewNode, { GLTFBufferViewLoaded, GLTFBufferViewNodeRaw } from "XrFrame/loader/glTF/buffers/GLTFBufferViewNode";
  type ChildNode = GLTFBufferViewNode;
  export type GLTFBufferViewsNodeRaw = Array<GLTFBufferViewsNodeRaw>;
  export type GLTFBufferViewsLoaded = Array<GLTFBufferViewLoaded>;
  export default class GLTFBufferViewsNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFBufferViewNodeRaw): GLTFBufferViewNode;
      readonly raw: GLTFBufferViewsNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [GLTFBufferLoaded]) => Promise<GLTFBufferViewsLoaded>;
      getLoadedResource(): GLTFBufferViewsLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/extensions/GLTFExtensions' {
  /**
      * 创建GLTFExtensionProfileBuilder实例来定义一种extension，
      * 类内提供了三种方法来操作gltf树：
      * + 一种是substitutePreload，替换gltf节点的preload函数；
      * + 一种是postBuild，在gltf树preload全部完成之后，再对其进行自定义操作；
      * + 一种是registerRunInSlot，需要先在gltf节点内部使用extensionSlot定义一个槽位，然后往这个槽位里填写代码。
      *
      * 具体要使用哪些extension请看GLTFLoader.ts。
      */
  type SlotCode = (raw: object, extensionGlobal: object, prerequisites: any, args: any) => Promise<void>;
  type ForceSlotCode = (extensionGlobal: object, prerequisites: any, args: any) => Promise<void>;
  export class GLTFExtensionProfileBuilder {
          constructor(extName: string);
          registerRootInit(init: (raw: object, extensionGlobal: object) => void): void;
          registerSubstitutePreload(path: string, preload: (raw: object, extensionGlobal: object, prerequisites?: object) => Promise<any>): void;
          registerPostBuild(execute: (root: any, extensionGlobal: object) => Promise<void>): void;
          registerRunInSlot(slotId: string, code: SlotCode): void;
          /**
              * 不管当前节点有没有extension，都运行，但是运行的时候不会给extRaw（因为可能没有）。
              */
          registerForceRunInSlot(slotId: string, code: ForceSlotCode): void;
  }
  export interface GLTFExtensionProfile {
          readonly name: string;
          readonly preloads: {
                  [path: string]: (raw: string, extensionGlobal: object, prerequisites?: object) => Promise<any>;
          };
          readonly postBuild?: (root: any, extensionGlobal: object) => void;
          readonly slotCodeMap: Map<string, SlotCode>;
          readonly forceSlotCodeMap: Map<string, ForceSlotCode>;
          readonly rootInit: (raw: object, extensionGlobal: object) => void;
  }
  export type GLTFExtensionsProfiles = {
          [name: string]: GLTFExtensionProfile;
  };
  export {};
}

declare module 'XrFrame/loader/glTF/geometry/GLTFMeshesNode' {
  import { Kanata } from "XrFrame/ext";
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFMaterialsLoaded } from "XrFrame/loader/glTF/materials/GLTFMaterialsNode";
  import GLTFMeshNode, { GLTFMeshLoaded, GLTFMeshNodeRaw } from "XrFrame/loader/glTF/geometry/GLTFMeshNode";
  type ChildNode = GLTFMeshNode;
  export type GLTFMeshesNodeRaw = Array<GLTFMeshesNodeRaw>;
  export type GLTFMeshesLoaded = Array<GLTFMeshLoaded>;
  export default class GLTFMeshesNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFMeshNodeRaw): GLTFMeshNode;
      readonly raw: GLTFMeshesNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [materials: GLTFMaterialsLoaded, accessors: GLTFAccessorsLoaded, vbMap: Map<string, [ArrayBuffer, Kanata.VertexLayout, object]>]) => Promise<GLTFMeshesLoaded>;
      getLoadedResource(): GLTFMeshesLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/GLTFBaseNode' {
  import Scene from "XrFrame/core/Scene";
  function _empty(): {
          and: typeof _empty;
  };
  export abstract class GLTFBaseNode {
          readonly raw: any;
          abstract get nodeName(): string;
          parent: GLTFBaseNode;
          scene: Scene;
          isValid: boolean;
          constructor(raw: object, parent?: GLTFBaseNode);
          /**
              * 对raw进行校验。
              * @deprecated 校验的事情还是交给官方的工具来做吧，规则太多了。
              */
          validate(): void;
          /**
              * 利用raw生成子节点
              */
          abstract build(): void;
          /**
              * @param msg 需要带句号
              */
          protected assert(pred: any, msg?: string): this | {
                  and: typeof _empty;
          };
          /** @internal */
          and: (pred: any, msg?: string) => this | {
                  and: typeof _empty;
          };
          /**
              * 加载静态资源，buffer/image等。
              * 所有错误在这个方法抛出，包括格式错误，加载错误等。
              */
          abstract preload(prerequisites?: object): Promise<object>;
          /**
              * 获取加载后的资源。
              * 无报错 throws nothing。
              */
          abstract getLoadedResource(): object;
          protected findRoot(withPath?: boolean): any;
          getExtensionRaw(extName: string): object | undefined;
          /**
              * 调用这个函数可以放置一个**允许extension代码插入**的位置。
              */
          protected extensionSlot(id: string, args: object): Promise<void>;
          releaseLoadedResource(): void;
  }
  export abstract class GLTFArrayNode<T extends GLTFBaseNode> extends GLTFBaseNode {
          abstract readonly raw: Array<object>;
          abstract ChildCtor(childRaw: object): T;
          children: Array<T>;
          protected resources: Array<any>;
          validate(): void;
          preload(prerequisites?: any): Promise<any>;
          build(): void;
          releaseLoadedResource(): void;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/materials/GLTFMaterialsNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFTexturesLoaded } from "XrFrame/loader/glTF/textures/GLTFTexturesNode";
  import GLTFMaterialNode, { GLTFMaterialLoaded, GLTFMaterialNodeRaw } from "XrFrame/loader/glTF/materials/GLTFMaterialNode";
  type ChildNode = GLTFMaterialNode;
  export type GLTFMaterialsNodeRaw = Array<GLTFMaterialsNodeRaw>;
  export type GLTFMaterialsLoaded = Array<GLTFMaterialLoaded>;
  export default class GLTFMaterialsNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFMaterialNodeRaw): GLTFMaterialNode;
      readonly raw: GLTFMaterialsNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [textrues: GLTFTexturesLoaded]) => Promise<GLTFMaterialsLoaded>;
      getLoadedResource(): GLTFMaterialsLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/scenes/GLTFNodesNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import GLTFNodeNode, { GLTFNodeLoaded, GLTFNodeNodeRaw, GLTFNodePrerequisites } from "XrFrame/loader/glTF/scenes/GLTFNodeNode";
  type ChildNode = GLTFNodeNode;
  export type GLTFNodesNodeRaw = Array<GLTFNodesNodeRaw>;
  export type GLTFTreeNode = {
      data: GLTFNodeLoaded;
      children: Array<GLTFTreeNode>;
      parent: GLTFTreeNode | null;
      index: number;
      extension?: object;
  };
  export type GLTFNodesLoaded = Array<GLTFTreeNode>;
  export default class GLTFNodesNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFNodeNodeRaw): GLTFNodeNode;
      readonly raw: GLTFNodesNodeRaw;
      get nodeName(): string;
      res: GLTFNodesLoaded;
      preload(prerequisites: GLTFNodePrerequisites): Promise<GLTFNodesLoaded>;
      getLoadedResource(): GLTFNodesLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/scenes/GLTFSceneNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFNodesLoaded, GLTFTreeNode } from "XrFrame/loader/glTF/scenes/GLTFNodesNode";
  export interface GLTFSceneNodeRaw {
      nodes?: Array<number>;
      name?: string;
  }
  export type GLTFSceneLoaded = Array<GLTFTreeNode>;
  export default class GLTFSceneNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFSceneNodeRaw;
      build(): void;
      preload(prerequisites: [nodes: GLTFNodesLoaded]): Promise<GLTFSceneLoaded>;
      getLoadedResource(): GLTFSceneLoaded;
  }
}

declare module 'XrFrame/loader/glTF/scenes/GLTFScenesNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFNodesLoaded } from "XrFrame/loader/glTF/scenes/GLTFNodesNode";
  import GLTFSceneNode, { GLTFSceneLoaded, GLTFSceneNodeRaw } from "XrFrame/loader/glTF/scenes/GLTFSceneNode";
  type ChildNode = GLTFSceneNode;
  export type GLTFScenesNodeRaw = Array<GLTFScenesNodeRaw>;
  export type GLTFScenesLoaded = Array<GLTFSceneLoaded>;
  export default class GLTFScenesNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFSceneNodeRaw): GLTFSceneNode;
      readonly raw: GLTFScenesNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [nodes: GLTFNodesLoaded]) => Promise<GLTFScenesLoaded>;
      getLoadedResource(): GLTFScenesLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/skins/GLTFSkinsNode' {
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import GLTFSkinNode, { GLTFSkinLoaded, GLTFSkinNodeRaw } from "XrFrame/loader/glTF/skins/GLTFSkinNode";
  type ChildNode = GLTFSkinNode;
  export type GLTFSkinsNodeRaw = Array<GLTFSkinsNodeRaw>;
  export type GLTFSkinsLoaded = Array<GLTFSkinLoaded>;
  export default class GLTFSkinsNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFSkinNodeRaw): GLTFSkinNode;
      readonly raw: GLTFSkinsNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [accessors: GLTFAccessorsLoaded]) => Promise<GLTFSkinsLoaded>;
      getLoadedResource(): GLTFSkinsLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/textures/GLTFImagesNode' {
  import { GLTFBufferViewsLoaded } from "XrFrame/loader/glTF/buffers/GLTFBufferViewsNode";
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import GLTFImageNode, { GLTFImageLoaded, GLTFImageNodeRaw } from "XrFrame/loader/glTF/textures/GLTFImageNode";
  type ChildNode = GLTFImageNode;
  export type GLTFImagesNodeRaw = Array<GLTFImagesNodeRaw>;
  export type GLTFImagesLoaded = Array<GLTFImageLoaded>;
  export default class GLTFImagesNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFImageNodeRaw): GLTFImageNode;
      readonly raw: GLTFImagesNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [bufferViews: GLTFBufferViewsLoaded]) => Promise<GLTFImagesLoaded>;
      getLoadedResource(): GLTFImagesLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/textures/GLTFSamplersNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import GLTFSamplerNode, { GLTFSamplerLoaded, GLTFSamplerNodeRaw } from "XrFrame/loader/glTF/textures/GLTFSamplerNode";
  type ChildNode = GLTFSamplerNode;
  export type GLTFSamplersNodeRaw = Array<GLTFSamplersNodeRaw>;
  export type GLTFSamplersLoaded = Array<GLTFSamplerLoaded>;
  export default class GLTFSamplersNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFSamplerNodeRaw): GLTFSamplerNode;
      readonly raw: GLTFSamplersNodeRaw;
      get nodeName(): string;
      preload: () => Promise<GLTFSamplersLoaded>;
      getLoadedResource(): GLTFSamplersLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/textures/GLTFTexturesNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFImagesLoaded } from "XrFrame/loader/glTF/textures/GLTFImagesNode";
  import { GLTFSamplersLoaded } from "XrFrame/loader/glTF/textures/GLTFSamplersNode";
  import GLTFTextureNode, { GLTFTextureLoaded, GLTFTextureNodeRaw } from "XrFrame/loader/glTF/textures/GLTFTextureNode";
  type ChildNode = GLTFTextureNode;
  export type GLTFTexturesNodeRaw = Array<GLTFTexturesNodeRaw>;
  export type GLTFTexturesLoaded = Array<GLTFTextureLoaded>;
  export default class GLTFTexturesNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFTextureNodeRaw): GLTFTextureNode;
      readonly raw: GLTFTexturesNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [images: GLTFImagesLoaded, samplers: GLTFSamplersLoaded]) => Promise<GLTFTexturesLoaded>;
      getLoadedResource(): GLTFTexturesLoaded;
  }
  export {};
}

declare module 'XrFrame/kanata/lib/frontend/component/MeshRendererComponent' {
  /**
    * MeshRendererComponent.ts
    *
    *       * @Date    : 9/3/2020, 7:54:23 PM
    */
  import { EMeshRenderType } from 'XrFrame/kanata/lib/backend';
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  import Entity3D from 'XrFrame/kanata/lib/frontend/entity/Entity3D';
  import Entity2D from 'XrFrame/kanata/lib/frontend/entity/Entity2D';
  import UniformBlock from 'XrFrame/kanata/lib/frontend/resource/UniformBlock';
  import VertexBuffer from 'XrFrame/kanata/lib/frontend/resource/VertexBuffer';
  import IndexBuffer from 'XrFrame/kanata/lib/frontend/resource/IndexBuffer';
  import VertexData from 'XrFrame/kanata/lib/frontend/resource/VertexData';
  import IndexData from 'XrFrame/kanata/lib/frontend/resource/IndexData';
  import Material from 'XrFrame/kanata/lib/frontend/resource/Material';
  import SkinnedSkeletonComponent from 'XrFrame/kanata/lib/frontend/component/SkinnedSkeletonComponent';
  import CullingComponent from 'XrFrame/kanata/lib/frontend/component/CullingComponent';
  export default class MeshRendererComponent extends NativeObject {
      static OFFSETS: {
          dynamicBatch: number;
          skinHandle: number;
          castShadow: number;
          bindTarget: number;
          start: number;
          size: number;
          materialId: number;
          vertexBufferId: number;
          indexBufferId: number;
          startIndex: number;
          numIndices: number;
      };
      static CREATE_FAKE(entity: Entity3D | Entity2D, options: {
          meshCount: number;
          uniformBlock?: UniformBlock;
      }): FakeMeshRenderComponent;
      protected _uniforms: UniformBlock;
      get uniforms(): UniformBlock;
      get meshCount(): number;
      get castShadow(): boolean;
      set castShadow(value: boolean);
      get dynamicBatch(): boolean;
      set dynamicBatch(value: boolean);
      set skinSkeleton(sk: SkinnedSkeletonComponent);
      set bindTarget(target: Entity3D | Entity2D | null);
      get macros(): {
          [name: string]: string | number | boolean;
      };
      constructor(entity: Entity3D | Entity2D, options: {
          meshCount: number;
          uniformBlock: UniformBlock;
          renderType: EMeshRenderType;
          culling?: CullingComponent;
          macros?: {
              [name: string]: string | number | boolean;
          };
      });
      protected _createNativeObj(entity: Entity3D | Entity2D, options: {
          meshCount: number;
          uniformBlock: UniformBlock;
          renderType: EMeshRenderType;
          culling?: CullingComponent;
          macros?: {
              [name: string]: string | number | boolean;
          };
      }): import('XrFrame/kanata/lib/backend').IHandle & {
          setSharedDirty(): void;
      };
      changeMacros(macros?: {
          [name: string]: string | number | boolean;
      }): void;
      getStartIndex(index: number): number;
      setStartIndex(index: number, value: number): void;
      getNumIndices(index: number): number;
      setNumIndices(index: number, value: number): void;
      getVertexBuffer(index: number): VertexBuffer;
      setVertexBuffer(index: number, buffer: VertexBuffer): void;
      getIndexBuffer(index: number): IndexBuffer;
      setIndexBuffer(index: number, buffer: IndexBuffer): void;
      getVertexData(index: number): VertexData;
      setVertexData(index: number, buffer: VertexData): void;
      getIndexData(index: number): IndexData;
      setIndexData(index: number, buffer: IndexData): void;
      getMaterial(index: number): Material;
      setMaterial(index: number, material: Material | null): void;
      fastSet(vertexes: (VertexBuffer | VertexData)[], indexes: (VertexData | IndexBuffer)[], materials: Material[], startIndexes: number[], numIndices: number[]): void;
      setDirty(): void;
      copyStates(comp: MeshRendererComponent): void;
  }
  class FakeMeshRenderComponent extends MeshRendererComponent {
      protected _createNativeObj(entity: Entity3D | Entity2D, options: {
          meshCount: number;
          uniformBlock: UniformBlock;
          renderType: EMeshRenderType;
          culling: CullingComponent;
      }): {
          id: number;
          data: ArrayBuffer;
          setSharedDirty: () => void;
      };
      get uniforms(): UniformBlock;
      set uniforms(uniforms: UniformBlock);
  }
  export {};
}

declare module 'XrFrame/kanata/lib/frontend/resource/renderEnv' {
  /**
    * renderEnv.ts
    *
    *       * @Date    : 1/18/2021, 3:53:26 PM
    */
  import { EMeshRenderType, EUniformType, IFeatures, IRenderEnv, TCompressTexture } from 'XrFrame/kanata/lib/backend';
  import View from 'XrFrame/kanata/lib/frontend/resource/View';
  import Effect from 'XrFrame/kanata/lib/frontend/resource/Effect';
  import RenderPass from 'XrFrame/kanata/lib/frontend/resource/RenderPass';
  import UniformBlock from 'XrFrame/kanata/lib/frontend/resource/UniformBlock';
  export class RenderEnv {
      id: number;
      __handle: IRenderEnv;
      get version(): number[];
      get backendType(): string;
      get canvasWidth(): number;
      set canvasWidth(value: number);
      get canvasHeight(): number;
      set canvasHeight(value: number);
      get supportCompressTextures(): TCompressTexture[];
      get features(): IFeatures;
      get commitVersion(): string;
      get usePuppetSokol(): boolean;
      get useInstance(): boolean;
      set useInstance(value: boolean);
      get neverTranspose(): boolean;
      set neverTranspose(value: boolean);
      get isWrongWrapMapping(): boolean;
      get isNotWrongEffectSort(): boolean;
      get isGoodInstance(): boolean;
      constructor();
      supportCompressTexture(type: TCompressTexture): boolean;
      registerFallbackEffect(lightMode: string, effect?: Effect): void;
      beginFrame(): void;
      endFrame(): void;
      clearView(view: View): void;
      setEnvUniform(index: number, uniforms: UniformBlock): void;
      setRenderPass(renderPass: RenderPass): void;
      changeMacros(macros: {
          [name: string]: string | number | boolean;
      }): void;
      getMacro(key: string): string | number | boolean;
      changeVirtualMacros(macros: {
          [name: string]: boolean;
      }): void;
      getVirtualMacro(key: string): boolean;
      setInternalInstanceInfo(type: EMeshRenderType, info: {
          uniformKey: string;
          attributeName: string;
          type: EUniformType;
      }[], ignored: string[]): void;
  }
  const renderEnv: RenderEnv;
  export default renderEnv;
}

declare module 'XrFrame/kanata/lib/frontend/component/AnimatorComponent' {
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  import Entity3D from 'XrFrame/kanata/lib/frontend/entity/Entity3D';
  import AnimationClipModel from 'XrFrame/kanata/lib/frontend/resource/AnimationClipModel';
  export default class AnimatorComponent extends NativeObject {
      static UPDATE_ANIMATORS(animators: AnimatorComponent[], size: number): void;
      animationClipModels: AnimationClipModel[];
      constructor();
      bindAnimations(animationClipModels: AnimationClipModel[], entities: (Entity3D | null)[][], rootEntity?: Entity3D): void;
      setClipParams(index: number, frameIndex: number, blendWeight: number): void;
      getAnimationClipCount(): number;
      getNodeCount(): number;
      getAnimationParameter(index: number): {
          animationClipId: number;
          frameIndex: number;
          percentage: number;
      };
      getEntity(index: number): number;
  }
}

declare module 'XrFrame/kanata/lib/frontend/component/CameraComponent' {
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  import Entity3D from 'XrFrame/kanata/lib/frontend/entity/Entity3D';
  import Entity2D from 'XrFrame/kanata/lib/frontend/entity/Entity2D';
  import View from 'XrFrame/kanata/lib/frontend/resource/View';
  import ScalableList from 'XrFrame/kanata/lib/frontend/resource/ScalableList';
  export default class CameraComponent extends NativeObject {
      static OFFSETS: {
          size: number;
          view: number;
          depth: number;
          active: number;
          fov: number;
          aspect: number;
          near: number;
          far: number;
          up: number;
          eye: number;
          orthoSize: number;
          isProjection: number;
          cullingMask: number;
          canvasSizeY: number;
          targetTransform: number;
          viewMatrix: number;
          projectionMatrix: number;
          viewMatrixInverse: number;
          viewMatrix2D: number;
          projectionMatrix2D: number;
          viewMatrixInverse2D: number;
          manualMatrix: number;
          layerCullDistances: number;
      };
      get active(): boolean;
      set active(value: boolean);
      get depth(): number;
      set depth(value: number);
      get isProjection(): boolean;
      set isProjection(value: boolean);
      get view(): View;
      set view(value: View);
      get fov(): number;
      set fov(value: number);
      get aspect(): number;
      set aspect(value: number);
      get near(): number;
      set near(value: number);
      get far(): number;
      set far(value: number);
      get orthoSize(): number;
      set orthoSize(value: number);
      get cullingMask(): number;
      set cullingMask(value: number);
      get layerCullDistances(): Float32Array | number[];
      set layerCullDistances(value: Float32Array | number[]);
      get canvasSizeY(): number;
      set canvasSizeY(value: number);
      set targetTransform(entityId: number);
      get targetTransform(): number;
      set up(vec3: Float32Array);
      constructor(entity: Entity2D | Entity3D, isUI?: boolean);
      cull(cullResult: ScalableList, lightMode: string): void;
      draw(renderList: ScalableList, lightMode: string): void;
      changeProjectionMatrix(manual: boolean, mat4?: Float32Array): void;
      changeViewMatrix(manual: boolean, mat4?: Float32Array): void;
      updateMatrix(): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/component/LightCameraComponent' {
  /**
    * CameraLightComponent.ts
    *
    *       * @Date    : 9/3/2020, 7:54:13 PM
   */
  import { EShadowMode } from 'XrFrame/kanata/lib/backend';
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  import View from 'XrFrame/kanata/lib/frontend/resource/View';
  import UniformBlock from 'XrFrame/kanata/lib/frontend/resource/UniformBlock';
  import ScalableList from 'XrFrame/kanata/lib/frontend/resource/ScalableList';
  import CameraComponent from 'XrFrame/kanata/lib/frontend/component/CameraComponent';
  export default class LightCameraComponent extends NativeObject {
      static OFFSETS: {
          size: number;
          view: number;
          depth: number;
          active: number;
          shadowDistance: number;
          shadowMode: number;
          shadowFilterMode: number;
          lightDir: number;
          bounds: number;
          lightSpaceMatrices: number;
      };
      get view(): View;
      set view(value: View);
      get active(): boolean;
      set active(value: boolean);
      get depth(): number;
      set depth(value: number);
      get shadowDistance(): number;
      set shadowDistance(value: number);
      get shadowFilterMode(): number;
      set shadowFilterMode(value: number);
      get shadowMode(): EShadowMode;
      set shadowMode(value: EShadowMode);
      get lightSpaceMatrices(): Float32Array;
      constructor();
      draw(camera: CameraComponent, renderList: ScalableList, lightMode: string): void;
      prepareUniforms(uniforms: UniformBlock): void;
      setLightDir(x: number, y: number, z: number): void;
      setCascadedSplits(s0: number, s1: number, s2: number): void;
      protected _updateBounds(auto: boolean): void;
      protected _adjustSplitPercents(index: number, percent: number): number;
      protected _setSplitPercents(index: number, percent: number): number;
  }
}

declare module 'XrFrame/kanata/lib/frontend/component/CullingComponent' {
  import Entity3D from 'XrFrame/kanata/lib/frontend/entity/Entity3D';
  import Entity2D from 'XrFrame/kanata/lib/frontend/entity/Entity2D';
  import PoolObject from 'XrFrame/kanata/lib/frontend/pool/PoolObject';
  import PoolManager from 'XrFrame/kanata/lib/frontend/pool/PoolManager';
  export default class CullingComponent extends PoolObject {
      static POLL_MANAGER: PoolManager;
      constructor(entity: Entity2D | Entity3D);
      getActive(): boolean;
      setActive(val: boolean): void;
      getLayer(): number;
      setLayer(val: number): void;
      getBoundingBallCenter(): Float32Array;
      setBoundingBallCenter(val: Float32Array, offset?: number): void;
      getBoundingBallRadius(): number;
      setBoundingBallRadius(val: number): void;
      bindEntity(entity: Entity2D | Entity3D): void;
      destroy(): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/component/SkinnedSkeletonComponent' {
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  import SkeletonBoneInverseModel from 'XrFrame/kanata/lib/frontend/resource/SkeletonBoneInverseModel';
  import Entity3D from 'XrFrame/kanata/lib/frontend/entity/Entity3D';
  export default class SkinnedSkeletonComponent extends NativeObject {
      static UPDATE_MATS(comps: SkinnedSkeletonComponent[], size: number): void;
      get boneNum(): number;
      get boneInverseModel(): SkeletonBoneInverseModel;
      get boneOffsetMatrices(): Float32Array;
      constructor(boneNum: number, flag: number);
      setBoneMatrix(boneInverseModel: SkeletonBoneInverseModel, boneIndices: number[], boneEntities: Entity3D[]): void;
      getBoneNum(): number;
      getBoneOffsetMatrices(): Float32Array;
  }
}

declare module 'XrFrame/kanata/lib/frontend/component/DynamicBonesComponent' {
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  import Entity3D from 'XrFrame/kanata/lib/frontend/entity/Entity3D';
  export default class DynamicBonesComponent extends NativeObject {
      static OFFSETS: {
          stiffness: number;
          elasticity: number;
          damping: number;
      };
      get stiffness(): number;
      set stiffness(v: number);
      get damping(): number;
      set damping(v: number);
      get elasticity(): number;
      set elasticity(v: number);
      constructor(rootNode?: Entity3D);
      preUpdate(): void;
      update(dt: number, rootMotion?: {
          x: number;
          y: number;
          z: number;
      }): void;
      rebuild(): void;
      resetRoot(root?: Entity3D): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/entity/Entity2D' {
  import PoolObject from 'XrFrame/kanata/lib/frontend/pool/PoolObject';
  import PoolManager from 'XrFrame/kanata/lib/frontend/pool/PoolManager';
  export default class Entity2D extends PoolObject {
      static POLL_MANAGER: PoolManager;
      static OFFSETS: {
          size: number;
          rotation: number;
          position: number;
          scale: number;
          worldMatrix: number;
      };
      localPositionOffset: number;
      localRotationOffset: number;
      localScaleOffset: number;
      worldMatrixOffset: number;
      constructor();
      addChild(child: Entity2D): void;
      addChildAtIndex(child: Entity2D, index: number): void;
      removeFromParent(): void;
      setAsRoot(): void;
      destroy(): void;
      clear(): void;
      setLocalMatrixDirty(): void;
      set active(val: boolean);
  }
}

declare module 'XrFrame/kanata/lib/frontend/entity/Entity3D' {
  import PoolObject from 'XrFrame/kanata/lib/frontend/pool/PoolObject';
  import PoolManager from 'XrFrame/kanata/lib/frontend/pool/PoolManager';
  export default class Entity3D extends PoolObject {
      static POLL_MANAGER: PoolManager;
      static OFFSETS: {
          size: number;
          dfRotationType: number;
          rotationType: number;
          rotation: number;
          position: number;
          scale: number;
          worldOffset: number;
          worldMatrix: number;
      };
      static CREATE_TREE(length: number, buffer: ArrayBuffer, out: Array<any>, calculateWordMatrix?: boolean): boolean;
      localRotationTypeOffset: number;
      localQuaternionOffset: number;
      localPositionOffset: number;
      localScaleOffset: number;
      worldMatrixOffset: number;
      constructor();
      setUsingEuler(on: boolean): void;
      isUsingEuler(): boolean;
      addChild(child: Entity3D): void;
      addChildAtIndex(child: Entity3D, index: number): void;
      removeFromParent(): void;
      setAsRoot(): void;
      destroy(): void;
      /**
        * 如果只调用entityClear指令，那么Kanata就无法回收根节点下面的子节点了。
        * 目前Kanata的frontend没有父子关系信息只能这么做了。
        * 这个方法目前只能减少eventBridge的指令量，避免在大规模节点销毁的时候频繁触发eventBridge的溢出提交。
        * @param entities
        * @param length
        */
      clear(entities: Entity3D[], length: number): void;
      setLocalMatrixDirty(): void;
      set active(val: boolean);
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/AnimationClipModel' {
  import DataModel from 'XrFrame/kanata/lib/frontend/resource/DataModel';
  export default class AnimationClipModel extends DataModel {
      setAnimationClip(ab: ArrayBuffer): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/AnimationClipBinding' {
  /**
    * AnimationClipBinding.ts
    *
    *       */
  import Entity3D from 'XrFrame/kanata/lib/frontend/entity/Entity3D';
  import AnimationClipModel from 'XrFrame/kanata/lib/frontend/resource/AnimationClipModel';
  import { EUseDefaultAddedAction } from 'XrFrame/kanata/lib/backend';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  import { INativeWorker } from 'XrFrame/kanata/lib/backend/native/worker';
  export default class AnimationClipBinding extends PureResource {
      __handle: INativeWorker.IAnimationClipBinding;
      constructor(clipArray: AnimationClipModel[], clipArrayOffset: number, clipArrayLength: number, entityArray: Array<number | Entity3D | null>, entityArrayOffset: number, entityArrayLength: number, useDefaultAddedNodesAction: EUseDefaultAddedAction, rootEntity: Entity3D);
      rebind(clipArray: AnimationClipModel[], clipArrayOffset: number, clipArrayLength: number, entityArray: Array<number | Entity3D | null>, entityArrayOffset: number, entityArrayLength: number, removeAction: number, retainedAction: number, addedAction: number, rootEntity: Entity3D): boolean;
      update(clipArray: AnimationClipModel[], clipArrayOffset: number, clipArrayLength: number, entityArray: Array<number | Entity3D | null>, entityArrayOffset: number, entityArrayLength: number, removeAction: number, retainedAction: number, addedAction: number): boolean;
      writeDefaultValues(): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/AnimatorControllerModel' {
  /**
    * AnimatorControllerModel.ts
    *
    *       */
  import AnimatorControllerStateModel from 'XrFrame/kanata/lib/frontend/resource/AnimatorControllerStateModel';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  import AnimationClipBinding from 'XrFrame/kanata/lib/frontend/resource/AnimationClipBinding';
  export default class AnimatorControllerModel extends PureResource {
      layerCount: number;
      static UPDATE_ANIMATOR_CONTROLLERS(animatorControllers: AnimatorControllerModel[], size: number): void;
      constructor(layerCount: number);
      setAnimationClipBinding(binding: null | AnimationClipBinding): void;
      setLayerBlendType(layerIndex: number, blendType: number): void;
      setLayerWeight(layerIndex: number, weight: number): void;
      setLayerBlend(layerIndex: number, blend: null | AnimatorControllerStateModel): void;
      setLayerMask(layerIndex: number, mask: {
          buffer: null | ArrayBuffer;
          offset: number;
          length: number;
      }): void;
      update(): void;
      destroy(): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/AnimatorControllerStateModel' {
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  import AnimationClipModel from 'XrFrame/kanata/lib/frontend/resource/AnimationClipModel';
  export default class AnimatorControllerStateModel extends PureResource {
      readonly count: number;
      get weight(): number;
      set weight(weight: number);
      get useDefault(): number;
      set useDefault(useDefault: number);
      constructor(count: number);
      resetBlendInfo(): void;
      setNextState(state: AnimatorControllerStateModel | null): void;
      setBlendInfo(clip: AnimationClipModel, frameIndex: number, blendWeight: number, additiveReferenceClip: null | AnimationClipModel, additiveFrameIndex: number): boolean;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/DataBuffer' {
  /**
    * DataBuffer.ts
    *
    *       * @Date    : 9/4/2020, 1:21:59 PM
    */
  import { IHandle } from 'XrFrame/kanata/lib/backend';
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  export default class DataBuffer extends NativeObject {
      constructor(nativeObj: IHandle);
      get dataLength(): number;
      get byteOffset(): number;
      get arrayBuffer(): ArrayBuffer;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/DataModel' {
  /**
    * DataModel.ts
    *
    *       * @Date    : 9/4/2020, 1:18:13 PM
    */
  import { EDataModelType } from 'XrFrame/kanata/lib/backend';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  export default class DataModel extends PureResource {
      protected _createNativeModel(type: EDataModelType, buffer: ArrayBuffer): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/Effect' {
  /**
    * Effect.ts
    *
    *       * @Date    : 9/9/2020, 5:49:54 PM
    */
  import { EBlendFactor, EBlendEquation, ECullMode, ECompareFunc, EPrimitiveType, EStencilOp } from 'XrFrame/kanata/lib/backend';
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  export default class Effect extends NativeObject {
      static OFFSETS: {
          size: number;
          useMaterialStates: number;
          fstencil: number;
          bstencil: number;
          blendRGBA: number;
          colorDepth: number;
          state: number;
      };
      get passCount(): number;
      constructor(name: string, passCount: number, keyIndexMap: string[], passes: {
          lightMode: string;
          variants?: {
              [key: number]: number;
          };
          macros?: {
              [key: string]: number;
          };
          shaders?: number[];
      }[], shaders: string[], variants: number[][], useRuntimeMacros?: boolean);
      warmUp(): any;
      getBlendOn(pass: number): boolean;
      setBlendOn(pass: number, value: boolean): void;
      getBlendSrc(pass: number): EBlendFactor;
      setBlendSrc(pass: number, value: EBlendFactor): void;
      getBlendDst(pass: number): EBlendFactor;
      setBlendDst(pass: number, value: EBlendFactor): void;
      getBlendSrcRGB(pass: number): EBlendFactor;
      setBlendSrcRGB(pass: number, value: EBlendFactor): void;
      getBlendSrcAlpha(pass: number): EBlendFactor;
      setBlendSrcAlpha(pass: number, value: EBlendFactor): void;
      getBlendDstRGB(pass: number): EBlendFactor;
      setBlendDstRGB(pass: number, value: EBlendFactor): void;
      getBlendDstAlpha(pass: number): EBlendFactor;
      setBlendDstAlpha(pass: number, value: EBlendFactor): void;
      getBlendFunc(pass: number): EBlendEquation;
      setBlendFunc(pass: number, value: EBlendEquation): void;
      getDepthTestOn(pass: number): boolean;
      setDepthTestOn(pass: number, value: boolean): void;
      getDepthTestComp(pass: number): ECompareFunc;
      setDepthTestComp(pass: number, value: ECompareFunc): void;
      getDepthWrite(pass: number): boolean;
      setDepthWrite(pass: number, value: boolean): void;
      getCullFace(pass: number): ECullMode;
      setCullFace(pass: number, value: ECullMode): void;
      getCullOn(pass: number): boolean;
      setCullOn(pass: number, value: boolean): void;
      getPrimitiveType(pass: number): EPrimitiveType;
      setPrimitiveType(pass: number, value: EPrimitiveType): void;
      getStencilTestOn(pass: number): boolean;
      setStencilTestOn(pass: number, value: boolean): void;
      getStencilComp(pass: number): ECompareFunc;
      setStencilComp(pass: number, value: ECompareFunc): void;
      getStencilPass(pass: number): EStencilOp;
      setStencilPass(pass: number, value: EStencilOp): void;
      getStencilFail(pass: number): EStencilOp;
      setStencilFail(pass: number, value: EStencilOp): void;
      getStencilZFail(pass: number): EStencilOp;
      setStencilZFail(pass: number, value: EStencilOp): void;
      getStencilWriteMask(pass: number): number;
      setStencilWriteMask(pass: number, value: number): void;
      getStencilReadMask(pass: number): number;
      setStencilReadMask(pass: number, value: number): void;
      getStencilRef(pass: number): number;
      setStencilRef(pass: number, value: number): void;
      getUseMaterialStates(pass: number): boolean;
      setUseMaterialStates(pass: number, value: boolean): void;
      getUseMaterialStateBlendOn(pass: number): boolean;
      setUseMaterialStateBlendOn(pass: number, value: boolean): void;
      getUseMaterialStateBlendSrcRGB(pass: number): boolean;
      setUseMaterialStateBlendSrcRGB(pass: number, value: boolean): void;
      getUseMaterialStateBlendSrcAlpha(pass: number): boolean;
      setUseMaterialStateBlendSrcAlpha(pass: number, value: boolean): void;
      getUseMaterialStateBlendDstRGB(pass: number): boolean;
      setUseMaterialStateBlendDstRGB(pass: number, value: boolean): void;
      getUseMaterialStateBlendDstAlpha(pass: number): boolean;
      setUseMaterialStateBlendDstAlpha(pass: number, value: boolean): void;
      getUseMaterialStateBlendFunc(pass: number): boolean;
      setUseMaterialStateBlendFunc(pass: number, value: boolean): void;
      getUseMaterialStateDepthTestOn(pass: number): boolean;
      setUseMaterialStateDepthTestOn(pass: number, value: boolean): void;
      getUseMaterialStateDepthTestComp(pass: number): boolean;
      setUseMaterialStateDepthTestComp(pass: number, value: boolean): void;
      getUseMaterialStateDepthWrite(pass: number): boolean;
      setUseMaterialStateDepthWrite(pass: number, value: boolean): void;
      getUseMaterialStateCullOn(pass: number): boolean;
      setUseMaterialStateCullOn(pass: number, value: boolean): void;
      getUseMaterialStateCullFace(pass: number): boolean;
      setUseMaterialStateCullFace(pass: number, value: boolean): void;
      getUseMaterialStatePrimitiveType(pass: number): boolean;
      setUseMaterialStatePrimitiveType(pass: number, value: boolean): void;
      getUseMaterialStateStencilTestOn(pass: number): boolean;
      setUseMaterialStateStencilTestOn(pass: number, value: boolean): void;
      getUseMaterialStateStencilTestComp(pass: number): boolean;
      setUseMaterialStateStencilTestComp(pass: number, value: boolean): void;
      getUseMaterialStateStencilTestPass(pass: number): boolean;
      setUseMaterialStateStencilTestPass(pass: number, value: boolean): void;
      getUseMaterialStateStencilTestFail(pass: number): boolean;
      setUseMaterialStateStencilTestFail(pass: number, value: boolean): void;
      getUseMaterialStateStencilTestZFail(pass: number): boolean;
      setUseMaterialStateStencilTestZFail(pass: number, value: boolean): void;
      showDebugInfo(): string;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/Material' {
  /**
    * Material.ts
    *
    *       * @Date    : 9/4/2020, 6:41:13 PM
    */
  import { EBlendFactor, EBlendEquation, ECompareFunc, ECullMode, EStencilOp, EPrimitiveType } from 'XrFrame/kanata/lib/backend';
  import UniformBlock from 'XrFrame/kanata/lib/frontend/resource/UniformBlock';
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  import Effect from 'XrFrame/kanata/lib/frontend/resource/Effect';
  export default class Material extends NativeObject {
      static OFFSETS: {
          size: number;
          renderQueue: number;
          effect: number;
          uniformBlock: number;
          fstencilMask: number;
          bstencilMask: number;
          blendRGBAMask: number;
          colorDepthMask: number;
          stateMask: number;
          fstencil: number;
          bstencil: number;
          blendRGBA: number;
          colorDepth: number;
          state: number;
          useInstance: number;
      };
      protected _uniforms: UniformBlock;
      protected _effect: Effect;
      protected _macros: {
          [name: string]: string | number | boolean;
      };
      get effect(): Effect;
      set effect(value: Effect);
      get uniforms(): UniformBlock;
      set uniforms(value: UniformBlock);
      get renderQueue(): number;
      set renderQueue(value: number);
      get useInstance(): boolean;
      set useInstance(value: boolean);
      get blendOn(): boolean;
      set blendOn(value: boolean);
      get blendSrcRGB(): EBlendFactor;
      set blendSrcRGB(value: EBlendFactor);
      get blendSrcRGBChanged(): boolean;
      get blendSrcAlpha(): EBlendFactor;
      set blendSrcAlpha(value: EBlendFactor);
      set blendSrc(value: EBlendFactor);
      get blendDstRGB(): EBlendFactor;
      set blendDstRGB(value: EBlendFactor);
      get blendDstRGBChanged(): boolean;
      get blendDstAlpha(): EBlendFactor;
      set blendDstAlpha(value: EBlendFactor);
      set blendDst(value: EBlendFactor);
      get blendFunc(): EBlendEquation;
      set blendFunc(value: EBlendEquation);
      get depthTestOn(): boolean;
      set depthTestOn(value: boolean);
      get depthTestComp(): ECompareFunc;
      set depthTestComp(value: ECompareFunc);
      get depthWrite(): boolean;
      set depthWrite(value: boolean);
      get cullFace(): ECullMode;
      set cullFace(value: ECullMode);
      get cullOn(): boolean;
      set cullOn(value: boolean);
      get primitiveType(): EPrimitiveType;
      set primitiveType(value: EPrimitiveType);
      get stencilTestOn(): boolean;
      set stencilTestOn(value: boolean);
      get stencilComp(): ECompareFunc;
      set stencilComp(value: ECompareFunc);
      get stencilPass(): EStencilOp;
      set stencilPass(value: EStencilOp);
      get stencilFail(): EStencilOp;
      set stencilFail(value: EStencilOp);
      get stencilZFail(): EStencilOp;
      set stencilZFail(value: EStencilOp);
      get stencilWriteMask(): number;
      set stencilWriteMask(value: number);
      get stencilReadMask(): number;
      set stencilReadMask(value: number);
      get stencilRef(): number;
      set stencilRef(value: number);
      get blendOnMask(): boolean;
      set blendOnMask(value: boolean);
      get blendSrcRGBMask(): boolean;
      set blendSrcRGBMask(value: boolean);
      get blendSrcAlphaMask(): boolean;
      set blendSrcAlphaMask(value: boolean);
      set blendSrcMask(value: boolean);
      get blendDstRGBMask(): boolean;
      set blendDstRGBMask(value: boolean);
      get blendDstAlphaMask(): boolean;
      set blendDstAlphaMask(value: boolean);
      set blendDstMask(value: boolean);
      get blendFuncMask(): boolean;
      set blendFuncMask(value: boolean);
      get depthTestOnMask(): boolean;
      set depthTestOnMask(value: boolean);
      get depthTestCompMask(): boolean;
      set depthTestCompMask(value: boolean);
      get depthWriteMask(): boolean;
      set depthWriteMask(value: boolean);
      get cullFaceMask(): boolean;
      set cullFaceMask(value: boolean);
      get cullOnMask(): boolean;
      set cullOnMask(value: boolean);
      get primitiveTypeMask(): boolean;
      set primitiveTypeMask(value: boolean);
      get stencilTestOnMask(): boolean;
      set stencilTestOnMask(value: boolean);
      get stencilCompMask(): boolean;
      set stencilCompMask(value: boolean);
      get stencilPassMask(): boolean;
      set stencilPassMask(value: boolean);
      get stencilFailMask(): boolean;
      set stencilFailMask(value: boolean);
      get stencilZFailMask(): boolean;
      set stencilZFailMask(value: boolean);
      get stencilWriteMaskMask(): boolean;
      set stencilWriteMaskMask(value: boolean);
      get stencilReadMaskMask(): boolean;
      set stencilReadMaskMask(value: boolean);
      get stencilRefMask(): boolean;
      set stencilRefMask(value: boolean);
      constructor(macros?: {
          [name: string]: string | number | boolean;
      }, effect?: Effect, uniformBlock?: UniformBlock);
      protected _createNativeMat(macros?: {
          [name: string]: string | number | boolean;
      }, effect?: Effect, uniformBlock?: UniformBlock): void;
      changeMacros(macros?: {
          [name: string]: string | number | boolean;
      }): void;
      getMacro(key: string): string | number | boolean;
      clone(uniforms?: UniformBlock): Material;
      showDebugInfo(): string;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/RenderPass' {
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  import Texture from 'XrFrame/kanata/lib/frontend/resource/Texture';
  export interface IRenderPassOptions {
      colors: {
          texture: Texture;
          slice?: number;
          level?: number;
      }[];
      depth: {
          texture: Texture;
          slice?: number;
          level?: number;
      };
      stencil?: {
          texture: Texture;
          slice?: number;
          level?: number;
      };
  }
  export default class RenderPass extends PureResource {
      static SCREEN_RENDER_PASS: RenderPass;
      constructor(options: IRenderPassOptions);
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/SkeletonBoneInverseModel' {
  import DataModel from 'XrFrame/kanata/lib/frontend/resource/DataModel';
  export default class SkeletonBoneInverseModel extends DataModel {
      boneNum: number;
      setBoneInverseMatrix(matrices: Float32Array): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/Texture' {
  /**
    * Texture.ts
    *
    *       * @Date    : 9/4/2020, 2:35:42 PM
    */
  import { ETextureFormat, ETextureType, EWrapMode, EFilterMode, TTextureSource } from 'XrFrame/kanata/lib/backend';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  export interface ITextureOptions {
      width?: number;
      height?: number;
      isWriteOnly?: boolean;
      isRenderTarget?: boolean;
      canvas?: HTMLCanvasElement;
      source?: TTextureSource[];
      offsets?: Uint32Array;
      type?: ETextureType;
      slices?: number;
      mips?: number;
      pixelFormat?: ETextureFormat;
      minFilter?: EFilterMode;
      magFilter?: EFilterMode;
      generateMipmaps?: boolean;
      wrapU?: EWrapMode;
      wrapV?: EWrapMode;
      wrapW?: EWrapMode;
      anisoLevel?: number;
      sampleCount?: number;
  }
  export default class Texture extends PureResource {
      get type(): ETextureType;
      get width(): number;
      get height(): number;
      get slice(): number;
      get mips(): number;
      get pixelFormat(): ETextureFormat;
      get wrapU(): EWrapMode;
      set wrapU(value: EWrapMode);
      get wrapV(): EWrapMode;
      set wrapV(value: EWrapMode);
      get wrapW(): EWrapMode;
      set wrapW(value: EWrapMode);
      get magFilter(): EFilterMode;
      set magFilter(value: EFilterMode);
      get minFilter(): EFilterMode;
      set minFilter(value: EFilterMode);
      get anisoLevel(): number;
      set anisoLevel(value: number);
      get sampleCount(): number;
      set sampleCount(value: number);
      get generateMipmaps(): boolean;
      set generateMipmaps(value: boolean);
      get isRenderTarget(): boolean;
      set isRenderTarget(value: boolean);
      constructor(options: ITextureOptions);
      update(options: {
          level?: number;
          slice?: number;
          xoffset?: number;
          yoffset?: number;
          zoffset?: number;
          width?: number;
          height?: number;
          buffer: TTextureSource;
      }): void;
      showDebugInfo(): string;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/UniformBlock' {
  /**
      * UniformBlock.ts
      *
      *         * @Date    : 9/4/2020, 2:34:36 PM
      */
  import { IHandle } from 'XrFrame/kanata/lib/backend';
  import UniformDescriptor from 'XrFrame/kanata/lib/frontend/resource/UniformDescriptor';
  import Texture from 'XrFrame/kanata/lib/frontend/resource/Texture';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  /**
      * 存储Uniform的一个区块。
      */
  export default class UniformBlock extends PureResource {
          /**
              * @internal
              */
          static CREATE_FAKE(descriptor: UniformDescriptor): FakeUniformBlock;
          /**
              * @internal
              */
          /**
              * 描述符。
              */
          get descriptor(): UniformDescriptor;
          /**
              * @internal
              */
          get textures(): {
                  [name: string]: Texture;
          };
          /**
              * @param descriptor 描述符。
              */
          constructor(descriptor: UniformDescriptor);
          protected _createNativeObj(descriptor: UniformDescriptor): IHandle;
          /**
              * 是否包含某个成员uniform。
              */
          hasKey(key: string): boolean;
          /**
              * 设置某个成员uniform。
              */
          setUniform(key: string, value: ArrayLike<number> | Texture | number): boolean;
          /**
              * 获取某个成员uniform。
              * 如果是返回`number`，则是纹理的id。
              */
          getUniform(key: string): Float32Array | number;
          /**
              * 获取某个成员uniform的texture实例。
              */
          getTexture(key: string): Texture;
          /**
              * @internal
              */
          /**
              * @internal
              */
          setAllData(data: Float32Array): void;
          /**
              * 科隆某个uniform。
              */
          clone(): UniformBlock;
          /**
              * 复制某个uniform。
              */
          copy(ub: UniformBlock): void;
          showDebugInfo(): string;
  }
  class FakeUniformBlock extends UniformBlock {
          protected _createNativeObj(descriptor: UniformDescriptor): {
                  id: number;
                  data: ArrayBuffer;
          };
  }
  export {};
}

declare module 'XrFrame/kanata/lib/frontend/resource/UniformDescriptor' {
  /**
      * UniformDescriptor.ts
      *
      *         * @Date    : 9/4/2020, 2:34:50 PM
   */
  import { EUniformType, IUniformDescriptorOptions } from 'XrFrame/kanata/lib/backend';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  /**
      * UniformBlock描述符。
      */
  export default class UniformDescriptor extends PureResource {
          /**
              * @internal
              */
          get layout(): {
                  [key: string]: [EUniformType, number, number, number, EUniformType, boolean];
          };
          /**
              * 以Float计的长度。
              */
          get size(): number;
          constructor(options: IUniformDescriptorOptions);
          /**
              * @internal
              */
          hasKey(key: string): boolean;
          /**
              * @internal
              */
          setUniform(key: string, value: ArrayLike<number> | number, f32: Float32Array, u32: Uint32Array): void;
          /**
              * @internal
              */
          getUniform(key: string, f32: Float32Array, u32: Uint32Array): Float32Array | number;
          /**
              * @internal
              */
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/IndexBuffer' {
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  export default class IndexBuffer extends PureResource {
      get byteSize(): number;
      constructor(buffer: ArrayBuffer | ArrayBufferView, is32bits?: boolean);
      update(buffer: ArrayBuffer | ArrayBufferView, offset: number): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/IndexData' {
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  export default class IndexData extends PureResource {
      get data(): ArrayBuffer;
      constructor(size: number);
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/VertexBuffer' {
  import VertexLayout from 'XrFrame/kanata/lib/frontend/resource/VertexLayout';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  export default class VertexBuffer extends PureResource {
      get byteSize(): number;
      get layout(): VertexLayout;
      constructor(buffer: ArrayBuffer | ArrayBufferView, layout: VertexLayout);
      update(buffer: ArrayBuffer | ArrayBufferView, offset: number): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/VertexData' {
  /**
    * VertexData.ts
    *
    *       * @Date    : 9/11/2020, 4:43:52 PM
    */
  import VertexDataDescriptor from 'XrFrame/kanata/lib/frontend/resource/VertexDataDescriptor';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  import VertexLayout from 'XrFrame/kanata/lib/frontend/resource/VertexLayout';
  export default class VertexData extends PureResource {
      get layout(): VertexLayout;
      get data(): ArrayBuffer;
      constructor(layout: VertexLayout, size: number, batchDesc: VertexDataDescriptor);
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/VertexLayout' {
  /**
      * VertexLayout.ts
      *
      *         * @Date    : 9/4/2020, 5:01:51 PM
      */
  import { IVertexLayoutOptions, EVertexLayoutUsage } from 'XrFrame/kanata/lib/backend';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  /**
      * 顶点布局描述。
      */
  export default class VertexLayout extends PureResource {
          /**
              * 顶点数据单位步长。
              */
          get stride(): number;
          constructor(options: IVertexLayoutOptions);
          /**
              * 获取某个属性的配置。
              */
          getConfigByName(name: string): {
                  name: string;
                  format: import('XrFrame/kanata/lib/backend').EVertexFormat;
                  offset: number;
                  usage: EVertexLayoutUsage;
          };
          /**
              * 获取某个用途的属性的配置。
              */
          getConfigByUsage(usage: EVertexLayoutUsage): {
                  name: string;
                  format: import('XrFrame/kanata/lib/backend').EVertexFormat;
                  offset: number;
                  usage: EVertexLayoutUsage;
          };
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/VertexDataDescriptor' {
  /**
    * VertexDataDescriptor.ts
    *
    *       * @Date    : 4/28/2021, 4:38:37 PM
    */
  import { IVertexDataDescriptorOptions } from 'XrFrame/kanata/lib/backend';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  export default class VertexDataDescriptor extends PureResource {
      constructor(options: IVertexDataDescriptorOptions);
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/View' {
  /**
      * View.ts
      *
      *         * @Date    : 9/4/2020, 6:43:18 PM
      */
  import { IRect, IViewAction } from 'XrFrame/kanata/lib/backend';
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  /**
      * 视图，用于控制清屏、视图区域等配置。
      */
  export default class View extends PureResource {
          constructor(options: {
                  passAction: IViewAction;
                  viewport: IRect;
                  scissor: IRect;
          });
  }
}

declare module 'XrFrame/kanata/lib/frontend/resource/ScalableList' {
  import PureResource from 'XrFrame/kanata/lib/frontend/shared/PureResource';
  export const SL_MAP: Set<ScalableList>;
  export function CHECK_SLS_RESIZE(): void;
  export function CLEAR_SLS(): void;
  /**
      * 可扩容列表，用于存储Mesh的剔除结果以及绘制数据的id。
      */
  export default class ScalableList extends PureResource {
          /**
              * 当前全部可用的大小。
              */
          get size(): number;
          /**
              * 存储的id集合。
              */
          get dataView(): Uint32Array;
          /**
              * 当前已用的大小，一般不需要自己设置。
              */
          get usedSize(): number;
          set usedSize(value: number);
          constructor(initSize: number);
          /**
              * 扩容，将会扩大两倍，一般不需要自己调用。
              *
              * @param deprecatedSize will always be current size, don't use it!
              */
          enlarge(deprecatedSize?: number): void;
          /**
              * 初始化到准备`add`的阶段。
              */
          begin(): void;
          /**
              * 添加一个数据。
              *
              * @param deprecatedEnlargeSize will always be current size, don't use it!
              */
          add(id: number, deprecatedEnlargeSize?: number): void;
          /**
              * 结束此次所有`add`的流程。
              */
          end(): void;
          /**
              * 清空整个列表。
              */
          reset(): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/shared/crossContext' {
  /**
    * 跨域信息通道，用于主域和子域之间的通信。
    */
  class CrossContext {
      constructor();
      postMessage(data: any): void;
      onMessage(callback: (data: any) => void): void;
      flush(): void;
  }
  let crossContext: CrossContext;
  export default crossContext;
}

declare module 'XrFrame/render-graph/RGNode' {
  /**
      * RGNode.ts
      *
      *         * @Date    : 1/13/2021, 8:29:55 PM
      */
  import { Kanata } from 'XrFrame/ext';
  import Camera from 'XrFrame/components/Camera';
  import { IRenderTarget } from 'XrFrame/components/RenderTexture';
  type RenderGraph = import('XrFrame/render-graph/RenderGraph').default;
  type RenderSystem = import('XrFrame/systems/RenderSystem').default;
  type Scene = import('XrFrame/core/Scene').default;
  export type TRGNodeAny = RGNode<any, any, any>;
  /**
      * RGNode支持传输的数据类型。
      * 可扩展。
      *
      * @category Render
      */
  export interface IRGData {
          /**
              * 空数据类型。
              */
          None: void;
          /**
              * 相机类型。
              */
          Camera: Camera;
          /**
              * 渲染目标类型。
              */
          RenderTarget: IRenderTarget;
          /**
              * Mesh列表，一般作为剔除节点的输出，作为渲染节点的输入。
              */
          MeshList: Kanata.ScalableList;
  }
  /**
      * RGNode支持的节点类型。
      */
  export enum ERGNodeType {
          Camera = "Camera",
          Clear = "Clear",
          Cull = "Cull",
          Render = "Render",
          Script = "Script"
  }
  /**
      * 渲染节点基类。
      */
  export default abstract class RGNode<TInputs extends {
          [key: string]: keyof IRGData;
  }, TOutput extends keyof IRGData, IOptions> {
          protected _parent: RenderGraph;
          protected _id: number;
          protected _name: string;
          protected _options: IOptions;
          /**
              * 节点类型。
              *
              * @internal
              */
          type: ERGNodeType;
          /**
              * 节点输入的数据类型。
              */
          abstract inputTypes: TInputs;
          /**
              * 节点输出的数据类型。
              */
          abstract outputType: TOutput;
          protected _output?: IRGData[TOutput];
          protected _inputs: {
                  [key: string]: TRGNodeAny;
          };
          protected _outputs: {
                  [id: number]: string;
          };
          /**
              * 节点的初始化配置参数。
              */
          get options(): IOptions;
          /**
              * 节点名字。
              */
          get name(): string;
          /**
              * 节点id。
              */
          get id(): number;
          /**
              * 获取当前游戏实例。
              */
          get scene(): Scene;
          /**
              * 获取当前节点输出。
              */
          get output(): IRGData[TOutput];
          /**
              * 不要直接调用，请使用`renderGraph.createNode`方法。
              */
          constructor(_parent: RenderGraph, _id: number, _name: string, _options: IOptions);
          /**
              * 节点初始化后的回调。
              */
          onInit(options: IOptions): void;
          /**
              * 获取某个节点的输入。
              */
          getInput<TKey extends keyof TInputs>(key: TKey): IRGData[TInputs[TKey]];
          /**
              * @internal
              */
          /**
              * @internal
              */
          /**
              * @internal
              */
          /**
              * @internal
              */
          /**
              * 重置节点状态，清空输入，一般用于可缓存的节点优化。
              */
          reset(): void;
          /**
              * 节点在真正被第一次使用时的回调。
              */
          onActive(context: RenderSystem, options: IOptions): void;
          /**
              * 节点在每帧执行时的回调。
              */
          onExecute(context: RenderSystem, options: IOptions): void;
          /**
              * 节点在被图中移除时的回调。
              */
          onDisable(context: RenderSystem, options: IOptions): void;
  }
  export {};
}

declare module 'XrFrame/physics/RaycastHit' {
  import { Scene } from "XrFrame/elements";
  import Vector3 from "XrFrame/math/vector3";
  import Shape from "XrFrame/components/physics/Shape";
  export default class RaycastHit {
          constructor(scene: Scene, nativeComp?: phys3D.RaycastHit);
          /**
              * native层真正的raycastHit对象，业务侧无需关心
              */
          get nativeRaycastHit(): phys3D.RaycastHit;
          /**
              * 被射线射中的collider所附的Rigidbody，如果collider没有附着在一个Rigidbody上，则为null
              */
          get rigidbody(): any;
          /**
              * 被射线射中的collider
              */
          get collider(): Shape;
          /**
              * 从光线的原点到碰撞点的距离
              */
          get distance(): number;
          set distance(v: number);
          /**
              * 射线锁碰到的表面的法线
              */
          get normal(): Vector3;
          set normal(v: Vector3);
          /**
              * 在世界空间中，射线碰到collider的碰撞点
              */
          get point(): Vector3;
          set point(v: Vector3);
  }
}

declare module 'XrFrame/components/physics/Rigidbody' {
  export default class Rigidbody {
      nativeComp: phys3D.Rigidbody;
  }
}

declare module 'XrFrame/loader/glTF/animations/GLTFAnimationNode' {
  import { Kanata } from "XrFrame/ext";
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFNodesLoaded } from "XrFrame/loader/glTF/scenes/GLTFNodesNode";
  import { GLTF } from "XrFrame/loader/glTF/utils/types";
  import { GLTFChannelsLoaded, GLTFChannelsNodeRaw } from "XrFrame/loader/glTF/animations/channels/GLTFChannelsNode";
  import { GLTFSamplersNodeRaw } from "XrFrame/loader/glTF/animations/samplers/GLTFSamplersNode";
  /**
    * 二进制格式
    * | contentoffset | fps(float) | totalFrame | totalSampleGroup |
    * | Array<PuppetAnimationSampleGroup> |
    *
    * @see PuppetAnimationSampleGroup at GLTFChannelNode.ts
    */
  export type PuppetAnimationClipModel = ArrayBuffer | GLTF.BufferView;
  export interface GLTFAnimationNodeRaw {
      channels: GLTFChannelsNodeRaw;
      samplers: GLTFSamplersNodeRaw;
      name?: string;
  }
  export interface GLTFAnimationLoaded {
      clip: Kanata.AnimationClipModel;
      channels: GLTFChannelsLoaded;
      frameCount: number;
      name?: string;
  }
  export default class GLTFAnimationNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFAnimationNodeRaw;
      resource: GLTFAnimationLoaded | null;
      build(): void;
      preload(prerequisites: [accessors: GLTFAccessorsLoaded, nodes: GLTFNodesLoaded]): Promise<GLTFAnimationLoaded>;
      getLoadedResource(): GLTFAnimationLoaded;
  }
}

declare module 'XrFrame/loader/glTF/buffers/GLTFAccessorNode' {
  import { GLTF } from "XrFrame/loader/glTF/utils/types";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFBufferViewLoaded } from "XrFrame/loader/glTF/buffers/GLTFBufferViewNode";
  import { GLTFBufferViewsLoaded } from "XrFrame/loader/glTF/buffers/GLTFBufferViewsNode";
  export enum EnumGLTFAccessorComponentType {
      BYTE = 5120,
      UNSIGNED_BYTE = 5121,
      SHORT = 5122,
      UNSIGNED_SHORT = 5123,
      UNSIGNED_INT = 5125,
      FLOAT = 5126
  }
  export const GLTFAccessorComponentTypeToViewClass: {
      5120: Int8ArrayConstructor;
      5121: Uint8ArrayConstructor;
      5122: Int16ArrayConstructor;
      5123: Uint16ArrayConstructor;
      5125: Uint32ArrayConstructor;
      5126: Float32ArrayConstructor;
  };
  export const GLTFAccessorTypeToNumberOfElements: {
      SCALAR: number;
      VEC2: number;
      VEC3: number;
      VEC4: number;
      MAT2: number;
      MAT3: number;
      MAT4: number;
  };
  export interface GLTFAccessorNodeRaw {
      bufferView?: number;
      byteOffset?: number;
      componentType: number;
      count: number;
      min?: Array<number>;
      max?: Array<number>;
      type: string;
      normalized?: boolean;
      sparse?: boolean;
      name?: string;
  }
  /**
    * 以FloatVec3为例：
    * 一个component指一个float，
    * 一个element指三个float。
    */
  export interface GLTFAccessorLoaded {
      bufferView: GLTFBufferViewLoaded;
      bufferViewIndex: number;
      view: GLTF.BufferView;
      elementLength: number;
      bytesPerComponent: number;
      count: number;
      stride: number;
      byteStride: number;
      componentType: EnumGLTFAccessorComponentType;
      max?: Array<number>;
      min?: Array<number>;
      getCompAt(element: number, comp: number): any;
  }
  export default class GLTFAccessorNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFAccessorNodeRaw;
      build(): void;
      preload(prerequisites: [GLTFBufferViewsLoaded]): Promise<GLTFAccessorLoaded>;
      getLoadedResource(): GLTFAccessorLoaded;
  }
}

declare module 'XrFrame/loader/glTF/buffers/GLTFBufferNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  export interface GLTFBufferNodeRaw {
      uri?: string;
      byteLength: number;
      name?: string;
  }
  export type GLTFBufferLoaded = ArrayBuffer;
  export default class GLTFBufferNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFBufferNodeRaw;
      build(): void;
      preload(): Promise<GLTFBufferLoaded>;
      getLoadedResource(): GLTFBufferLoaded;
  }
}

declare module 'XrFrame/loader/glTF/buffers/GLTFBufferViewNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFBufferLoaded } from "XrFrame/loader/glTF/buffers/GLTFBufferNode";
  export interface GLTFBufferViewNodeRaw {
      buffer: number;
      byteLength: number;
      byteOffset?: number;
      byteStride?: number;
      target?: EnumGLTFBufferViewTarget;
      name?: string;
  }
  export interface GLTFBufferViewLoaded {
      data: ArrayBuffer;
      byteOffset: number;
      byteStride: number;
      byteLength: number;
      target: EnumGLTFBufferViewTarget;
      getSlicedData(): ArrayBuffer;
      getUint8View(): Uint8Array;
      _sliced: ArrayBuffer;
  }
  export enum EnumGLTFBufferViewTarget {
      ARRAY_BUFFER = 34962,
      ELEMENT_ARRAY_BUFFER = 34963
  }
  export default class GLTFBufferViewNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFBufferViewNodeRaw;
      build(): void;
      preload(prerequisites: [GLTFBufferLoaded]): Promise<GLTFBufferViewLoaded>;
      getLoadedResource(): GLTFBufferViewLoaded;
  }
}

declare module 'XrFrame/loader/glTF/geometry/GLTFMeshNode' {
  import { Kanata } from "XrFrame/ext";
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFMaterialsLoaded } from "XrFrame/loader/glTF/materials/GLTFMaterialsNode";
  import { GLTFPrimitivesLoaded, GLTFPrimitivesNodeRaw } from "XrFrame/loader/glTF/geometry/primitives/GLTFPrimitivesNode";
  export interface GLTFMeshNodeRaw {
      primitives: GLTFPrimitivesNodeRaw;
      name?: string;
  }
  export interface GLTFMeshLoaded {
      subMeshes: GLTFPrimitivesLoaded;
  }
  export default class GLTFMeshNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFMeshNodeRaw;
      build(): void;
      preload(prerequisites: [materials: GLTFMaterialsLoaded, accessors: GLTFAccessorsLoaded, vbMap: Map<string, [ArrayBuffer, Kanata.VertexLayout, object]>]): Promise<GLTFMeshLoaded>;
      getLoadedResource(): GLTFMeshLoaded;
  }
}

declare module 'XrFrame/loader/glTF/materials/GLTFMaterialNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import GLTFTextureInfoNode, { GLTFTextureInfoNodeRaw } from "XrFrame/loader/glTF/materials/texture/GLTFTextureInfoNode";
  import GLTFPBRMetallicRoughnessNode, { GLTFPBRMetallicRoughnessNodeRaw } from "XrFrame/loader/glTF/materials/pbr/GLTFPBRMetallicRoughnessNode";
  import GLTFNormalTextureInfoNode, { GLTFNormalTextureInfoNodeRaw } from "XrFrame/loader/glTF/materials/texture/GLTFNormalTextureInfoNode";
  import GLTFOcclusionTextureInfoNode, { GLTFOcclusionTextureInfoNodeRaw } from "XrFrame/loader/glTF/materials/texture/GLTFOcclusionTextureInfoNode";
  import Material from "XrFrame/components/Material";
  import { IRenderStates } from "XrFrame/assets/Effect";
  import { GLTFTexturesLoaded } from "XrFrame/loader/glTF/textures/GLTFTexturesNode";
  export interface GLTFMaterialExtArgs {
      uniform: object;
      renderStates: IRenderStates;
      macros: object;
  }
  export enum EnumGLTFMaterialAlphaMode {
      OPAQUE = 0,
      MASK = 1,
      BLEND = 2
  }
  export interface GLTFMaterialNodeRaw {
      name?: string;
      pbrMetallicRoughness?: GLTFPBRMetallicRoughnessNodeRaw;
      normalTexture?: GLTFNormalTextureInfoNodeRaw;
      occlusionTexture?: GLTFOcclusionTextureInfoNodeRaw;
      emissiveTexture?: GLTFTextureInfoNodeRaw;
      emissiveFactor?: [number, number, number];
      alphaMode?: string;
      alphaCutoff?: number;
      doubleSided?: boolean;
  }
  export type GLTFMaterialPrerequisites = [textrues: GLTFTexturesLoaded];
  export type GLTFMaterialLoaded = Material;
  export default class GLTFMaterialNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFMaterialNodeRaw;
      resource: GLTFMaterialLoaded | null;
      pbrMetallicRoughness: GLTFPBRMetallicRoughnessNode | undefined;
      normalTexture: GLTFNormalTextureInfoNode | undefined;
      occlusionTexture: GLTFOcclusionTextureInfoNode | undefined;
      emissiveTexture: GLTFTextureInfoNode | undefined;
      build(): void;
      /**
        * @internal
        */
      preloadWithoutPBR(prerequisites: GLTFMaterialPrerequisites): Promise<GLTFMaterialExtArgs>;
      preload(prerequisites: [textrues: GLTFTexturesLoaded]): Promise<GLTFMaterialLoaded>;
      getLoadedResource(): GLTFMaterialLoaded;
  }
}

declare module 'XrFrame/loader/glTF/scenes/GLTFNodeNode' {
  import { GLTFMeshesLoaded } from "XrFrame/loader/glTF/geometry/GLTFMeshesNode";
  import { GLTFMeshLoaded } from "XrFrame/loader/glTF/geometry/GLTFMeshNode";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFSkinLoaded } from "XrFrame/loader/glTF/skins/GLTFSkinNode";
  import { GLTFSkinsLoaded } from "XrFrame/loader/glTF/skins/GLTFSkinsNode";
  import { GLTF } from "XrFrame/loader/glTF/utils/types";
  export interface GLTFNodeNodeRaw {
      children?: Array<number>;
      mesh?: number;
      matrix?: Array<number>;
      rotation?: [number, number, number, number];
      scale?: [number, number, number];
      translation?: [number, number, number];
      weights?: number;
      skin?: number;
      extension?: object;
  }
  export interface GLTFNodeLoaded {
      children: Array<number>;
      transform: GLTF.Transform;
      mesh?: GLTFMeshLoaded;
      skin?: GLTFSkinLoaded;
  }
  export type GLTFNodePrerequisites = [meshes: GLTFMeshesLoaded, skins: GLTFSkinsLoaded];
  export default class GLTFNodeNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFNodeNodeRaw;
      build(): void;
      preload(prerequisites: GLTFNodePrerequisites): Promise<GLTFNodeLoaded>;
      getLoadedResource(): GLTFNodeLoaded;
  }
}

declare module 'XrFrame/loader/glTF/skins/GLTFSkinNode' {
  import { Kanata } from "XrFrame/ext";
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  export interface GLTFSkinNodeRaw {
      inverseBindMatrices?: number;
      skeleton?: number;
      joints: Array<number>;
  }
  export interface GLTFSkinLoaded {
      inverseBindMatrices: Kanata.SkeletonBoneInverseModel;
      joints: Array<number>;
  }
  export default class GLTFSkinNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFSkinNodeRaw;
      resource: GLTFSkinLoaded | null;
      build(): void;
      preload(prerequisites: [accessors: GLTFAccessorsLoaded]): Promise<GLTFSkinLoaded>;
      getLoadedResource(): GLTFSkinLoaded;
  }
}

declare module 'XrFrame/loader/glTF/textures/GLTFImageNode' {
  import { Kanata } from "XrFrame/ext";
  import { GLTFBufferViewsLoaded } from "XrFrame/loader/glTF/buffers/GLTFBufferViewsNode";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  export interface GLTFImageNodeRaw {
      uri?: string;
      mimeType?: string;
      bufferView?: number;
      name?: string;
  }
  export interface GLTFImageLoaded {
      kanataImage?: Kanata.IImage;
      type?: string;
  }
  export default class GLTFImageNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFImageNodeRaw;
      build(): void;
      preload(prerequisites: [bufferViews: GLTFBufferViewsLoaded]): Promise<GLTFImageLoaded>;
      getLoadedResource(): GLTFImageLoaded;
  }
}

declare module 'XrFrame/loader/glTF/textures/GLTFSamplerNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  export enum EnumGLTFSamplerFilter {
      NEAREST = 9728,
      LINEAR = 9729,
      NEAREST_MIPMAP_NEAREST = 9984,
      LINEAR_MIPMAP_NEAREST = 9985,
      NEAREST_MIPMAP_LINEAR = 9986,
      LINEAR_MIPMAP_LINEAR = 9987
  }
  export function NeedMipmap(sampler: EnumGLTFSamplerFilter): boolean;
  export enum EnumGLTFSamplerWrap {
      CLAMP_TO_EDGE = 33071,
      MIRRORED_REPEAT = 33648,
      REPEAT = 10497
  }
  export interface GLTFSamplerNodeRaw {
      magFilter?: number;
      minFilter?: number;
      wrapS?: number;
      wrapT?: number;
      name?: string;
  }
  export interface GLTFSamplerLoaded {
      magFilter: EnumGLTFSamplerFilter;
      minFilter: EnumGLTFSamplerFilter;
      wrapS: EnumGLTFSamplerWrap;
      wrapT: EnumGLTFSamplerWrap;
  }
  export default class GLTFSamplerNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFSamplerNodeRaw;
      build(): void;
      preload(): Promise<GLTFSamplerLoaded>;
      getLoadedResource(): GLTFSamplerLoaded;
  }
}

declare module 'XrFrame/loader/glTF/textures/GLTFTextureNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFImagesLoaded } from "XrFrame/loader/glTF/textures/GLTFImagesNode";
  import { GLTFSamplersLoaded } from "XrFrame/loader/glTF/textures/GLTFSamplersNode";
  import { Kanata } from "XrFrame/ext";
  export interface GLTFTextureNodeRaw {
      sampler?: number;
      source?: number;
      name?: string;
  }
  export type GLTFTextureLoaded = Kanata.Texture;
  export default class GLTFTextureNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFTextureNodeRaw;
      build(): void;
      preload(prerequisites: [images: GLTFImagesLoaded, samplers: GLTFSamplersLoaded]): Promise<GLTFTextureLoaded>;
      getLoadedResource(): GLTFTextureLoaded;
  }
}

declare module 'XrFrame/kanata/lib/backend' {
  /**
    * index.ts
    *
    *       * @Date    : 9/3/2020, 8:45:18 PM
    */
  export * from 'XrFrame/kanata/lib/backend/interface';
  import { IImage } from 'XrFrame/kanata/lib/backend/interface';
  import { IWorker } from 'XrFrame/kanata/lib/backend/interface/IWorker';
  export interface IBackend {
      IS_VALID: () => boolean;
      GET_MAIN_CANVAS(): HTMLCanvasElement;
      worker: IWorker;
      Image: {
          new (): IImage;
          IS(obj: any): obj is IImage;
      };
      Phys3D: any;
  }
  const backend: IBackend;
  export default backend;
}

declare module 'XrFrame/kanata/lib/frontend/shared/NativeObject' {
  /**
    * NativeObject.ts
    *
    *       * @Date    : 9/3/2020, 9:17:03 PM
    */
  import { IHandle } from 'XrFrame/kanata/lib/backend';
  export default class NativeObject {
      _bufferName: string;
      _byteOffset: number;
      _bufferLength: number;
      id: number;
      _buffer: ArrayBuffer;
      _f32view: Float32Array;
      _u32view: Uint32Array;
      protected _handle: IHandle;
      protected _init(info: IHandle): void;
      protected _fastInit(info: IHandle): void;
      protected _initU32View(): void;
      protected _initPropertyView(offset: number, length: number): Float32Array;
      setRawBuffer(data: Float32Array): void;
      destroy(): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/pool/PoolObject' {
  import Pool from 'XrFrame/kanata/lib/frontend/pool/Pool';
  export interface INativePools {
      [poolId: number]: Pool;
  }
  export default class PoolObject {
      protected _nativePool: Pool;
      protected _nativeId: number;
      protected _poolId: number;
      protected _poolIndex: number;
      protected _using: boolean;
      entityOffset: number;
      get float32View(): Float32Array;
      get uint32View(): Uint32Array;
      get id(): number;
      get poolId(): number;
      get poolIndex(): number;
      get poll(): any;
      get isUsing(): boolean;
      set isUsing(value: boolean);
      protected _init(nativeObjId: number, nativePools: INativePools): void;
      setRawBuffer(data: Float32Array): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/pool/PoolManager' {
  /**
    * PoolManager.ts
    *
    *       * @Date    : 9/3/2020, 9:19:34 PM
    */
  import { IHandle } from 'XrFrame/kanata/lib/backend';
  import PoolObject, { INativePools } from 'XrFrame/kanata/lib/frontend/pool/PoolObject';
  export default class PoolManager {
      pools: INativePools;
      constructor(template: ArrayBuffer, templateView: Float32Array, allocateFunc: (size: number) => IHandle);
      allocateOne(): number;
      dispose(obj: PoolObject): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/shared/PureResource' {
  /**
    * PureResource.ts
    *
    *       * @Date    : 9/8/2020, 9:04:32 PM
    */
  import { IHandle } from 'XrFrame/kanata/lib/backend';
  export default class PureResource {
      id: number;
      __handle: IHandle;
      protected get _handle(): IHandle;
      protected set _handle(value: IHandle);
      destroy(): void;
  }
}

declare module 'XrFrame/kanata/lib/backend/native/worker' {
  /**
    * INativeWorker.ts
    *
    *       * @Date    : 12/3/2020, 4:31:17 PM
   */
  import { IHandle, ETextureType, ETextureFormat, IRect, EMeshRenderType, INativeMap, ILongIntNativeMap, IGlyphInfo, IRenderEnv } from 'XrFrame/kanata/lib/backend/interface';
  export interface INativeWorker {
      createVertexLayout(options: string): IHandle;
      createVertexDataDescriptor(options: string): IHandle;
      createVertexBuffer(buffer: ArrayBuffer | ArrayBufferView, layout: number): IHandle;
      updateVertexBuffer(bufferId: number, buffer: ArrayBuffer | ArrayBufferView, offset: number): void;
      createIndexBuffer(buffer: ArrayBuffer | ArrayBufferView, is32bits?: boolean): IHandle;
      updateIndexBuffer(bufferId: number, buffer: ArrayBuffer | ArrayBufferView, offset: number): void;
      createVertexData(layout: number, size: number, batchDesc: number): IHandle;
      createIndexData(size: number): IHandle;
      createTexture(type: ETextureType, width: number, height: number, slice: number, mips: number, format: ETextureFormat, flags: number, buffer: (ArrayBuffer | ArrayBufferView)[], offsets: Uint32Array): IHandle;
      createTexture(canvas: HTMLCanvasElement): IHandle;
      updateTexture(id: number, level: number, slice: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, buffer: ArrayBuffer | ArrayBufferView): void;
      updateTextureFlags(textureId: number, flags: number): void;
      createShader(vs: string, fs: string): IHandle;
      createUniformBlockDescriptor(descriptor: string): IHandle;
      createUniformBlock(descriptor: number): IHandle;
      createEffect(name: string, passCount: number, keyIndexMap: string, passes: string, shaders: string[], variants: string, flags: number): IHandle & {
          warmUp(): void;
      };
      createMaterial(macros: string): IHandle;
      changeMaterialMacros(material: number, macros: string, reset?: boolean): void;
      createScalableList(initSize: number, onBackendEnlarge: () => void): IHandle & {
          enlarge(size: number): void;
      };
  }
  export interface INativeWorker {
      createView(view: string): IHandle;
      updateViewRect(view: number, rect: IRect): void;
      updateViewScissor(view: number, rect: IRect): void;
  }
  export interface INativeWorker {
      createRenderPass(descriptor: string): IHandle;
  }
  export interface INativeWorker {
      createNodePool(count: number, is3d: boolean): IHandle;
      createNodeTree(length: number, ids: ArrayBuffer, buffer: ArrayBuffer, calculateWordMatrix: boolean, is3d?: boolean): boolean;
  }
  export namespace INativeWorker {
      interface IAnimationClipBinding extends IHandle {
          id: number;
          rebind(buffer: ArrayBuffer, offset: number, cLength: number, eLength: number, removeAction: number, retainedAction: number, addedAction: number, rootEntity: number): boolean;
          update(buffer: ArrayBuffer, offset: number, cLength: number, eLength: number, removeAction: number, retainedAction: number, addedAction: number): boolean;
          writeDefaultValues(): void;
      }
  }
  export interface INativeWorker {
      createCullingComponentPool(count: number): IHandle;
      createRenderComponent(meshCount: number, uniformBlock: number, attachedNode: number, cullingId: number, meshRenderType: EMeshRenderType, macros?: string): IHandle & {
          setSharedDirty(): void;
      };
      changeMeshMacros(mesh: number, macros: string): void;
      createAnimator(clipCount: number, nodeCount: number): IHandle;
      updateAnimators(data: Uint32Array): void;
      createAnimationClipBinding(buffer: ArrayBuffer, offset: number, cLength: number, eLength: number, useDefaultAddedNodesAction: number, rootEntity: number): INativeWorker.IAnimationClipBinding;
      createAnimatorControllerModel(layerCount: number): {
          id: number;
          buffer: ArrayBuffer;
          setMaskAtIndex(index: number, mask: null | ArrayBuffer, offset: number, length: number): void;
          update(): void;
      };
      createAnimatorControllerStateModel(clipCount: number): {
          id: number;
          buffer: ArrayBuffer;
      };
      updateAnimatorControllers(data: Uint32Array): void;
      createSkinning(boneCount: number, flag: number): IHandle;
      updateSkinnings(data: Uint32Array): void;
      createDynamicBones(rootNodeId: number): IHandle & {
          preUpdate(): void;
          update(dt: number, rootMotionX?: number, rootMotionY?: number, rootMotionZ?: number): void;
          rebuild(): void;
          resetRoot(rootId: number): void;
      };
  }
  export interface INativeWorker {
      createRenderCamera(attachedNode: number, isUI?: boolean): IHandle & {
          setSharedDirty(): void;
          updateMatrices(): void;
      };
      createLightCamera(): IHandle;
  }
  export interface INativeWorker {
      createAnimationClipModel(buffer: ArrayBuffer): IHandle;
      createBoneInverseModel(buffer: ArrayBuffer): IHandle;
  }
  export interface INativeWorker {
      eventBusSM: ArrayBuffer;
      dirtyNodesSM: ArrayBuffer;
      uiRenderList: ArrayBuffer;
      enlargeUIRenderList(): void;
      refreshNodesWorldTransform(): void;
  }
  export interface INativeWorker {
      loadTTFFont(buffer: ArrayBuffer, filaPath: string): string;
      getGlyphInfo(name: string, charCode: number): IGlyphInfo;
  }
  export interface INativeWorker {
      decodeImage(buffer: ArrayBuffer, callback: (data: ArrayBuffer | undefined, width: number, height: number) => void, premultiplyAlpha: boolean): void;
      getRenderEnv(): IRenderEnv;
      clearView(view: number): void;
      cullCamera(camera: number, cullResult: number, lightMode: string): void;
      drawCamera(camera: number, renderList: number, lightMode: string): void;
      drawLight(light: number, camera: number, renderList: number, lightMode: string): void;
      submit(): void;
      createWeakRef<T>(wrapper: T): {
          deref: () => T;
      };
      createWeakRefSentry(): any;
      createNativeUUMap(): INativeMap<number>;
      createNativeSUMap(): INativeMap<string>;
      createNativeULUMap(): ILongIntNativeMap;
      setNodeName(id: number, name: string): void;
      setRenderComponentName(id: number, name: string): void;
      debugPrint(msg: string): void;
  }
  let Phys3D: any;
  export const native: {
      worker: INativeWorker;
  };
  export function destroy(): void;
  export function GET_MAIN_CANVAS(): HTMLCanvasElement;
  export function IS_VALID(): boolean;
  export { Phys3D };
}

declare module 'XrFrame/loader/glTF/utils/types' {
  import { ITransformData } from "XrFrame/components";
  import { Kanata } from "XrFrame/ext";
  import Quaternion from "XrFrame/math/quaternion";
  import Vector3 from "XrFrame/math/vector3";
  export namespace GLTF {
          type BufferView = Int8Array | Uint8Array | Uint16Array | Uint32Array | Float32Array;
          type IndexBufferView = Uint16Array | Uint32Array | Uint8Array;
          interface BoundingBox {
                  min: Vector3;
                  max: Vector3;
          }
          namespace BoundingBox {
                  function createZero(): BoundingBox;
                  function createInfinite(): BoundingBox;
          }
          interface VertexLayoutDesc extends Kanata.IVertexLayoutOptions {
                  stride: number;
          }
          interface VertexProperties {
                  buffer: Float32Array;
                  layoutDesc: VertexLayoutDesc;
                  layout: Kanata.VertexLayout;
                  macros: object;
                  boundingBox: BoundingBox;
                  /**
                      * 是否需要自行生成normal和tangent的顶点数据。
                      */
                  lackNormal: boolean;
                  lackTangent: boolean;
                  /**
                      * 如果需要生成的话，生成在layoutDesc的哪个attribute里。
                      */
                  normalSlot: number;
                  tangentSlot: number;
          }
          interface Transform extends ITransformData {
                  /**
                      * 同时有quat和rotation的情况下，quat优先；
                      * 目前只会填写quat，不会填写rotation。
                      */
                  quat?: Quaternion;
          }
  }
}

declare module 'XrFrame/loader/glTF/animations/channels/GLTFChannelsNode' {
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFNodesLoaded } from "XrFrame/loader/glTF/scenes/GLTFNodesNode";
  import { GLTFSamplersLoaded } from "XrFrame/loader/glTF/animations/samplers/GLTFSamplersNode";
  import GLTFChannelNode, { GLTFChannelLoaded, GLTFChannelNodeRaw } from "XrFrame/loader/glTF/animations/channels/GLTFChannelNode";
  type ChildNode = GLTFChannelNode;
  export type GLTFChannelsNodeRaw = Array<GLTFChannelsNodeRaw>;
  export type GLTFChannelsLoaded = Array<GLTFChannelLoaded>;
  export default class GLTFChannelsNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFChannelNodeRaw): GLTFChannelNode;
      readonly raw: GLTFChannelsNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [nodes: GLTFNodesLoaded, samplers: GLTFSamplersLoaded]) => Promise<GLTFChannelsLoaded>;
      getLoadedResource(): GLTFChannelsLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/animations/samplers/GLTFSamplersNode' {
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import GLTFSamplerNode, { GLTFSamplerLoaded, GLTFSamplerNodeRaw } from "XrFrame/loader/glTF/animations/samplers/GLTFSamplerNode";
  type ChildNode = GLTFSamplerNode;
  export type GLTFSamplersNodeRaw = Array<GLTFSamplersNodeRaw>;
  export type GLTFSamplersLoaded = Array<GLTFSamplerLoaded>;
  export default class GLTFSamplersNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFSamplerNodeRaw): GLTFSamplerNode;
      readonly raw: GLTFSamplersNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [accessors: GLTFAccessorsLoaded]) => Promise<GLTFSamplersLoaded>;
      getLoadedResource(): GLTFSamplersLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/geometry/primitives/GLTFPrimitivesNode' {
  import { Kanata } from "XrFrame/ext";
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFArrayNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFMaterialsLoaded } from "XrFrame/loader/glTF/materials/GLTFMaterialsNode";
  import GLTFPrimitiveNode, { GLTFPrimitiveLoaded, GLTFPrimitiveNodeRaw } from "XrFrame/loader/glTF/geometry/primitives/GLTFPrimitiveNode";
  type ChildNode = GLTFPrimitiveNode;
  export type GLTFPrimitivesNodeRaw = Array<GLTFPrimitivesNodeRaw>;
  export type GLTFPrimitivesLoaded = Array<GLTFPrimitiveLoaded>;
  export default class GLTFPrimitivesNode extends GLTFArrayNode<ChildNode> {
      ChildCtor(childRaw: GLTFPrimitiveNodeRaw): GLTFPrimitiveNode;
      readonly raw: GLTFPrimitivesNodeRaw;
      get nodeName(): string;
      preload: (prerequisites: [materials: GLTFMaterialsLoaded, accessors: GLTFAccessorsLoaded, vbMap: Map<string, [ArrayBuffer, Kanata.VertexLayout, object]>]) => Promise<GLTFPrimitivesLoaded>;
      getLoadedResource(): GLTFPrimitivesLoaded;
  }
  export {};
}

declare module 'XrFrame/loader/glTF/materials/texture/GLTFTextureInfoNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  export interface GLTFTextureInfoNodeRaw {
      index: number;
      texCoord?: number;
  }
  export interface GLTFTextureInfoLoaded {
      index: number;
      texCoord: number;
  }
  export default class GLTFTextureInfoNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFTextureInfoNodeRaw;
      build(): void;
      preload(): Promise<GLTFTextureInfoLoaded>;
      getLoadedResource(): GLTFTextureInfoLoaded;
  }
}

declare module 'XrFrame/loader/glTF/materials/pbr/GLTFPBRMetallicRoughnessNode' {
  import { Kanata } from "XrFrame/ext";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFTexturesLoaded } from "XrFrame/loader/glTF/textures/GLTFTexturesNode";
  import { GLTFTextureInfoNodeRaw } from "XrFrame/loader/glTF/materials/texture/GLTFTextureInfoNode";
  export interface GLTFPBRMetallicRoughnessNodeRaw {
      baseColorFactor?: [number, number, number, number];
      baseColorTexture?: GLTFTextureInfoNodeRaw;
      metallicFactor?: number;
      roughnessFactor?: number;
      metallicRoughnessTexture?: GLTFTextureInfoNodeRaw;
  }
  export interface GLTFPBRMetallicRoughnessLoaded {
      uniform: {
          [key: string]: ArrayLike<number> | number | Kanata.Texture;
      };
      renderStates: object;
      macros: object;
  }
  export default class GLTFPBRMetallicRoughnessNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFPBRMetallicRoughnessNodeRaw;
      build(): void;
      preload(prerequisites: [textrues: GLTFTexturesLoaded]): Promise<GLTFPBRMetallicRoughnessLoaded>;
      getLoadedResource(): GLTFPBRMetallicRoughnessLoaded;
  }
}

declare module 'XrFrame/loader/glTF/materials/texture/GLTFNormalTextureInfoNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  export interface GLTFNormalTextureInfoNodeRaw {
      index: number;
      texCoord?: number;
      scale?: number;
  }
  export interface GLTFNormalTextureInfoLoaded {
      index: number;
      texCoord: number;
      scale: number;
  }
  export default class GLTFNormalTextureInfoNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFNormalTextureInfoNodeRaw;
      build(): void;
      preload(): Promise<GLTFNormalTextureInfoLoaded>;
      getLoadedResource(): GLTFNormalTextureInfoLoaded;
  }
}

declare module 'XrFrame/loader/glTF/materials/texture/GLTFOcclusionTextureInfoNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  export interface GLTFOcclusionTextureInfoNodeRaw {
      index: number;
      texCoord?: number;
      strength?: number;
  }
  export interface GLTFOcclusionTextureInfoLoaded {
      index: number;
      texCoord: number;
      strength: number;
  }
  export default class GLTFOcclusionTextureInfoNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFOcclusionTextureInfoNodeRaw;
      build(): void;
      preload(): Promise<GLTFOcclusionTextureInfoLoaded>;
      getLoadedResource(): GLTFOcclusionTextureInfoLoaded;
  }
}

declare module 'XrFrame/kanata/lib/backend/interface/IWorker' {
  /**
    * IWorker.ts
    *
    *       * @Date    : 12/3/2020, 4:45:58 PM
    */
  import { IHandle, ETextureType, ETextureFormat, IRect, EMeshRenderType, INativeMap, ILongIntNativeMap, IGlyphInfo, IVertexLayoutOptions, IView, IRenderPassDescriptor, IEventBridge, IDownloader, IUniformDescriptorOptions, IFontSetting, TTextureSource, IImage, IVertexDataDescriptorOptions, IRenderEnv, IEngineSettings } from 'XrFrame/kanata/lib/backend/interface';
  global {
      const MAIN_CANVAS: HTMLCanvasElement;
      const ENGINE_SETTINGS: IEngineSettings;
      const ENGINE_MODE: 'Game' | 'Editor';
      const IS_SUB_CONTEXT: boolean;
      const HOST: string;
  }
  export interface IWorker {
      createVertexLayout(options: IVertexLayoutOptions): IHandle;
      createVertexDataDescriptor(options: IVertexDataDescriptorOptions): IHandle;
      createVertexBuffer(buffer: ArrayBuffer | ArrayBufferView, layout: IHandle): IHandle;
      updateVertexBuffer(bufferHandle: IHandle, buffer: ArrayBuffer | ArrayBufferView, offset: number): void;
      createIndexBuffer(buffer: ArrayBuffer | ArrayBufferView, is32bits?: boolean): IHandle;
      updateIndexBuffer(bufferHandle: IHandle, buffer: ArrayBuffer | ArrayBufferView, offset: number): void;
      createVertexData(layout: IHandle, size: number, batchDesc: IHandle): IHandle;
      createIndexData(size: number): IHandle;
      createTexture(type: ETextureType, width: number, height: number, slice: number, mips: number, format: ETextureFormat, flags: number, source: TTextureSource[], offsets: Uint32Array): IHandle;
      createAutoUpdateTextureFromCanvas(canvas: HTMLCanvasElement): IHandle;
      updateTexture(handle: IHandle, level: number, slice: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, buffer: ArrayBuffer | ArrayBufferView | IImage | HTMLCanvasElement | ImageData): void;
      updateTextureFlags(texture: IHandle, flags: number): void;
      createUniformBlockDescriptor(descriptor: IUniformDescriptorOptions): IHandle;
      createUniformBlock(descriptor: IHandle): IHandle;
      createEffect(name: string, passCount: number, keyIndexMap: string[], passes: {
          lightMode: string;
          variants?: {
              [key: number]: number;
          };
          macros?: {
              [key: string]: number;
          };
          shaders?: number[];
      }[], shaders: string[], variants: number[][], useRuntimeMacros: boolean): IHandle & {
          warmUp(): void;
      };
      createMaterial(macros?: {
          [name: string]: string | number | boolean;
      }, uniformBlock?: IHandle): IHandle;
      changeMaterialMacros(material: IHandle, macros: {
          [name: string]: string | number | boolean;
      }, reset?: boolean): void;
  }
  export interface IWorker {
      createView(view: IView): IHandle;
      updateViewRect(view: IHandle, rect: IRect): void;
      updateViewScissor(view: IHandle, rect: IRect): void;
  }
  export interface IWorker {
      createRenderPass(descriptor: IRenderPassDescriptor): IHandle;
  }
  export interface IWorker {
      createNodePool(count: number, is3d: boolean): IHandle;
      createNodeTree(length: number, ids: ArrayBuffer, buffer: ArrayBuffer, calculateWordMatrix: boolean, is3d: boolean): boolean;
  }
  export interface IWorker {
      createCullingComponentPool(count: number): IHandle;
      createRenderComponent(meshCount: number, uniformBlock: IHandle, attachedNodeId: number, cullingCompId: number, meshRenderType: EMeshRenderType, macros?: {
          [name: string]: string | number | boolean;
      }): IHandle & {
          setSharedDirty(): void;
      };
      changeMeshMacros(mesh: IHandle, macros: {
          [name: string]: string | number | boolean;
      }, reset?: boolean): void;
      createAnimator(clipCount: number, nodeCount: number): IHandle;
      updateAnimators(feObjects: {
          __handle: IHandle;
          id: number;
      }[], size: number): void;
      createAnimationClipBinding(clipArray: {
          __handle: IHandle;
          id: number;
      }[], clipArrayOffset: number, clipArrayLength: number, entityArray: Array<number | {
          id: number;
      } | null>, entityArrayOffset: number, entityArrayLength: number, useDefaultAddedNodesAction: number, rootEntity: {
          id: number;
      }): IHandle;
      rebindAnimationClipBinding(binding: IHandle, clipArray: {
          __handle: IHandle;
          id: number;
      }[], clipArrayOffset: number, clipArrayLength: number, entityArray: Array<number | {
          id: number;
      } | null>, entityArrayOffset: number, entityArrayLength: number, removeAction: number, retainedAction: number, addedAction: number, rootEntity: {
          id: number;
      }): boolean;
      updateAnimationClipBinding(binding: IHandle, clipArray: {
          __handle: IHandle;
          id: number;
      }[], clipArrayOffset: number, clipArrayLength: number, entityArray: Array<number | {
          id: number;
      } | null>, entityArrayOffset: number, entityArrayLength: number, removeAction: number, retainedAction: number, addedAction: number): boolean;
      writeAnimationClipBindingDefaultValues(binding: IHandle): void;
      createAnimatorControllerModel(layerCount: number): IHandle;
      setAnimatorControllerModelMaskAtIndex(model: IHandle, index: number, mask: {
          buffer: null | ArrayBuffer;
          offset: number;
          length: number;
      }): void;
      updateAnimatorControllerModel(model: IHandle): void;
      createAnimatorControllerStateModel(clipCount: number): IHandle;
      updateAnimatorControllers(// for performance
      feObjects: {
          __handle: IHandle;
          id: number;
      }[], size: number): void;
      createSkinning(boneCount: number, flag: number): IHandle;
      updateSkinnings(feObjects: {
          __handle: IHandle;
          id: number;
      }[], size: number): void;
      createDynamicBones(rootNodeId: number): IHandle & {
          preUpdate(): void;
          update(dt: number, rootMotionX?: number, rootMotionY?: number, rootMotionZ?: number): void;
          rebuild(): void;
          resetRoot(rootId: number): void;
      };
  }
  export interface IWorker {
      createRenderCamera(attachedNodeId: number, isUI?: boolean): IHandle & {
          setSharedDirty(): void;
          updateMatrices(): void;
      };
      createLightCamera(): IHandle;
  }
  export interface IWorker {
      createAnimationClipModel(buffer: ArrayBuffer): IHandle;
      createBoneInverseModel(buffer: ArrayBuffer): IHandle;
      createScalableList(initSize: number, onBackendEnlarge?: () => void): IHandle & {
          enlarge(size: number): void;
      };
  }
  export interface IWorker {
      eventBridge: IEventBridge;
  }
  export interface IWorker {
      loadTTFFont(url: string, callback: (font: string) => void): void;
      getGlyphInfo(fontSetting: IFontSetting, charCode: number): IGlyphInfo;
  }
  export interface IWorker {
      setGlobalPhysicSystem(system: any): void;
      bindRigidBodyToNode(rigidBody: any, nodeId: number): void;
      unbindRigidBody(rigidBody: any): void;
      bindCCTToNode(cc: any, nodeId: number): void;
      unbindCCT(cc: any): void;
  }
  export interface IWorker {
      downloader: IDownloader;
      update(delta: number): void;
      destroy(): void;
      refreshNodesWorldTransform(): void;
      getRenderEnv(): IRenderEnv;
      clearView(view: IHandle): void;
      cullCamera(camera: IHandle, cullResult: IHandle, lightMode: string): void;
      drawCamera(camera: IHandle, renderList: IHandle, lightMode: string): void;
      drawLight(light: IHandle, camera: IHandle, renderList: IHandle, lightMode: string): void;
      submit(): void;
      createWeakRef<T>(wrapper: T): {
          deref: () => T;
      };
      createWeakRefSentry(): any;
      createNativeUUMap(): INativeMap<number>;
      createNativeSUMap(): INativeMap<string>;
      createNativeULUMap(): ILongIntNativeMap;
      setNodeName(id: number, name: string): void;
      setRenderComponentName(handle: IHandle, name: string): void;
      debugPrint(msg: string): void;
  }
}

declare module 'XrFrame/kanata/lib/frontend/pool/Pool' {
  /**
    * Pool.ts
    *
    *       * @Date    : 9/3/2020, 9:18:35 PM
    */
  import { IHandle } from 'XrFrame/kanata/lib/backend';
  import NativeObject from 'XrFrame/kanata/lib/frontend/shared/NativeObject';
  export default class Pool extends NativeObject {
      constructor(nativeObj: IHandle);
  }
}

declare module 'XrFrame/loader/glTF/animations/channels/GLTFChannelNode' {
  import { StreamReader } from "XrFrame/core/utils";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFNodesLoaded } from "XrFrame/loader/glTF/scenes/GLTFNodesNode";
  import { GLTF } from "XrFrame/loader/glTF/utils/types";
  import { GLTFSamplerLoaded } from "XrFrame/loader/glTF/animations/samplers/GLTFSamplerNode";
  import { GLTFSamplersLoaded } from "XrFrame/loader/glTF/animations/samplers/GLTFSamplersNode";
  import { GLTFTargetLoaded, GLTFTargetNodeRaw } from "XrFrame/loader/glTF/animations/channels/GLTFTargetNode";
  export enum EnumPuppetAnimationSampleGroupType {
          tx = 1,
          ty = 2,
          tz = 3,
          sx = 4,
          sy = 5,
          sz = 6,
          qx = 7,
          qy = 8,
          qz = 9,
          qw = 10,
          ex = 11,
          ey = 12,
          ez = 13
  }
  /**
      * 二进制格式, byteLength = 12 + 16 * samples.len
      * | Array<| nodeid | type | count |> |
      * | Array<PuppetAnimationClipSample> |
      */
  export type PuppetAnimationSampleGroup = ArrayBuffer | GLTF.BufferView;
  /**
      * 二进制格式, byteLength = 16
      * uint32_t index;
      * float value;
      * float in_tangent;
      * float out_tangent;
      *
      * @remind out_tangent的值决定了插值的类型！很hack！
      * out_tangent = Infinity: STEP
      * out_tangent = NaN: Spherical Linear Interpolation (for quaternion)
      * out_tangent为正常值: Cubic Spline Interpolation (or Linear)
      */
  export type PuppetAnimationClipSample = ArrayBuffer | GLTF.BufferView;
  export interface GLTFChannelNodeRaw {
          sampler: number;
          target: GLTFTargetNodeRaw;
  }
  export interface GLTFChannelLoaded {
          sampler: GLTFSamplerLoaded;
          target: GLTFTargetLoaded;
          vectorGroups: number;
          headerBytesNeeded: number;
          bodyBytesNeeded: number;
          serializeHeaderOnBuffer(stream: StreamReader): void;
          serializeBodyOnBuffer(stream: StreamReader): number;
  }
  export default class GLTFChannelNode extends GLTFBaseNode {
          get nodeName(): string;
          readonly raw: GLTFChannelNodeRaw;
          build(): void;
          preload(prerequisites: [nodes: GLTFNodesLoaded, samplers: GLTFSamplersLoaded]): Promise<GLTFChannelLoaded>;
          getLoadedResource(): GLTFChannelLoaded;
  }
}

declare module 'XrFrame/loader/glTF/animations/samplers/GLTFSamplerNode' {
  import { GLTFAccessorLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorNode";
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  export enum EnumGLTFSamplerInterpolation {
      STEP = 0,
      LINEAR = 1,
      CUBICSPLINE = 2
  }
  export interface GLTFSamplerNodeRaw {
      input: number;
      output: number;
      interpolation?: "STEP" | "LINEAR" | "CUBICSPLINE";
  }
  export interface GLTFSamplerLoaded {
      input: GLTFAccessorLoaded;
      output: GLTFAccessorLoaded;
      interpolation: EnumGLTFSamplerInterpolation;
      sampleCount: number;
  }
  export default class GLTFSamplerNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFSamplerNodeRaw;
      build(): void;
      preload(prerequisites: [accessors: GLTFAccessorsLoaded]): Promise<GLTFSamplerLoaded>;
      getLoadedResource(): GLTFSamplerLoaded;
  }
}

declare module 'XrFrame/loader/glTF/geometry/primitives/GLTFPrimitiveNode' {
  import Geometry from "XrFrame/assets/Geometry";
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFAttributesNodeRaw } from "XrFrame/loader/glTF/geometry/primitives/attributes/GLTFAttributesNode";
  import { GLTFMaterialsLoaded } from "XrFrame/loader/glTF/materials/GLTFMaterialsNode";
  import Material from "XrFrame/components/Material";
  import { GLTF } from "XrFrame/loader/glTF/utils/types";
  export enum EnumGLTFPrimitiveMode {
      POINTS = 0,
      LINES = 1,
      LINE_LOOP = 2,
      LINE_STRIP = 3,
      TRIANGLES = 4,
      TRIANGLE_STRIP = 5,
      TRIANGLE_FAN = 6
  }
  export interface GLTFPrimitiveNodeRaw {
      attributes: GLTFAttributesNodeRaw;
      indices?: number;
      material?: number;
      mode?: number;
      targets?: Array<object>;
  }
  export interface GLTFPrimitiveLoaded {
      geometry: Geometry;
      material: Material;
  }
  export default class GLTFPrimitiveNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFPrimitiveNodeRaw;
      build(): void;
      preload(prerequisites: [materials: GLTFMaterialsLoaded, accessors: GLTFAccessorsLoaded, vbMap: Map<string, GLTF.VertexProperties>]): Promise<GLTFPrimitiveLoaded>;
      getLoadedResource(): GLTFPrimitiveLoaded;
  }
}

declare module 'XrFrame/core/utils' {
  export function assert(pred: boolean, msg: string): void;
  export function decode(data: ArrayBuffer, format: "utf-8" | "gbk"): string;
  export function wxPromiseWrapper(executor: any, args: any): Promise<any>;
  export class StreamReader {
      constructor(buffer: ArrayBuffer);
      get size(): number;
      read<T>(type: StreamReader.Type): T;
      write<T>(type: StreamReader.Type, value: T): void;
      /**
        * 跳过一个位置，以后再填写。
        */
      reserve<T>(type: StreamReader.Type): {
          write(value: T): void;
      };
      readChunk(length: number): ArrayBuffer;
      align(alignment: number): void;
      end(): boolean;
      pos(): number;
  }
  export namespace StreamReader {
      enum Type {
          Float = 0,
          UInt32 = 1
      }
      const TypeAlignment: {
          0: number;
          1: number;
      };
      const TypeSize: {
          0: number;
          1: number;
      };
  }
}

declare module 'XrFrame/loader/glTF/animations/channels/GLTFTargetNode' {
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTFNodesLoaded, GLTFTreeNode } from "XrFrame/loader/glTF/scenes/GLTFNodesNode";
  export enum GLTFEnumAnimationTargetPath {
      TRANSLATION = 0,
      ROTATION = 1,
      SCALE = 2,
      WEIGHTS = 3
  }
  export interface GLTFTargetNodeRaw {
      node?: number;
      path: "translation" | "rotation" | "scale" | "weights";
  }
  export interface GLTFTargetLoaded {
      node: GLTFTreeNode | null;
      path: GLTFEnumAnimationTargetPath;
  }
  export default class GLTFTargetNode extends GLTFBaseNode {
      get nodeName(): string;
      readonly raw: GLTFTargetNodeRaw;
      build(): void;
      preload(prerequisites: [nodes: GLTFNodesLoaded]): Promise<GLTFTargetLoaded>;
      getLoadedResource(): GLTFTargetLoaded;
  }
}

declare module 'XrFrame/loader/glTF/geometry/primitives/attributes/GLTFAttributesNode' {
  import { GLTFAccessorsLoaded } from "XrFrame/loader/glTF/buffers/GLTFAccessorsNode";
  import { GLTFBaseNode } from "XrFrame/loader/glTF/GLTFBaseNode";
  import { GLTF } from "XrFrame/loader/glTF/utils/types";
  /**
      * GLTF.Attributes.Name -> Kanata.Layout.Name
      */
  export function convertAttributeName(name: string): string;
  /**
      * GLTF.Attributes.Name -> Shader Macros
      */
  export function genMacrosByAttrib(name: string, macros: object): void;
  export interface GLTFAttributesExtArgs {
          trust: boolean;
  }
  export type GLTFAttributesNodeRaw = {
          [key: string]: number;
  };
  export type GLTFAttributesLoaded = GLTF.VertexProperties;
  export default class GLTFAttributesNode extends GLTFBaseNode {
          get nodeName(): string;
          readonly raw: GLTFAttributesNodeRaw;
          build(): void;
          collectLayout(layoutSet: Set<string>): void;
          preload(prerequisites: [materials: any, accessors: GLTFAccessorsLoaded, vbMap: Map<string, GLTF.VertexProperties>]): Promise<GLTFAttributesLoaded>;
          getLoadedResource(): GLTFAttributesLoaded;
  }
}
