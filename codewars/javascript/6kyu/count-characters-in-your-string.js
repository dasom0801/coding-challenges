function count (string) {  
    let result = {}, arr = string.split("").sort();
    if (string.length === 0) return result;
    while (arr.length > 0) {
      result[arr[0]] = arr.splice(arr.indexOf(arr[0]), arr.lastIndexOf(arr[0]) +1).length;
    }
    return result;
}


// function count (string) {  
//   var count = {};
//   string.split('').forEach(function(s) {
//      count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }