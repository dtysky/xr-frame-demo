import { isPlainObject, toObject } from './flatTool';
const RawLifeCycles = ['Created', 'Attached', 'Ready', 'Moved', 'Detached', 'Error'];
const NativeLifeCycles = RawLifeCycles.map((k) => k.toLowerCase());
const ComponentNativeProps = [
    'properties',
    'data',
    'observers',
    'methods',
    'behaviors',
    ...NativeLifeCycles,
    'relations',
    'externalClasses',
    'options',
    'lifetimes',
    'pageLifeTimes',
    'definitionFilter',
];
export const toComponent = function toComponent(options) {
    if (options.properties) {
        Object.keys(options.properties).forEach((k) => {
            let opt = options.properties[k];
            if (!isPlainObject(opt)) {
                opt = { type: opt };
            }
            options.properties[k] = opt;
        });
    }
    if (!options.methods)
        options.methods = {};
    if (!options.lifetimes)
        options.lifetimes = {};
    const inits = {};
    Object.getOwnPropertyNames(options).forEach((k) => {
        const desc = Object.getOwnPropertyDescriptor(options, k);
        if (!desc)
            return;
        if (NativeLifeCycles.indexOf(k) < 0 && typeof desc.value === 'function') {
            Object.defineProperty(options.methods, k, desc);
            delete options[k];
        }
        else if (ComponentNativeProps.indexOf(k) < 0) {
            inits[k] = desc;
        }
        else if (NativeLifeCycles.indexOf(k) >= 0) {
            options.lifetimes[k] = options[k];
        }
    });
    if (Object.keys(inits).length) {
        const oldCreated = options.lifetimes.created;
        const oldAttached = options.lifetimes.attached;
        const { controlledProps = [] } = options;
        options.lifetimes.created = function (...args) {
            Object.defineProperties(this, inits);
            if (oldCreated)
                oldCreated.apply(this, args);
        };
        options.lifetimes.attached = function (...args) {
            if (oldAttached)
                oldAttached.apply(this, args);
            controlledProps.forEach(({ key }) => {
                const defaultKey = `default${key.replace(/^(\w)/, (m, m1) => m1.toUpperCase())}`;
                const props = this.properties;
                if (props[key] == null) {
                    this.setData({
                        [`$init_${key}`]: props[key],
                        [key]: props[defaultKey],
                    });
                }
            });
        };
        options.methods._trigger = function (evtName, detail, opts) {
            const target = controlledProps.find((item) => item.event == evtName);
            if (target) {
                const { key } = target;
                const props = this.properties;
                if (`$init_${key}` in props) {
                    this.setData({
                        [key]: detail[key],
                    });
                }
            }
            this.triggerEvent(evtName, detail, opts);
        };
    }
    return options;
};
export const wxComponent = function wxComponent() {
    return function (constructor) {
        class WxComponent extends constructor {
        }
        const current = new WxComponent();
        current.options = current.options || {};
        if (current.options.addGlobalClass === undefined) {
            current.options.addGlobalClass = true;
        }
        const obj = toComponent(toObject(current));
        Component(obj);
    };
};
