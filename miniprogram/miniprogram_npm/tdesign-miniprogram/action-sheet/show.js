export var ActionSheetTheme;
(function (ActionSheetTheme) {
    ActionSheetTheme["List"] = "list";
    ActionSheetTheme["Grid"] = "grid";
})(ActionSheetTheme || (ActionSheetTheme = {}));
const getInstance = function (context, selector = '#t-action-sheet') {
    if (!context) {
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        context = page.$$basePage || page;
    }
    const instance = context === null || context === void 0 ? void 0 : context.selectComponent(selector);
    if (!instance) {
        return null;
    }
    return instance;
};
export const show = function (options) {
    const { context, selector } = options;
    const instance = getInstance(context, selector);
    if (!instance) {
        return Promise.reject(new Error('未找到ActionSheet组件, 请检查selector是否正确'));
    }
    instance.resetData(() => {
        instance.setData(Object.assign({}, options), instance.show);
    });
    return instance;
};
