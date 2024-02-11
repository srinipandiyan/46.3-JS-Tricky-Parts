function curriedAdd(total) {
    if(total === undefined) return 0;
    return function closureAdd(num) {
        if(num === undefined) return total;
        total += num;
        return closureAdd;
    };
}

module.exports = { curriedAdd };