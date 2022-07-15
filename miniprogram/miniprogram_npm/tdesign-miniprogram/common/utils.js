export const debounce = function (func, wait = 500) {
    let timerId;
    return function (...rest) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            func.apply(this, rest);
        }, wait);
    };
};
export const classNames = function (...args) {
    const hasOwn = {}.hasOwnProperty;
    const classes = [];
    args.forEach((arg) => {
        if (!arg)
            return;
        const argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg) && arg.length) {
            const inner = classNames(...arg);
            if (inner) {
                classes.push(inner);
            }
        }
        else if (argType === 'object') {
            for (const key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    });
    return classes.join(' ');
};
export const styles = function (styleObj) {
    return Object.keys(styleObj)
        .map((styleKey) => `${styleKey}: ${styleObj[styleKey]}`)
        .join('; ');
};
export const requestAnimationFrame = function (cb) {
    return wx
        .createSelectorQuery()
        .selectViewport()
        .boundingClientRect()
        .exec(() => {
        cb();
    });
};
export const getRect = function (context, selector) {
    return new Promise((resolve) => {
        wx.createSelectorQuery()
            .in(context)
            .select(selector)
            .boundingClientRect()
            .exec((rect = []) => resolve(rect[0]));
    });
};
const isDef = function (value) {
    return value !== undefined && value !== null;
};
export const isNumber = function (value) {
    return /^\d+(\.\d+)?$/.test(value);
};
export const addUnit = function (value) {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumber(value) ? `${value}px` : value;
};
export const getCharacterLength = (str, maxCharacter) => {
    const hasMaxCharacter = typeof maxCharacter === 'number';
    if (!str || str.length === 0) {
        if (hasMaxCharacter) {
            return {
                length: 0,
                characters: str,
            };
        }
        return {
            length: 0,
            characters: '',
        };
    }
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        let currentStringLength = 0;
        if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
            currentStringLength = 2;
        }
        else {
            currentStringLength = 1;
        }
        if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
            return {
                length: len,
                characters: str.slice(0, i),
            };
        }
        len += currentStringLength;
    }
    if (hasMaxCharacter) {
        return {
            length: len,
            characters: str,
        };
    }
    return {
        length: len,
        characters: '',
    };
};
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
export const equal = (v1, v2) => {
    if (Array.isArray(v1) && Array.isArray(v2)) {
        if (v1.length !== v2.length)
            return false;
        return v1.every((item, index) => equal(item, v2[index]));
    }
    return v1 === v2;
};
export const clone = (val) => {
    if (Array.isArray(val)) {
        return val.map((item) => clone(item));
    }
    return val;
};
