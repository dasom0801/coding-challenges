export function positiveSum(arr:number[]):number {
  let result:number = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) result+= arr[i];
    else continue;
  }
  return result;
}