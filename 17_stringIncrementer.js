function incrementString (str) {
  let last = str[str.length-1], num = '', notNum = '', arr = str.split('');
  
  arr.forEach( (inst) => { !isNaN(parseInt(inst)) ? num = num + inst : notNum = notNum + inst });
  if ( num == ""){num = "0"}
  let num2 = (parseInt(num)+1).toString();
  if (num2.length !== num.length) {
    let diff = num.length - num2.length;
    for (let i = 0; i<diff; i++){
      num2 = '0' + num2;
    }
    console.log(`${notNum}${num2}`);
  }
  return `${notNum}${num2}`
}