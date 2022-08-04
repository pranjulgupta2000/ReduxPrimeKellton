import { combineReducers } from 'redux';
import BollywoodReducer from './BollywoodReducer';
import HollywoodReducer from './HollywoodReducer';
import cardItems from './DetailReducer';
const rootReducer = combineReducers({
    BollywoodReducer,
    HollywoodReducer,
    cardItems
    
})

export default rootReducer;

/*

Create a rootreducer containing all the reducers, in this case it contains the single property bookreducer

*/ 