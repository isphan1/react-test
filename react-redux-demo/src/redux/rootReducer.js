import {combineReducers} from 'redux'
import cakeReducer from '../redux/cakes/cakeReducer'
import iceCreamReducer from '../redux/iceCream/iceReducer'
import userReducer from '../redux/user/userReducer'


const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer,
    users:userReducer    
})

export default rootReducer