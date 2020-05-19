import padStart from '../util/pad_start';

const PART_LENGTH = {
  SECOND: 1000,
  MINUTE: 60000,
  HOUR: 3600000,
  DAY: 86400000,
}

const PART_LIMIT = {
  SECOND: 60,
  MINUTE: 60,
  HOUR: 24,
}

const formatDurationTotal = (durationType) => (duration) => {
  const absUnitMillisec = Math.abs(parseInt(duration), 10);
  const totalDuration = absUnitMillisec / PART_LENGTH[durationType];

  return totalDuration;
}

export default (durationType, modifier) => (duration) => {
  const totalDuration = formatDurationTotal(durationType)(duration);

  let durationPart;
  if (modifier === 'PART' || modifier === 'PART_WITHOUT_CEILING') {
    durationPart = Math.floor(totalDuration);
  } else {
    durationPart = Math.round(totalDuration);
  }

  if (modifier === 'PART' && PART_LIMIT[durationType]) {
    durationPart = durationPart % PART_LIMIT[durationType];
  }

  return padStart(durationPart, 2, 0);
}