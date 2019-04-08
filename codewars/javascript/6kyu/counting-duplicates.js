//Count the number of Duplicates
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  let result = [];
  if(!text.length || !text.length === 1) return 0;
  text = text.toLowerCase();
  [...text].forEach((str, index) => {
    if (text.indexOf(str) !== index && result.indexOf(str) === -1) {
      result.push(str);
    }
  });
  return result.length;
}