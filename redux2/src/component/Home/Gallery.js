import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const showGallery = ({galleryData}) => {
    if(galleryData){
        return(
            <Slider {...settings}>
                {galleryData.map((item) => {
                    return(
                        <Link to={`/gallery/${item.id}`}
                            key={item.id}
                            className="slider-item">
                                <div className="image"
                                style={{background:`url(/images/galleries/${item.images[0].img})`}}>
                                </div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }
}

const Gallery  = (props) => {
    return (
        <div className="home-gallery">
           <h2>Gallery</h2>
           {showGallery(props)}
        </div>
    )
}

export default Gallery;

