/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
      c=[]
    c.push(celsius+ 273.15) 
  c.push(celsius * 1.80 + 32.00)
  return c
};