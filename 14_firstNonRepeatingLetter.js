function firstNonRepatingLetter(s) {
  let letters = s.split('');
  let ans     = null;
  for (let i = 0; i < s.length; i++){
    let temp = s.toLowerCase();
    temp = temp.replace(letters[i], '');
    if ( !temp.includes(letters[i]) ){ ans = i; break; }
  }
  if ( ans != null ) 
    { return s[ans]; }
  else 
    { return ""; }
}