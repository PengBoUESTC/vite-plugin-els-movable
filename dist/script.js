'use strict';

const bindForEles = (classPrefix, bindMove) => {
    const selectors = classPrefix.split(',').map(prefix => `[class^=${prefix}]`).join(',');
    const els = [...document.querySelectorAll(selectors)];
    els.forEach(ele => {
        bindMove(ele, {});
    });
};

exports.bindForEles = bindForEles;
