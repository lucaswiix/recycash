'use strict'

/** @type {typeof import('../../Models/User')} Model */
const $user = use('App/Models/User');

/** @type {typeof import('../../Models/Recyclage')} Model */
const $recyclage = use('App/Models/Recyclage');

class UserController {

    /**
     * Returns the user details.
     * [GET] Recycash
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
   */
    async index({ auth }){
        return $user.find(auth.user.id);  
    }
 
    /**
   * Do a recyclage by code
   * GET recyclages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */  
  async doRecycle({ request, auth, response }){
    const data = request.only(['code']);
    const recycle = await $recyclage.query().where('code', data.code).first();

    if(recycle.user_id){
      return response.badRequest({error:'This code has already been used.'});
    }

    const update = await $recyclage.query().where('code', data.code).update({user_id: auth.user.id});
    if(!update){
      return response.internalServerError({error:'Error trying to use the code.'});
    }

    const user = await $user.find(auth.user.id);
    user.balance = parseFloat((auth.user.balance + recycle.price).toFixed(2));
    user.save();
    return user;
  }

    /**
     * Returns the recycles made.
     * [GET] Recycash
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
   */
    async recyclages({ auth }){
       return $recyclage.query().where('user_id', auth.user.id).fetch();
    }

    /**
     * [ADMIN]
     * Do someone to company mode.
     * [POST] Recycash
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
   */
    async doIsCompany({ request, response }){
      const data = request.only(['username']);
      const update = await $user.query().where('username', data.username).update({isCompany: true});
      if(!update){
        return response.internalServerError();
      }
      return response.ok()
    }

}

module.exports = UserController
