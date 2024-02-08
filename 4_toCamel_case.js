function toCamelCase(str){
  if (str == '') {return ''}
  let ans = '';
  let flag = false;
  let temp = str.split('');

  temp.forEach( (instance) => {
    if (instance == '_' || instance =='-') { flag = true; }
    else{
      if (flag) { ans = ans + instance.toUpperCase(); flag = false; }      
      else      { ans = ans + instance; }
    }
  });
  return ans
}
