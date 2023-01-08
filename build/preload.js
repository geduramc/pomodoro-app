"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const el = document.getElementById(selector);
        if (el != null)
            el.innerText = text;
    };
    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});
