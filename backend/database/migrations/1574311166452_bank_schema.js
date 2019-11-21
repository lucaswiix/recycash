'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// ['caixa', 'banco do brasil', 'santander', 'itau', 'nubank', 'bradesco']
class BankAccountSchema extends Schema {
  up () {
    this.create('bank_account', (table) => {
      table.increments();

      table.integer('user_id')
        .unsigned()
        .references(`id`)
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        
      table.string('bank').notNullable();
      table.string('name').notNullable();
      table.string('account').notNullable();
      table.string('agency').notNullable();

      table.timestamps()
    })
  }

  down () {
    this.drop('bank_account')
  }
}

module.exports = BankAccountSchema
