const originalModule = jest.requireActual('../attr-parser');

module.exports = {
  ...originalModule,
  parseChildFriendly: jest.fn(() => {
    return 'parseChildFriendly: CAT';
  }),
  parseDogFriendly: jest.fn(() => {
    return 'parseDogFriendly: CAT';
  }),
  parseEnergyLevel: jest.fn(() => {
    return 'parseEnergyLevel: CAT';
  }),
  parseGrooming: jest.fn(() => {
    return 'parseGrooming: CAT';
  }),
  parseHealthIssues: jest.fn(() => {
    return 'parseHealthIssues: CAT';
  }),
  parseIntelligence: jest.fn(() => {
    return 'parseIntelligence: CAT';
  }),
  parseSheddingLevel: jest.fn(() => {
    return 'parseSheddingLevel: CAT';
  }),
  parseSocialNeeds: jest.fn(() => {
    return 'parseSocialNeeds: CAT';
  }),
  parseStrangerFriendly: jest.fn(() => {
    return 'parseStrangerFriendly: CAT';
  }),
  parseVocalisation: jest.fn(() => {
    return 'parseVocalisation: CAT';
  }),
};
