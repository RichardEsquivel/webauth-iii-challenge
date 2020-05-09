const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/restricted', restricted, checkDepartment(['faculty', 'sales', 'Science', 'Mathematics', 'Math']), (req, res) => { //adding a department to the user schema
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

function checkDepartment(department) {
	return function (req, res, next) {
		if (department.includes(req.decodedJwt.department)) {
			next();
		} else {
			res.status(403).json({ message: "No authorization based on department." })
		}
	}
}


module.exports = router;
