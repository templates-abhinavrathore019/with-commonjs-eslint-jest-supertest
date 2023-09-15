const { HttpRequest } = require('../../helpers/http-request');
const { apiConfig } = require('../../configs/api');
const { API } = require('../../constants');
const {
  ApiStatusCodes,
  HTTPStatusCodes,
} = require('../../constants');
const { logger } = require('../../utils/logger');

// total records available in db
const TOTAL_RECORDS = 10;

const getCats = async (params) => {
  const {
    page = 1,
    limit = 10,
  } = params;

  const res = {
    httpStatus: HTTPStatusCodes.OK,
    apiStatus: ApiStatusCodes.SUCCESS,
    message: 'success',
    data: {
      totalCount: TOTAL_RECORDS,
      cats: [],
    },
  };

  const { response, error } = await new HttpRequest()
    .setBaseUrl(apiConfig.baseUrl)
    .setPath(API.LIST)
    .addReqParams({
      page,
      limit,
      has_breeds: 1,
    })
    .setLogger(logger)
    .get();

  if (error) {
    res.httpStatus = HTTPStatusCodes.OK;
    res.apiStatus = ApiStatusCodes.FAILED;
    res.message = 'No results found';
    res.data.totalCount = 0;
    res.data.cats = [];
    return res;
  }

  res.data.cats = response;
  return res;
};

module.exports = {
  getCats,
};
