import React from 'react';
import { Link } from 'react-router-dom'

const ArtistList = (props) => {
    console.log(">>>>props>>", props)

    const listView = ({allArtist}) => {
        if(allArtist){
            return allArtist.map((item) => {

                const style = {
                    background:`url('/images/covers/${item.cover}.jpg')
                    no-repeat`}

                return(
                    <Link key={item.id} to={`/artist/${item.id}`}
                        className="artist_item"
                        style={style}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
        
    }

    return(
        <div className="artist_list">
            <h4>Artist List</h4>
            {listView(props)}
        </div>
    )
}

export default ArtistList;