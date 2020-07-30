"use strict";
exports.__esModule = true;
exports.verifyParams = void 0;
function verifyParams(start, end) {
    return new Promise(function (resolve, reject) {
        if (isNaN(start) || (isNaN(end) && end !== undefined)) {
            reject("Parameters must be numbers");
        }
        else if (end === undefined) {
            resolve({
                start: start,
                end: start
            });
        }
        resolve({
            start: start,
            end: end
        });
    });
}
exports.verifyParams = verifyParams;
