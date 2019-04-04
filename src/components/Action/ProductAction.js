import { FETCH_DATA, UPDATE_DATA } from './type';
const API = 'http://localhost:8500/ProductDetails';




export function fetchData() {
    return function (dispatch, getState) {
        fetch(API)
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch({ type: FETCH_DATA, ItemData: data })
            });
    }
}

export function updateItem(updatedItem) {
    return function (dispatch, getState) {
            dispatch({ type: UPDATE_DATA, ItemData: getState().items.items.map(item => item.ProductId === updatedItem.ProductId ? updatedItem : item ) })

    }
}