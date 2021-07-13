const getStraightDotList = (dot1, dot2) => {
    let x1 = dot1.x;
    let y1 = dot1.y;
    let x2 = dot2.x;
    let y2 = dot2.y;

    const dotList = [];

    const k = x1 === x2 ? 0 : (y2 - y1) / (x2 - x1);
    const b = y1 - k * x1;
    const fx = x =>  k * x + b;
    const fy = y => k ? (y - b) / k : b;
    const getDotList = () => [...new Set(dotList.map(v => JSON.stringify(v)))].map(v => JSON.parse(v));

    if (x1 > x2) {
        [x1, x2] = [x2, x1];
    }
    if (y1 > y2) {
        [y1, y2] = [y2, y1];
    }
    if (x1 === x2) {
        for (let y = y1; y <= y2; y++) {
            dotList.push({x: x1, y});
        }
        return getDotList();
    } else {
        for (let x = x1; x <= x2; x++) {
            dotList.push({x, y: Math.ceil(fx(x))});
        }
    }
    if (y1 === y2) {
        for (let x = x1; x <= x2; x++) {
            dotList.push({x, y: y1});
        }
        return getDotList();
    } else {
        for (let y = y1; y <= y2; y++) {
            dotList.push({x: Math.ceil(fy(y)), y});
        }
    }

    return getDotList();
};

console.log(getStraightDotList({x: 12, y: 2}, {x: 12, y: 3}));
