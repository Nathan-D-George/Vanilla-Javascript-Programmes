function DNAStrand(dna){
  let arr = dna.split('');
  let ans = '';
  arr.forEach( (letter) => {
    if (letter == 'T') {ans = ans + 'A';}
    if (letter == 'A') {ans = ans + 'T';}
    if (letter == 'C') {ans = ans + 'G';}
    if (letter == 'G') {ans = ans + 'C';}
   });
  return ans; 
}