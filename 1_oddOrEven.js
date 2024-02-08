function findOutlier(integers){
  let oddOutlierPos, evenOutlierPos;
  let oddNums = 0, evenNums = 0;

  for (let i = 0; i < integers.length; i++){
    if (integers[i] % 2 == 0){
      evenNums +=  1;
      evenOutlierPos = i;
    } else {
      oddNums += 1;
      oddOutlierPos = i;
    }
  }
  if (evenNums < 2){
    return integers[evenOutlierPos];
  } else if (oddNums < 2 ){
    return integers[oddOutlierPos];
  }
}