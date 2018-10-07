module.exports = function getZerosCount(number, base) {
  let zeroCount = number; //to avoid unnecessary 'if', just use default large enough value 
  let currentBase = base;
  
  for(let factor = 2; factor <= base; factor++){
    if(currentBase % factor === 0){
      let factorDegree = 0;
      while(currentBase % factor === 0){
        currentBase = currentBase / factor;
        factorDegree++;
      }
      let zeros = 0;
      let degree = factor;
      let tempDivision = number / degree;
      while(tempDivision >= 1){
        zeros += Math.floor(tempDivision);
        degree *= factor;
        tempDivision = number / degree;
      }
      zeroCount = Math.min(zeroCount, Math.floor(zeros / factorDegree));
    }
  }
  return zeroCount;
}