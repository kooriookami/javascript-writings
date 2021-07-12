class Cash {
    constructor(v) {
        this.value = v;
    }

    add(v) {
        return new Cash(v + this.value);
    }

    static add(v1, v2) {
        return new Cash(v1 + v2);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        if (this.value <= 0) return 0;
        const fen = this.value % 10;
        const jiao = Math.floor(this.value / 10) % 10;
        const yuan = Math.floor(this.value / 100);
        return `${yuan}元${jiao}角${fen}分`;
    }
}
