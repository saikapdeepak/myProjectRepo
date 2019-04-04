import { FETCH_DATA , UPDATE_DATA } from '../Action/type';

const initialState = {
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, items : action.ItemData }

        case UPDATE_DATA:
            return { ...state, items : action.ItemData}    
            
        default:
            return state;
    }
}