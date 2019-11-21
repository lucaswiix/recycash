'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('App/Models/User')} Model */
const $user = use('App/Models/User');

/** @type {typeof import('App/Models/BankAccount')} Model */
const $bank = use('App/Models/BankAccount');
/**
 * Resourceful controller for interacting with banks
 */
class BankAccountController {
  /**
   * Show a list of all banks.
   * GET banks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, auth }) {
    const bankAccounts = await $bank.query().where('user_id', auth.user.id).fetch();
    return bankAccounts;
  }


  /**
   * Create/save a new bank.
   * POST banks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['bank', 'name', 'account', 'agency']);
    const create = await $bank.create({...data, user_id: auth.user.id});
    return create;
  }

  /**
   * Delete a bank with id.
   * DELETE banks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, auth, response }) {
    const isDeleted = await $bank
                      .query()
                      .where('user_id', auth.user.id)
                      .where('id', params.id)
                      .delete();

    if(!isDeleted){
        return response.badRequest({ error: 'We can\'t find this account associated with you.'});
    }

    return response.ok();    
  }
}

module.exports = BankAccountController
