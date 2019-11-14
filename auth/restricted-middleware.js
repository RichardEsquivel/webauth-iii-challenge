const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		const secret = process.env.JWT_secret || 'This could be alphanumerically beautifully inside a torn horse 3 by 5 equals 38765!';

		jwt.verify(token, secret, (err, decodedToken) => {
			if (err) {
				//this confirms that the value has been altered
				res.status(401).json({ message: 'Credentials invalid!' })
			} else {
				req.decodedJwt = decodedToken;
				next();
			}
		})
	}
	//after decoding the token you can utilize the data that has been decoded
	else {
		res.status(400).json({ message: 'No credentials provided!' })
	}
}