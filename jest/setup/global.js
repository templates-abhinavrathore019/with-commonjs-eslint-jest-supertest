const { request, closeServer } = require('./global/supertest');

module.exports = () => {
  global.request = request;
  global.closeServer = closeServer;
};
