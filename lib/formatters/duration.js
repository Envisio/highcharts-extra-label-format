"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatDuration;

var _pad_start = _interopRequireDefault(require("../util/pad_start"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PART_LENGTH = {
  SECOND: 1000,
  MINUTE: 60000,
  HOUR: 3600000,
  DAY: 86400000
};
var PART_LIMIT = {
  SECOND: 60,
  MINUTE: 60,
  HOUR: 24
};

var formatDurationTotal = function formatDurationTotal(durationType) {
  return function (duration) {
    var absUnitMillisec = Math.abs(parseInt(duration), 10);
    var totalDuration = absUnitMillisec / PART_LENGTH[durationType];
    return totalDuration;
  };
};

function formatDuration(durationType, modifier) {
  return function (duration) {
    var totalDuration = formatDurationTotal(durationType)(duration);
    var durationPart;

    if (modifier === 'PART' || modifier === 'PART_WITHOUT_CEILING') {
      durationPart = Math.floor(totalDuration);
    } else {
      durationPart = Math.round(totalDuration);
    }

    if (modifier === 'PART' && PART_LIMIT[durationType]) {
      durationPart = durationPart % PART_LIMIT[durationType];
    }

    return (0, _pad_start["default"])(durationPart, 2, 0);
  };
}

; // export default function formatDuration(timestamp) {
//   var numberDuration = timestamp;
//   var unixSec = parseInt(numberDuration, 10) / 1000;
//   var negative = unixSec < 0;
//   var absUnixSec = negative ? -unixSec : unixSec;
//   var totalMinutes = Math.floor(absUnixSec / 60);
//   var seconds = absUnixSec % 60;
//   var hours = Math.floor(totalMinutes / 60);
//   var minutes = totalMinutes % 60;
//   return (negative ? '-' : '') + padStart(hours, 2, 0) + ":" + padStart(minutes, 2, 0) + ":" + padStart(seconds, 2, 0);
// };
//# sourceMappingURL=duration.js.map