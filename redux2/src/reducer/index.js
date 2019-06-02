import { combineReducers } from 'redux';
import articles from './Article_reducer';
import gallery from './Gallery_reducer';

const rootReducer = combineReducers ({
    articles,
    gallery
})

export default rootReducer;