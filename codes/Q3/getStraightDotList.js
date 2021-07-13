const getStraightDotList = (dot1, dot2) => {
    let x1 = dot1.x;
    let y1 = dot1.y;
    let x2 = dot2.x;
    let y2 = dot2.y;

    const k = x1 === x2 ? 0 : (y2 - y1) / (x2 - x1);
    const b = y1 - k * x1;
    const fx = x => y1 === y2 ? y1 : k * x + b;
    const fy = y => x1 === x2 || !k ? x1 : (y - b) / k;

    const dotList = [];

    if (x1 > x2) {
        [x1, x2] = [x2, x1];
    }
    for (let x = x1; x <= x2; x++) {
        dotList.push({x, y: fx(x) >= 0 ? Math.ceil(fx(x)) : Math.floor(fx(x))});
    }
    if (y1 > y2) {
        [y1, y2] = [y2, y1];
    }
    for (let y = y1; y <= y2; y++) {
        dotList.push({x: fy(y) >= 0 ? Math.ceil(fy(y)) : Math.floor(fy(y)), y});
    }

    return [...new Set(dotList.map(v => JSON.stringify(v)))].map(v => JSON.parse(v));
};
