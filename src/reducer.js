
export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {...state, data: '', loading: true, error: ''}
        case 'FETCH_SUCCESS':
            return {...state, data: action.payload, loading: false, error: ''}
        case 'FETCH_FAIL':
            return {...state, data: '', loading: false, error: action.payload}
            // return {...state, data: '', loading: false, error: 'Something went wrong!'}
        default:
            return state;
    }
}

// const action = {
//     type: 'STRİNG',
//     payload: //numb, strng, arry
// }