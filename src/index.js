import formatDuration from './formatters/duration';

const DURATION_TYPE_KEY = {
  s: 'SECOND',
  m: 'MINUTE',
  h: 'HOUR',
  d: 'DAY'
};

const DURATION_MODIFIER = {
  p: 'PART',                    // gets a part of duration, eg. second part
  c: 'PART_WITHOUT_CEILING',    // gets a part of duration without a limit, eg. seconds part that can be > a minute
  t: 'TOTAL',                   // gets total number of a duration part rounded to nearest integer
};

export default function HCAdditionalFormatting(H) {
  const durationFormats = Object.keys(DURATION_TYPE_KEY).reduce((acc, durationKey) => {
    for (const durationModKey in DURATION_MODIFIER) {
      acc[`D${durationKey}${durationModKey}`] = formatDuration(
        DURATION_TYPE_KEY[durationKey],
        DURATION_MODIFIER[durationModKey],
      );
    }

    return acc;
  }, {});

  H.dateFormats = {
    DN: (duration) => duration < 0 ? '-' : '',
    ...durationFormats,
    ...H.dateFormats,
  };
};
