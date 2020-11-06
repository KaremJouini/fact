function factRecursive(n) {
    if (n < 0)
        return -1
    if (n <= 1) {
        return 1
    }
    return n * fact(n - 1)

}

function factIterative(n) {
    if (n < 0) {
        return -1
    }
    let i = n
    let result = 1
    while (i > 1) {
        result = result * i;
        i--;
    }

    return result
}


function fact(n) {
    return factIterative(n)
}

module.exports = fact
module.exports = factRecursive
module.exports = factIterative
