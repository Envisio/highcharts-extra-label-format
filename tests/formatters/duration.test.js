import formatDuration from '../../src/formatters/duration';

describe('formatDuration', () => {
  describe('seconds', () => {
    test('total seconds less than a minute', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('SECOND', 'TOTAL')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 1001;
      expect(formatDuration('SECOND', 'TOTAL')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 30632;
      expect(formatDuration('SECOND', 'TOTAL')(durationInMilliseconds)).toEqual('31');

      durationInMilliseconds = 59999;
      expect(formatDuration('SECOND', 'TOTAL')(durationInMilliseconds)).toEqual('60');
    })

    test('total seconds more than a minute', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 60000;
      expect(formatDuration('SECOND', 'TOTAL')(durationInMilliseconds)).toEqual('60');

      durationInMilliseconds = 61324;
      expect(formatDuration('SECOND', 'TOTAL')(durationInMilliseconds)).toEqual('61');

      durationInMilliseconds = 120678;
      expect(formatDuration('SECOND', 'TOTAL')(durationInMilliseconds)).toEqual('121');

      durationInMilliseconds = 86400123;
      expect(formatDuration('SECOND', 'TOTAL')(durationInMilliseconds)).toEqual('86400');
    })

    test('seconds part less than a minute', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('SECOND', 'PART')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 1001;
      expect(formatDuration('SECOND', 'PART')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 30867;
      expect(formatDuration('SECOND', 'PART')(durationInMilliseconds)).toEqual('30');

      durationInMilliseconds = 59123;
      expect(formatDuration('SECOND', 'PART')(durationInMilliseconds)).toEqual('59');
    })

    test('seconds part more than a minute', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 60012;
      expect(formatDuration('SECOND', 'PART')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 61641;
      expect(formatDuration('SECOND', 'PART')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 150456;
      expect(formatDuration('SECOND', 'PART')(durationInMilliseconds)).toEqual('30');

      durationInMilliseconds = 86459000;
      expect(formatDuration('SECOND', 'PART')(durationInMilliseconds)).toEqual('59');
    })

    test('seconds part without ceiling less than a minute', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('SECOND', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 1001;
      expect(formatDuration('SECOND', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 30867;
      expect(formatDuration('SECOND', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('30');

      durationInMilliseconds = 59123;
      expect(formatDuration('SECOND', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('59');
    })

    test('seconds part without ceiling more than a minute', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 60012;
      expect(formatDuration('SECOND', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('60');

      durationInMilliseconds = 61641;
      expect(formatDuration('SECOND', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('61');

      durationInMilliseconds = 150000;
      expect(formatDuration('SECOND', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('150');

      durationInMilliseconds = 86459123;
      expect(formatDuration('SECOND', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('86459');
    })

  })

  describe('minutes', () => {
    test('total minutes less than a hour', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('MINUTE', 'TOTAL')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 30000;
      expect(formatDuration('MINUTE', 'TOTAL')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 1840000;
      expect(formatDuration('MINUTE', 'TOTAL')(durationInMilliseconds)).toEqual('31');

      durationInMilliseconds = 3542345;
      expect(formatDuration('MINUTE', 'TOTAL')(durationInMilliseconds)).toEqual('59');
    })

    test('total minutes more than a hour', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 3600000
      ;
      expect(formatDuration('MINUTE', 'TOTAL')(durationInMilliseconds)).toEqual('60');

      durationInMilliseconds = 3660012
      ;
      expect(formatDuration('MINUTE', 'TOTAL')(durationInMilliseconds)).toEqual('61');

      durationInMilliseconds = 7212345;
      ;
      expect(formatDuration('MINUTE', 'TOTAL')(durationInMilliseconds)).toEqual('120');

      durationInMilliseconds = 5184000000;
      expect(formatDuration('MINUTE', 'TOTAL')(durationInMilliseconds)).toEqual('86400');
    })

    test('minutes part less than a hour', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('MINUTE', 'PART')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 60000;
      expect(formatDuration('MINUTE', 'PART')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 1800098;
      expect(formatDuration('MINUTE', 'PART')(durationInMilliseconds)).toEqual('30');

      durationInMilliseconds = 3541234;
      expect(formatDuration('MINUTE', 'PART')(durationInMilliseconds)).toEqual('59');
    })

    test('minutes part more than a hour', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 3609010
      ;
      expect(formatDuration('MINUTE', 'PART')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 3660000
      ;
      expect(formatDuration('MINUTE', 'PART')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 9059999;
      expect(formatDuration('MINUTE', 'PART')(durationInMilliseconds)).toEqual('30');
    })


    test('minutes part without ceiling less than a hour', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('MINUTE', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 60000;
      expect(formatDuration('MINUTE', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 1800098;
      expect(formatDuration('MINUTE', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('30');

      durationInMilliseconds = 3541234;
      expect(formatDuration('MINUTE', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('59');
    })

    test('minutes part without ceiling more than a hour', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 3659019
      ;
      expect(formatDuration('MINUTE', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('60');

      durationInMilliseconds = 3660000
      ;
      expect(formatDuration('MINUTE', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('61');

      durationInMilliseconds = 9059999;
      expect(formatDuration('MINUTE', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('150');
    })
  })

  describe('hours', () => {
    test('total hours less than a day', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('HOUR', 'TOTAL')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 5399999;
      expect(formatDuration('HOUR', 'TOTAL')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 43212345;
      expect(formatDuration('HOUR', 'TOTAL')(durationInMilliseconds)).toEqual('12');

      durationInMilliseconds = 82800000;
      expect(formatDuration('HOUR', 'TOTAL')(durationInMilliseconds)).toEqual('23');
    })

    test('total hours more than a day', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 86600000;
      expect(formatDuration('HOUR', 'TOTAL')(durationInMilliseconds)).toEqual('24');

      durationInMilliseconds = 89999999;
      expect(formatDuration('HOUR', 'TOTAL')(durationInMilliseconds)).toEqual('25');

      durationInMilliseconds = 172800000;
      expect(formatDuration('HOUR', 'TOTAL')(durationInMilliseconds)).toEqual('48');
    })

    test('hours part less than a day', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('HOUR', 'PART')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 7199999
      ;
      expect(formatDuration('HOUR', 'PART')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 43212345
      ;
      expect(formatDuration('HOUR', 'PART')(durationInMilliseconds)).toEqual('12');

      durationInMilliseconds = 82800000;
      expect(formatDuration('HOUR', 'PART')(durationInMilliseconds)).toEqual('23');
    })

    test('hours part more than a day', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 86400000;
      expect(formatDuration('HOUR', 'PART')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 91189493;
      expect(formatDuration('HOUR', 'PART')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 10667547250;
      expect(formatDuration('HOUR', 'PART')(durationInMilliseconds)).toEqual('11');
    })

    test('hours part without ceiling less than a day', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('HOUR', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 7199999
      ;
      expect(formatDuration('HOUR', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 43212345
      ;
      expect(formatDuration('HOUR', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('12');

      durationInMilliseconds = 82800000;
      expect(formatDuration('HOUR', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('23');
    })

    test('hours part without ceiling more than a day', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 86400000;
      expect(formatDuration('HOUR', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('24');

      durationInMilliseconds = 91189493;
      expect(formatDuration('HOUR', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('25');

      durationInMilliseconds = 1116417225;
      expect(formatDuration('HOUR', 'PART_WITHOUT_CEILING')(durationInMilliseconds)).toEqual('310');
    })
  })

  describe('days', () => {
    test('total days', () => {
      let durationInMilliseconds;

      durationInMilliseconds = 0;
      expect(formatDuration('DAY', 'TOTAL')(durationInMilliseconds)).toEqual('00');

      durationInMilliseconds = 86400000;
      expect(formatDuration('DAY', 'TOTAL')(durationInMilliseconds)).toEqual('01');

      durationInMilliseconds = 604800000;
      expect(formatDuration('DAY', 'TOTAL')(durationInMilliseconds)).toEqual('07');

      durationInMilliseconds = 31881600000;
      expect(formatDuration('DAY', 'TOTAL')(durationInMilliseconds)).toEqual('369');
    })
  })
});