var removeVowels = function(S) {
  var newString = "";
  var currentCharacter;
  
  for ( var i = 0; i < S.length; i++) {
      currentCharacter = S[i];
      if ( currentCharacter !== 'a' && currentCharacter !== 'e' && currentCharacter !== 'i' && currentCharacter !== 'o' && currentCharacter !== 'u' ) {
        newString += S[i];
      } 
  }

  return newString;
};