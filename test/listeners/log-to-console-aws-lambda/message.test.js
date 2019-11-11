import * as logToConsoleAwsLambdaModule from '../../../src/listeners/log-to-console-aws-lambda';
import _ from 'lodash-firecloud';

import {
  logger
} from './logger';

describe('logToConsoleAwsLambda listener', function() {
  it('should print a message', async function() {
    let spyFormat = jest.spyOn(logToConsoleAwsLambdaModule, 'format');

    let loggerCallArgs = [
      'This is a message.'
    ];

    spyFormat.mockImplementationOnce(function(consoleFun, format, ...formatArgs) {
      let [
        _now,
        _level,
        _src,
        msg
      ] = formatArgs;

      let cond = _.startsWith(msg, loggerCallArgs[0]);

      if (!cond) {
        // eslint-disable-next-line no-console
        console.error({
          consoleFun,
          format,
          formatArgs
        });
      }
      expect(cond).toBe(true);
    });

    await logger.error(...loggerCallArgs);
    expect(spyFormat).toHaveBeenCalledTimes(1);
  });
});