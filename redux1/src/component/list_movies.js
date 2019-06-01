import React from 'react';


const ListMovies =(props) => {

    const list =({datalist}) => {
        if(datalist){
            return datalist.map((data) => {
                return(
                    <div key={data.id}>
                        {data.name}
                    </div>
                )
            })
        }

    }

    return(
        <div>
            {list(props)}
        </div>
    )
    
}


export default ListMovies;