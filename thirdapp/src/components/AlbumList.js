import React from 'react';

const AlbumList = (props) => {

    const showList = ({albumdata}) => {
        if(albumdata){
            return albumdata.map((item, index) => {
                return(
                    <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }

    return(
        <div class="album_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;