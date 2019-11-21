'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class IsAdmin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response }, next) {
    if(!auth.user.isAdmin){
      let res = {
        error:true, 
        message: 'Not authorized',
        session:'admin'
      };

      return response.status(401).json(res);
    }
    await next()
  }
}

module.exports = IsAdmin
