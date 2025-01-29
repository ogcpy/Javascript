function fibSeq(n) {
    if (n == 0)
        return 0
    if (n == 1)
        return 1
    else return fibSeq(n - 2) + fibSeq(n - 1)
}

console.log(fibSeq(22))
console.log(fibSeq(10))
console.log(fibSeq(4))
console.log(fibSeq(8))