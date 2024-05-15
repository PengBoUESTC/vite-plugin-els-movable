'use strict';

const bindForEles = (classPrefix, bindDrag, bindTouch) => {
    const selectors = classPrefix
        .split(',')
        .map((prefix) => `[class^=${prefix}]`)
        .join(',');
    const els = [...document.querySelectorAll(selectors)];
    els.forEach((ele) => {
        bindTouch(ele, {});
        bindDrag(ele, {});
    });
};

exports.bindForEles = bindForEles;
