"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HCAdditionalFormatting;

var _duration = _interopRequireDefault(require("./formatters/duration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DURATION_TYPE_KEY = {
  s: 'SECOND',
  m: 'MINUTE',
  h: 'HOUR',
  d: 'DAY'
};
var DURATION_MODIFIER = {
  p: 'PART',
  // gets a part of duration, eg. second part
  c: 'PART_WITHOUT_CEILING',
  // gets a part of duration without a limit, eg. seconds part that can be > a minute
  t: 'TOTAL' // gets total number of a duration part rounded to nearest integer

};

function HCAdditionalFormatting(H) {
  var durationFormats = Object.keys(DURATION_TYPE_KEY).reduce(function (acc, durationKey) {
    for (var durationModKey in DURATION_MODIFIER) {
      acc["D".concat(durationKey).concat(durationModKey)] = (0, _duration["default"])(DURATION_TYPE_KEY[durationKey], DURATION_MODIFIER[durationModKey]);
    }

    return acc;
  }, {});
  H.dateFormats = _objectSpread(_objectSpread({
    DN: function DN(duration) {
      return duration < 0 ? '-' : '';
    }
  }, durationFormats), H.dateFormats);
}

;
//# sourceMappingURL=index.js.map