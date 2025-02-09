const joinNames = namesObj => {
  if (namesObj.length === 0) return "";
  if (namesObj.length === 1) return namesObj[0].name;
  const result = namesObj.map(person => person.name);
  const addOn = result.pop();
  return `${result.join(", ")} & ${addOn}`;
};

module.exports = joinNames;
