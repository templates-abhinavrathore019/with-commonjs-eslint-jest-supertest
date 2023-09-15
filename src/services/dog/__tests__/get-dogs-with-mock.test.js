// Enough if we are using __mock__ ###### Way 1 #######
// jest.mock('../../../helpers/http-request');

// Required if we are using __mock__ ###### Way 2 #######
jest.mock('../../../helpers/http-request', () => {
  return {
    HttpRequest: jest.fn(),
  };
});

const { HttpRequest } = require('../../../helpers/http-request/index');

const { getDogs } = require('../get-dogs');

describe('get_cats_list', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should return cats list', async () => {
    const page = 1;
    const limit = 10;

    const params = {
      page,
      limit,
      has_breeds: 1,
    };

    const expectedResponse = {
      httpStatus: 200,
      apiStatus: 1,
      message: 'success',
      data: {
        count: 10,
        dogs: [
          {
            id: 'zlpgGWqN7',
            url: 'https://cdn2.thecatapi.com/images/zlpgGWqN7.jpg',
            width: 3840,
            height: 2400,
          },
          {
            id: 'LSaDk6OjY',
            url: 'https://cdn2.thecatapi.com/images/LSaDk6OjY.jpg',
            width: 1080,
            height: 1080,
          },
        ],
      },
    };

    const mockGetRequestSuccess = () => {
      return {
        error: undefined,
        response: [
          {
            id: 'zlpgGWqN7',
            url: 'https://cdn2.thecatapi.com/images/zlpgGWqN7.jpg',
            width: 3840,
            height: 2400,
          },
          {
            id: 'LSaDk6OjY',
            url: 'https://cdn2.thecatapi.com/images/LSaDk6OjY.jpg',
            width: 1080,
            height: 1080,
          },
        ],
      };
    };

    HttpRequest.mockImplementationOnce(() => {
      return {
        setBaseUrl: jest.fn().mockReturnThis(),
        setPath: jest.fn().mockReturnThis(),
        addReqParams: jest.fn().mockReturnThis(),
        setLogger: jest.fn().mockReturnThis(),
        get: jest.fn().mockImplementationOnce(() => {
          return mockGetRequestSuccess();
        }),
      };
    });

    const result = await getDogs(params);

    expect(result).toStrictEqual(expectedResponse);
    expect(result.data.dogs.length).toBe(2);
  });

  it('should handle error', async () => {
    const page = 1;
    const limit = 10;

    const params = {
      page,
      limit,
      has_breeds: 1,
    };

    const expectedResponse = {
      httpStatus: 200,
      apiStatus: 0,
      message: 'No results found',
      data: {
        count: 0,
        dogs: [],
      },
    };

    const mockGetRequestFailed = () => {
      return {
        error: new Error('Should fail'),
        response: undefined,
      };
    };

    HttpRequest.mockImplementationOnce(() => {
      return {
        setBaseUrl: jest.fn().mockReturnThis(),
        setPath: jest.fn().mockReturnThis(),
        addReqParams: jest.fn().mockReturnThis(),
        setLogger: jest.fn().mockReturnThis(),
        get: jest.fn().mockImplementationOnce(() => {
          return mockGetRequestFailed();
        }),
      };
    });

    const result = await getDogs(params);

    expect(result).toStrictEqual(expectedResponse);
    expect(result.data.dogs.length).toBe(0);
  });
});
