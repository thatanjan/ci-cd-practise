const { functions } = require('./index')

const { add } = functions

test('should first', () => {
	const result = add(1, 2)
	expect(result).toBe(3)
})
