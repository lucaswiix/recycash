'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class isCompany {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response }, next) {
    

    if(!auth.user.isCompany){
      let res = {
        error:true, 
        message: 'Not authorized',
        session:'company'
      };

      return response.status(401).json(res);
    }
    await next()
  }
}

module.exports = isCompany

