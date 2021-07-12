class Cash {
    constructor(...v) {
        this.value = v.reduce((p, c) => p + c, 0);
    }

    add(...v) {
        return new Cash(v.reduce((p, c) => p + c, this.value));
    }

    static add(...v) {
        return new Cash(v.reduce((p, c) => p + c, 0));
    }

    valueOf() {
        let value = this.value;
        let flag = true;
        while (flag) {
            value?.hasOwnProperty('value') ? value = value.value : flag = false;
        }
        return value;
    }

    toString() {
        if (this.value <= 0) return 0;
        const fen = this.value % 10;
        const jiao = Math.floor(this.value / 10) % 10;
        const yuan = Math.floor(this.value / 100);
        return `${yuan}元${jiao}角${fen}分`;
    }
}
