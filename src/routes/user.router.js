const { getAll, create, getOne, remove, update, veryCode, login, logged, resetPassword, UpdatePassword } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt, getAll) //🔐
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/me')
    .post(verifyJwt, logged) //🔐

routerUser.route('/reset_password')
    .post(resetPassword)

// Dinamic routes
routerUser.route('/verify/:code')
    .get(veryCode);

routerUser.route('/reset_password/:code')
    .post(UpdatePassword);

routerUser.route('/:id')
    .get(verifyJwt, getOne) //🔐
    .delete(verifyJwt, remove) //🔐
    .put(verifyJwt, update); //🔐

module.exports = routerUser;