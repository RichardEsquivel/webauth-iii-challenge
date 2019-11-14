const { validateUser } = require('./users-helpers.js')

//previously sent an empty object and saw the result fail and sent an object with username less than two characters


describe("users helpers", () => {
	describe('validateUser()', () => {
		it('should fail when missing username and password', () => {
			//Arrange: setup the world for the test, should be isolated tests of 3 parts
			const invalidUser = {};
			const expected = false;
			//Act: execute the system under test(SUT) => validate User method
			const actual = validateUser(invalidUser);
			//Assert: we check the result Expect Jest documentation, EXPECT
			expect(actual).toBe(expected)//matchers

		});//you have to see that your tests fail if you don't see them fail then how do you know if they are pasing correctly
		it('should fail if misssing password', () => {
			const result = validateUser({ username: 'somebody' });
			expect(result.isSuccessful).toBe(false);
			expect(actual.errors).toHaveLength(2);

		})
		it('should succeed if called with a valid user', () => {
			const result = validateUser({
				username: 'somebody',
				password: 'valid password'
			});
			expect(result.isSuccessful).toBe(true);
			expect(actual.errors).toHaveLength(0);


			//pending tests should be written with todo to indicate that you are still in the process of writing these tests!
			it.todo('should fail if user name is an object');
			it.todo('it should fail if username is an array');
			it.todo('it should fail if username is a NaN');
			it.todo('should fail if username is null');
		})
	})
})