import { combineReducers } from 'redux'

import {reducers as cartReducers} from './cart'

const reducers = combineReducers({
    cartReducers
})

export { reducers }