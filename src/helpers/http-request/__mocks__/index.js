// ###### Way 1 #######
// returning mocked object
// in "get-dogs-with-mock-test"
// HttpRequest.mockImplementationOnce will stop working as there is no such method
// in HttpRequest

// const HttpRequest = jest.fn().mockImplementation(() => {
//   return {
//     setBaseUrl: jest.fn().mockReturnThis(),
//     setPath: jest.fn().mockReturnThis(),
//     addReqParams: jest.fn().mockReturnThis(),
//     setLogger: jest.fn().mockReturnThis(),
//     get: jest.fn(),
//   };
// });

// module.exports = { HttpRequest };

// ###### Way 2 #######
// returning actual object
// mocked function won't be available in it
// in "get-dogs-with-mock-test"
// HttpRequest.mockImplementationOnce will stop working as there is no such method
// in HttpRequest

const { requestDelete } = require('../http/http-delete');
const { requestGet } = require('../http/http-get');
const { requestPatch } = require('../http/http-patch');
const { requestPost } = require('../http/http-post');
const { requestPut } = require('../http/http-put');
const { requestMultipart } = require('../http/http-multipart');
const { logger } = require('../../../utils/logger');

class HttpRequest {
  baseUrl = '';

  path = '';

  headers = {};

  reqParams = {};

  loggerValue;

  getUrl = () => `${this.baseUrl}${this.path}`;

  getParams = () => {
    const params = {
      url: this.getUrl(),
      headers: this.headers,
      reqParams: this.reqParams,
      logger: this.loggerValue,
    };

    return params;
  };

  setBaseUrl() {
    logger.debug('__mock__[setBaseUrl]');
    return this;
  }

  setPath() {
    logger.debug('__mock__[setBaseUrl]');
    return this;
  }

  setLogger() {
    logger.debug('__mock__[setLogger]');
    return this;
  }

  addHeaders() {
    logger.debug('__mock__[addHeaders]');
    return this;
  }

  addReqParams() {
    logger.debug('__mock__[addReqParams]');
    return this;
  }

  delete() {
    logger.debug('__mock__[delete]');
    return requestDelete(this.getParams());
  }

  get() {
    logger.debug('__mock__[get]');
    return requestGet(this.getParams());
  }

  patch() {
    logger.debug('__mock__[patch]');
    return requestPatch(this.getParams());
  }

  post() {
    logger.debug('__mock__[post]');
    return requestPost(this.getParams());
  }

  put() {
    logger.debug('__mock__[put]');
    return requestPut(this.getParams());
  }

  multipart() {
    logger.debug('__mock__[multipart]');
    return requestMultipart(this.getParams());
  }
}

module.exports = { HttpRequest };
