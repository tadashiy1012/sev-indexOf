module.exports = function(tgtStrisng, tgtValue, times) {
  let result = -1;
  for (let i = times; i > 0 || (i > 1 && result === -1); i--) {
    result = tgtStrisng.indexOf(tgtValue, result + 1);
  }
  return result;
};