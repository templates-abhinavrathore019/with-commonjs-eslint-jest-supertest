const { attrParser } = require('./attr-parser');

const parseDogAttributes = (dog) => {
  const affectionLevel = attrParser.parseAffectionLevel(dog);
  const adaptability = attrParser.parseAdaptability(dog);
  const childFriendly = attrParser.parseChildFriendly(dog);
  const dogFriendly = attrParser.parseDogFriendly(dog);
  const energyLevel = attrParser.parseEnergyLevel(dog);
  const grooming = attrParser.parseGrooming(dog);
  const healthIssues = attrParser.parseHealthIssues(dog);
  const intelligence = attrParser.parseIntelligence(dog);
  const sheddingLevel = attrParser.parseSheddingLevel(dog);
  const socialNeeds = attrParser.parseSocialNeeds(dog);
  const strangerFriendly = attrParser.parseStrangerFriendly(dog);
  const vocalisation = attrParser.parseVocalisation(dog);

  const parsedResult = {
    affectionLevel,
    adaptability,
    childFriendly,
    dogFriendly,
    energyLevel,
    grooming,
    healthIssues,
    intelligence,
    sheddingLevel,
    socialNeeds,
    strangerFriendly,
    vocalisation,
  };

  return parsedResult;
};

module.exports = { parseDogAttributes };
