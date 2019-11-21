'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BankAccount extends Model {

    static get table(){
        return 'bank_account';
    }
}

module.exports = BankAccount
