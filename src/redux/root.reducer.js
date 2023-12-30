import {combineReducers} from 'redux';

import userReducer from './reducers/userReducer/user.reducer';

export default combineReducers({
    user: userReducer,
});
