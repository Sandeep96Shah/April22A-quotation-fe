import { USERDETAILS, QUOTATIONS, TYPE, BLOG_CREATE } from '../action/types';

const initialState = {
    user: {},
    quotations: [],
    type: 'all',
    isCreate: false,
}

export default function reducer(state=initialState, action){
    const { type, data } = action;
    switch(type){
        case USERDETAILS:
            return {
                ...state,
                user: data,
                isCreate: false
            }
        case QUOTATIONS:
            return {
                ...state,
                quotations: data,
                isCreate: false,
            }
        case TYPE:
            return {
                ...state,
                type: data,
                isCreate: false,
            }
        case BLOG_CREATE:
            return {
                ...state,
                isCreate: data,
            }
        default:
            return state;
    }
}