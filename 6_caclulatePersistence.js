function persistence(num) {
  let temp = num, count = 0;
  while (temp >9){
    let nums = temp.toString().split('');
    let ans  = 1;
    nums.forEach( (inst) => { ans *= parseInt(inst); });
    temp = ans;
    count += 1;
  }
  return count
}
