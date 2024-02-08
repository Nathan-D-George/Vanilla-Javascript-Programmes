function comp(array1, array2){
  if (array1 == [] || array2 == [] || array1 == null || array2 == null) { return false; }
  let flag = true;
  
  array1.forEach( (num) => {
    if ( array2.includes(num*num) ){ array2.splice(array2.indexOf(num*num),1); }
    else { flag = false }
  });  
  return flag;
}