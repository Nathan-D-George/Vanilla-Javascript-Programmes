var solution = function(firstArray, secondArray) {
  let avg = 0;
  for (let i = 0; i < firstArray.length; i++) { 
    avg += (firstArray[i] - secondArray[i])**2; 
  }
  return (
    avg/firstArray.length
  );
}
