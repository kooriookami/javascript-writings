const fittingString = (string, maxWidth, fontSize, maxLine) => {
    const stringList = Array.from(string);
    const pattern = new RegExp("[\u4E00-\u9FA5]+");
    const lfList = [];
    let currentWidth = 0;
    let ellipsis = false;
    stringList.forEach((letter, index) => {
        if (pattern.test(letter)) {
            currentWidth += fontSize;
        } else {
            currentWidth += fontSize / 2;
        }
        if (currentWidth > maxWidth) {
            lfList.push(index);
            currentWidth = 0;
        }
    });
    if (lfList.length >= maxLine) {
        stringList.splice(lfList[maxLine - 1]);
        lfList.splice(maxLine - 1);
        ellipsis = true;
    }
    lfList.forEach(lf => {
        stringList.splice(lf, 0, "\n");
    });
    if (ellipsis) {
        stringList.splice(-maxLine, maxLine, "...");
    }
    return stringList.join("");
}
