"use strict";
exports.__esModule = true;
exports.getColorByStatus = exports.getColorByReqLength = void 0;
var chalk = require('chalk');
function getColorByReqLength(length) {
    if (length >= 20) {
        return chalk.red(length + "ms");
    }
    if (length >= 10) {
        return chalk.yellow(length + "ms");
    }
    if (length >= 0) {
        return chalk.green(length + "ms");
    }
    return '';
}
exports.getColorByReqLength = getColorByReqLength;
function getColorByStatus(status) {
    if (status >= 400) {
        return chalk.red(status.toString());
    }
    if (status < 400) {
        return chalk.green(status.toString());
    }
    return '';
}
exports.getColorByStatus = getColorByStatus;
