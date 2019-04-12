// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("abcd") -> "A-Bb-Ccc-Dddd"
function accum(str) {
  return str.split('').map((s,index) => s.toUpperCase()+s.toLowerCase().repeat(index)).join('-');
}