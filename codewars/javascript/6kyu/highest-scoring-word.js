function high(x){
  const wordArray = x.split(' ');
  const numberArray = wordArray.map(word => { 
    return word.split('').map(str => str.toLowerCase().charCodeAt() - 96).reduce((r, c) => r + c, 0);
  });
  const maxIndex = numberArray.indexOf(Math.max(...numberArray));
  return wordArray[maxIndex];
}