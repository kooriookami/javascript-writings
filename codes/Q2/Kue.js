class Kue {
    constructor(params) {
        this.initParams(params);
        this.initModel();
        this.initBind();
        this.initClick();
    }

    // 初始化参数
    initParams({data, methods}) {
        const _data = typeof data === 'object' ? data : {};
        const _methods = typeof methods === 'object' ? methods : {};
        this.instance = this.proxyData({
            ..._data,
            ..._methods
        });
    }

    // 代理数据
    proxyData(data) {
        return new Proxy(data, {
            get(obj, prop) {
                return obj[prop];
            },
            set(obj, prop, value) {
                obj[prop] = value;
                const modelList = document.querySelectorAll(`[k-model=${prop}]`);
                const bindList = document.querySelectorAll(`[k-bind=${prop}]`);
                modelList.forEach(element => element.value = value);
                bindList.forEach(element => element.innerText = value);
                return true;
            }
        });
    }

    // 初始化双向绑定
    initModel() {
        const modelList = document.querySelectorAll('[k-model]');
        modelList.forEach(element => {
            const modelName = element.getAttribute('k-model');
            element.value = this.instance[modelName];
            element.addEventListener('input', e => {
                this.instance[modelName] = e.target.value;
            });
        });
    }

    // 初始化单向绑定
    initBind() {
        const bindList = document.querySelectorAll('[k-bind]');
        bindList.forEach(element => {
            const bindName = element.getAttribute('k-bind');
            element.innerText = this.instance[bindName];
        });
    }

    // 初始化点击事件
    initClick() {
        const clickList = document.querySelectorAll('[k-click]');
        clickList.forEach(element => {
            const clickName = element.getAttribute('k-click');
            element.addEventListener('click', this.instance[clickName].bind(this.instance));
        })
    }
}
