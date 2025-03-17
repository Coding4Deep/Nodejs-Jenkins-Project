const { add, subtract } = require("../src/math");

test("adds 2 + 3 to equal 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("subtracts 5 - 3 to equal 2", () => {
    expect(subtract(5, 3)).toBe(2);
});
  
