function getPINs(observed) {
  if (observed.length === 1){
    const nums = getAdjacentNumbers(observed);
    return nums;
  }
  else if (observed.length === 2){
    let nums = [], observedNums = observed.split(''), ans = [];
    observedNums.forEach( (num) => nums.push(getAdjacentNumbers(num)))
    for (let i = 0; i < nums[0].length; i++){
      for (let j = 0; j < nums[1].length; j ++) {
        ans.push(nums[0][i] + nums[1][j]);
      }
    }
    return ans;
  }
  else {
    let nums = [], observedNums = observed.split(''), ans = [];
    observedNums.forEach( (num) => nums.push(getAdjacentNumbers(num)))
    for (let i = 0; i < nums[0].length; i++){
      for (let j = 0; j < nums[1].length; j++) {
        for (let k = 0; k < nums[2].length; k++){
          ans.push(nums[0][i] + nums[1][j] + nums[2][k]);
        }
      }
    }
    return ans;
  }
}

function getAdjacentNumbers(number){
  if (number === '1') { return ['1', '2','4'] }
  if (number === '2') { return ['2', '1','3','5'] }
  if (number === '3') { return ['3', '2','6'] }
  if (number === '4') { return ['4', '1','5','7'] }
  if (number === '5') { return ['5', '2','4','6','8'] }
  if (number === '6') { return ['6', '3','5','9'] }
  if (number === '7') { return ['7', '4','8'] }
  if (number === '8') { return ['8', '5','7','9','0'] }
  if (number === '9') { return ['9', '6','8'] }
  if (number === '0') { return ['0', '8'] }
}