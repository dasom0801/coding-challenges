function gcd(n1, n2) {
  let gcd = Math.min(n1, n2);
  while(gcd >= 1) {
    if(!(n1 % gcd) && !(n2 % gcd)) return gcd; 
      gcd--;
    }
  return 1;
}