import React from 'react';
import { Link } from 'react-router-dom';


const CardView = ({propertyData}) => {
    if(propertyData && propertyData.length){
        return(
            <div className="row">
                {propertyData.map((data) =>
                        <div className="column" key={data.mlsid}>
                            <div className="card">
                                <img className="card-img-top" src={data.photos[0]}/>
                                <div className="card-body">
                                    <p className="heading">{data.address.crossStreet}</p>
                                    <p className="card-text">{data.address.state}</p>
                                    <Link to={`/openhouse/${data.mlsId}`} className="btn btn-primary">More Details</Link>
                                </div>
                            </div>
                        </div>
                   )}
            </div>
        )
    }


    return(
        <div className="nodata">
            <img src={'/assests/loading.gif'}/>
        </div>
    )
}

export default CardView;