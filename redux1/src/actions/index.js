export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1, name:'Deadpool'},
            {id:2, name:'Avengers'},
            {id:3, name:'Superman'},
        ]
    }
}