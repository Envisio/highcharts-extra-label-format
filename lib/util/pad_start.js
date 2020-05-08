"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = padStart;

function padStart(str, length, paddingChar) {
  var result = str.toString();

  while (result.length < length) {
    result = paddingChar.toString() + str;
  }

  return result;
}

;
//# sourceMappingURL=pad_start.js.map