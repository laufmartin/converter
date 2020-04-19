/*
*
*
*       Complete the handler logic below
*       
*       
*/
const units = {
  gal: 'L',
  L: 'gal',
  lbs: 'kg',
  kg: 'lbs',
  mi: 'km',
  km: 'mi'
}


function ConvertHandler() {
  
  this.getNum = function(input) {
    const unit = this.getUnit(input);  
    if(unit==="invalid/unknown"){return "irrelevant"}

    try{
    var result = eval(input.split(unit)[0]);
    if(result === undefined){return 1}
    return result; 
    } catch(err){
      return "invalid number"
    }
    
  };
  
  this.getUnit = function(input) {
    const regEXtest = /(gal)$|(L)$|(lbs)$|(kg)$|(mi)$|(km)$/;
    let result = input.match(regEXtest);
    
    return result === null ? "invalid/unknown" : result[0];
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = units[this.getUnit(initUnit)];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result = unit;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const LToGal = 1/galToL;
    const KgToLbs = 1/lbsToKg;
    const KmToMi = 1/miToKm;
    const unit = this.getUnit(initUnit);  
    
    switch(initUnit){
      case 'gal':{
        return initNum * galToL;
      }  
      case 'L':{
        return initNum * LToGal;
      }
      case 'lbs':{
        return initNum * lbsToKg;
      }
      case 'kg':{
        return initNum * KgToLbs;
      }
      case 'km':{
        return initNum * KmToMi;
      }
      case 'mi':{
        return initNum * miToKm;
      }  
      default:{
        return null;
      }
    }
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
    
    if(initNum === 'invalid number'){return 'invalid number';}
    if(initUnit === 'invalid/unknown'){return 'invalid /unknown initial unit';}
    
    return result;
  };
  
}

module.exports = ConvertHandler;
