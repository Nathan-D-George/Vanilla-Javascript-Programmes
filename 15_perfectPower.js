var isPP = function(n) {
  let m,k;
  for (let i = 0; i <= n/2; i++){
    for (let j = 0; j <= n/2; j++) {
      if ( i**j === n) {
        m = i;
        k = j;
      }
    }
  }
  
  if (m === undefined) {
    return null;
  }
  return [m,k];
}