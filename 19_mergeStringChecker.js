function isMerge(s, part1, part2) {
  let slen = s.length;
  if (s === "" && ( part1 !== "" || part2 !== "") ) {return false; }
  let arr1 = part1.split(''), arr2 = part2.split('');
  arr1.forEach( (letter) => { s = s.replace(letter, ''); });
  arr2.forEach( (letter) => { s = s.replace(letter, ''); });
  console.log('s = ',s, 'p1 = ', part1, 'p2 = ',part2);
  if (s === "" && (part1.length + part2.length === slen)){
    return true;
  } else { 
    return false;
  }
}