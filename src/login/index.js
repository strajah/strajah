'use strict';

const login = require('./login.js');

module.exports = {
    registerIn: registerIn
};

function registerIn (server) {
    server.post('/api/auth/login', login);
}
