"use strict";
exports.__esModule = true;
exports.delay = void 0;
function delay(ms) {
    new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.delay = delay;
