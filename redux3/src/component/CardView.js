import React from 'react';


const CardView = ({propertyData}) => {
    if(propertyData && propertyData.length){
        return(
            <div className="row">
                {propertyData.map((data) =>
                        <div>{data.mlsId}</div>
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