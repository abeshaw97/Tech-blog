const { User } = require('../models');

const userData = [{
        username: 'star',
        password: 'star1'

    },
    {
        username: 'star',
        password: 'sake'
    },
    {
        username: 'star',
        password: 'star1'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
