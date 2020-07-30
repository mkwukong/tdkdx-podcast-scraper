"use strict";
exports.__esModule = true;
exports.header = exports.delay = void 0;
function delay(ms) {
    new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.delay = delay;
var USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0";
exports.header = {
    referrer: "https://tdkdx.com",
    accept: "*/*",
    "user-agent": USER_AGENT,
    "accept-language": "en-GB,en;q=0.5"
};
