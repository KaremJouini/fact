const fact = require("./fact");
test('fact 5 ', () => {
    expect(fact(5)).toBe(120);
});
test('fact 0 ', () => {
    expect(fact(1)).toBe(1);
});
test('fact -1 ', () => {
    expect(fact(-1)).toBe(-1);
});



