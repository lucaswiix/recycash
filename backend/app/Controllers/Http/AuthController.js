'use strict'

/** @type {typeof import('../../Models/User')} Model */
const User = use('App/Models/User');
class AuthController {

    /**
     * Register new user
     * [POST] Recycash
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
   */
    async register({ request, auth }){
        const data = request.only(['username', 'email', 'password']);
        await User.create(data);        
        const token = await auth.attempt(data.username, data.password);
        return token;        
    }
 
    /**
     * Authenticate user
     * [POST] Recycash
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
   */
    async login({ request, auth }){
        const { username, password } = request.all();
        const token = await auth.attempt(username, password);
        return token;
    }
}

module.exports = AuthController
