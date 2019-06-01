export default function(state=null, actions){
    switch(actions.type){
        case 'MOVIES_LIST':
            return actions.payload
        default:
            return state
    }
}