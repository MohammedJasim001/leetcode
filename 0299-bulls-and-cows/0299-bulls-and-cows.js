/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
       bulls = 0;
   cows = 0;
   numbers = Array(10).fill(0);
   c = []
  for ( i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) bulls++;
    else {
      if (numbers[secret[i]] < 0) cows++; 
      if (numbers[guess[i]] > 0) cows++
      numbers[secret[i]]++
      numbers[guess[i]]--
    }
  }
  return `${bulls}A${cows}B`;
};