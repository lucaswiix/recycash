'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const addDefaultPrefix = (group) => {
  group.prefix('api/rest').middleware(['auth']);
  return group;
}

Route.group(() => {
  Route.post('/login', 'AuthController.login');
  Route.post('/register', 'AuthController.register');
}).prefix('api/rest/auth');


addDefaultPrefix(Route.group(()=>{
  Route.get('/', 'BankController.index');
  Route.post('/', 'BankController.store');
  Route.delete('/:id', 'BankController.destroy');
}).prefix('bank'));

addDefaultPrefix(Route.group(()=>{
  Route.get('/', 'UserController.index');
  Route.post('/recycle', 'UserController.doRecycle');
  Route.get('/recyclages', 'UserController.recyclages');
}).prefix('user'));


addDefaultPrefix(Route.group(()=>{
  Route.get('/', 'RecyclageController.index')
  Route.post('/', 'RecyclageController.store')
  Route.delete('/:id', 'RecyclageController.destroy')
}).prefix('recyclage').middleware(['isCompany']));

addDefaultPrefix(Route.group(()=>{
  Route.post('/setCompany', 'UserController.doIsCompany')
}).prefix('admin').middleware(['admin']));