const supertest = require('supertest');
const { app, server } = require('../../../src/app');

const closeServer = () => {
  server?.close(() => {});
};

module.exports = {
  request: supertest(app),
  closeServer,
};
