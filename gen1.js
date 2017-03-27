function* gen(x) {
    var y = yield x + 2;
    return y
};

// var g = gen(1);
// console.log(g.next());
// console.log(g.next());

function* helloGen() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloGen();

console.log(hw.next())
console.log(hw.next())
console.log(hw.next())