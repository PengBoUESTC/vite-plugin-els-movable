const bindForEles = (classPrefix, bindMove) => {
    const els = [...document.querySelectorAll(`[class^=${classPrefix}]`)];
    els.forEach(ele => {
        bindMove(ele, {});
    });
};

export { bindForEles };
