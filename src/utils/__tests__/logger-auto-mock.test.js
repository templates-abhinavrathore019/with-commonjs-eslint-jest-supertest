jest.mock('../logger');
const { logger } = require('../logger');

it('should not print hello', async () => {
  logger.debug('Hello World');
});
