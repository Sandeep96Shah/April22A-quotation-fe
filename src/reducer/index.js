import { USERDETAILS, QUOTATIONS, TYPE } from '../action/types';

const initialState = {
    user: {},
    quotations: [],
    type: 'all',
}

export default function reducer(state=initialState, action){
    const { type, data } = action;
    switch(type){
        case USERDETAILS:
            return {
                ...state,
                user: data,
            }
        case QUOTATIONS:
            return {
                ...state,
                quotations: data,
            }
        case TYPE:
            return {
                ...state,
                type: data
            }
        default:
            return state;
    }
}