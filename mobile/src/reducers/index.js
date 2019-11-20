import { combineReducers } from 'redux';

import recyclage from './recyclage';
import user from './user';

export default combineReducers({
    recyclage,
    user
});