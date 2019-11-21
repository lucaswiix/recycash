'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Recyclage extends Model {

    user(){
        return this.belongsTo('App/Models/User', `user_id`, `id`)
      }

      static get hidden () {
        return [`createdBy_id`, `user_id`]
      }

}

module.exports = Recyclage
