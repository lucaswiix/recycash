'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecyclagesSchema extends Schema {
  up () {
    this.create('recyclages', (table) => {
      
      table.increments()
      table.string('code').unique().notNullable();
      table.integer('size').notNullable()
      table.decimal('price', 32, 19).notNullable();
      table.string('type').nullable();
      table.integer('createdBy_id')
            .unsigned()
            .references(`id`)
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

      table.integer('user_id')
            .unsigned()
            .nullable()
            .references(`id`)
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

      table.timestamps()
    })
  }

  down () {
    this.drop('recyclages')
  }
}

module.exports = RecyclagesSchema
