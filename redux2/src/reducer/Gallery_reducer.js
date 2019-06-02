export default function(state={},action){
    switch(action.type){
        case 'GET_LATEST_GALLERY':
            return {...state,latestGallery:action.payload}
        default:
            return state
    }
}