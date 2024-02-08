function sumDigPow(a, b) {
  let nums = [];
  for (let i = a; i <= b; i ++){
    if ( isThisAEureka(i) ) { nums.push(i); }
  }
  console.log(nums);
  return nums;
}

function isThisAEureka(num) {
  let index = 1, sum = 0;
  let arr = num.toString().split('');
  arr.forEach( (number) => {
    sum   += Math.pow(parseInt(number), index);
    index += 1;
  });
  if (sum == num) 
       { return true  }
  else { return false }
}