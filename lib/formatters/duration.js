"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _default = function _default(durationType, modifier) {
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
};

exports["default"] = _default;
//# sourceMappingURL=duration.js.map