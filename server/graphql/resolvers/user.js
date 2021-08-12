const { User } = require('../../models');

module.exports = {
    Query: {
        async getAllUsers(root, args, context) {
            return User.findAll();
        }
    }
};