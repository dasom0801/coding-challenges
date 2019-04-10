function findOdd(A) {
    for(var i = 0; i < A.length; i++) {
        let filteredArray = A.filter(num => A[i] === num);
        if(filteredArray.length % 2) return A[i];
    }
}