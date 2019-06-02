import React from 'react';
import { Link } from 'react-router-dom';

const showList = ({latest}) => {
    if(latest){
        return latest.map((data) => {
            return(
                <Link to={`/details/${data.id}`} className="item"  key={data.id}>
                    <div className="image_cover"
                        style={{background:`url('/images/articles/${data.img}')`}}>
                        <div class="description">
                            <span>{data.category}</span>
                            <div>{data.title}</div>
                        </div>
                    </div>
                </Link>
            )
        })
    }
}

const LatestNews = (props) => {
    return(
        <div className="home-latest">
            {showList(props)}
        </div>
    )
}

export default LatestNews