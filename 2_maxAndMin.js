function highAndLow(numbers){
  let arr = numbers.split(' ');
  let arr2 = [];
  arr.forEach( (element) =>   {arr2.push(parseInt(element) ); })
  let maxa = Math.max(...arr2), mina = Math.min(...arr2);

  return `${maxa} ${mina}`;
}
