const removeUAH = (str) => {
  const removeSpaces = str.replace(/\s/g, "");
  const removeGRNdotted = removeSpaces.replace(/[гГнНрР]+\./g, "");
  return removeGRNdotted.replace(/[гГнНрР]+/g, "");
};

export default removeUAH;
