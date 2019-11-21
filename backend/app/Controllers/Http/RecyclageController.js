'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('../../Models/User')} Model */
const $user = use('App/Models/User');

/** @type {typeof import('../../Models/Recyclage')} Model */
const $recyclage = use('App/Models/Recyclage');
/**
 * Resourceful controller for interacting with recyclages
 */
class RecyclageController {
  /**
   * Show a list of all recyclages.
   * GET recyclages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, auth, response }) {
    return $recyclage.query().with('user').fetch()
  }

    /**
   * Create/save a new recyclage.
   * POST recyclages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['size', 'type']);

    const PriceEachTrash = {
      papel(kg) {
        return kg * 0.31;
      },
      plastico(kg) {
        return kg * 1.20;
      },
      aluminio(kg) {
        return kg * 3.20;
      },
      vidro(kg){
        return kg * 0.12;
      }
    }

    const code = Math.floor(Math.random() * 100000000);
    const trashPrice = PriceEachTrash[data.type];
    const create = await $recyclage.create({...data, price: trashPrice(data.size).toFixed(2), code, createdBy_id: auth.user.id});
    return create;
    
  }

  /**
   * Delete a recyclage with id.
   * DELETE recyclages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, auth, response }) {
    const isDeleted = await $recyclage
                      .query()
                      .whereNull('user_id')
                      .where('createdBy_id', auth.user.id)
                      .where('id', params.id)
                      .delete();

      if(!isDeleted){
        return response.badRequest({ error: 'We can\'t find this recyclage associated with you.'});
      }

      return response.ok();    
  }

}

module.exports = RecyclageController
