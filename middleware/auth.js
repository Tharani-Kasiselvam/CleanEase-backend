const jwt = require('jsonwebtoken');
const config = require('../utils/config');
const User = require('../models/user');

const auth = {
    // middleware to check if the user is authenticated has a valid token
    checkAuth: (req, res, next) => {
        try {
            // get the token from the request cookies
            const token = request.cookies.token;

            // if the token is not present, return an error
            if (!token) {
                return res.status(401).send({ message: 'Unauthorized' });
            }

            // verify the token
            try {
                const decodedToken = jwt.verify(token, config.JWT_SECRET);

                // set the userId in the request object
                req.userId = decodedToken.id;

                // call the next middleware
                next();
            } catch(error) {
                return res.status(401).send({ error: 'Invalid token' });
            }
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    // middleware to check if the user is an admin
    isAdmin: async (request, response, next) => {
        try {
            // Get the user id from the request object
            const userId = request.userId;

            // Find the user by id in the database
            const user = await User.findById(userId);

            // If the user is not an admin, return an error
            if(user.role !== 'admin') {
                return response.status(403).json({ message: 'Forbidden' });
            }

            // if the user is an admin, call the next middleware
            next();
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

// export the auth object
module.exports = auth;