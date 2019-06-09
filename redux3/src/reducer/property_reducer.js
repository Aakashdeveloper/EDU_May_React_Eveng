const defaultState = {
    data:[]
};

export default function(state= defaultState, action){
    switch(action.type){
        case 'GET_OPENHOUSE_DATA':
            return {...state, data: action.payload};
        case 'GET_OPENHOUSE_DETAILS':
            return {...state, details: action.payload}
        default:
            return state;
    }
}