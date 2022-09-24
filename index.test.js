const utils = require('./index');

test('Adding 2 Numbers [2 + 4 = 6]', () => {
	expect(utils.add2Numbers(2, 4)).toBe(6);
});
test('Subtract 2 Numbers [7 - 3 = 4]', () => {
	expect(utils.subtract2Numbers(7, 3)).toBe(4);
});
test('Multiply 2 Numbers [3 * 8 = 24]', () => {
	expect(utils.multiply2Numbers(3, 8)).toBe(24);
});
test('Divide 2 Numbers [4 / 2 = 2]', () => {
	expect(utils.divide2Numbers(4, 2)).toBe(2);
});