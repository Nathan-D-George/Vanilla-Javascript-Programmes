function topThreeWords(text) {
  let words = text.split(' ');
  let count = new Map();
  words.forEach( (word) => {
    if (!count[word]){ count[word] = 1; }
    else { count[word] += 1; }
  });
  
  console.log(count);
  
  let topResults = [], topOccurances = [2,1,0];
  count.forEach( function(key, value) {
    if (value > topOccurances[0] ) {
      topOccurances[1] = topOccurances[0]; 
      topOccurances[2] = topOccurances[1];
      topOccurances[0] = value;
    }
    else if (value > topOccurances[1]) {
      topOccurances[2] = topOccurances[1];
      topOccurances[1] = value;
    }
    else if (value > topOccurances[2]) {
      topOccurances[2] = value;
    }
    
  });
  console.log(topOccurances);
}