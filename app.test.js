const add = require("./app");

test("adds 5 + 3 = 8", () => {
    expect(add(5, 3)).toBe(8);
});
