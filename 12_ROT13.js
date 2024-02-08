function rot13(str) {
  let letters = str.split(''), ans = '';
  letters.forEach( (letter) => {
    if (letter.charCodeAt(0) == 32) {
      ans = ans + ' ';
    } else if (letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57 ){
      ans = ans + letter;
    }
    // a-m/A-M lettters 
    else if ( (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 109 ) ) {
      ans = ans + String.fromCharCode(( letter.charCodeAt(0) + 13 ));
    } 
    else if ( (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 77 )) {
      ans = ans + String.fromCharCode(( letter.charCodeAt(0) + 13 ));
    }
    // n-z/N-Z lettters 
    else if ( (letter.charCodeAt(0) >= 108 && letter.charCodeAt(0) < 123 ) ) {
      ans = ans + String.fromCharCode(( letter.charCodeAt(0) - 13 ));
    } 
    else if ( (letter.charCodeAt(0) >= 78 && letter.charCodeAt(0) <= 90 )) {
      ans = ans + String.fromCharCode(( letter.charCodeAt(0) - 13 ));
    } else {
      ans = ans + letter;
    }
  });
  return ans;
}