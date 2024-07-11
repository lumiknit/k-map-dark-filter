// ==UserScript==
// @name         m-kakao-dark
// @namespace    https://github.com/lumiknit/k-map-dark-mode
// @version      0.1
// @description  Change Korean Map Service to Dark Theme
// @author       lumiknit (aasr4r4@gmail.com)
// @match        *://*.map.kakao.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        const interval = setInterval(() => {
            const elem = document.querySelector('div#maps');
            if (elem === null) {
                return;
            }
            elem.style.filter = 'brightness(80%) contrast(150%) hue-rotate(180deg) invert()';
            clearInterval(interval);
        }, 100);
    }
})();
