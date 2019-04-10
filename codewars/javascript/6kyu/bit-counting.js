var countBits = function(n) {
    let remainder = [];
    do {
        remainder.unshift(n % 2);
        n = Math.floor(n/2);
    } while(n);
    return remainder.join("").replace(/0/g, "").length;
};

// countBits = n => n.toString(2).split('0').join('').length;
