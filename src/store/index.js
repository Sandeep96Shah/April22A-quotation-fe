import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

export function configureStore(){
    return createStore(reducer, applyMiddleware(thunk));
}