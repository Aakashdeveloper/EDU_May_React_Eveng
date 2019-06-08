import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { selectedGallery,clearSelectedGallery  } from '../actions';
import Slider from 'react-slick'

const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed:500
}

class Gallery extends Component{
    componentWillMount(){
        this.props.selectedGallery(this.props.match.params.id)
    }

    renderSlider = ({selected}) => {
        var gallery = [];
        if(selected){
            gallery = selected[0];
            return(
                <div>
                    <h3>Full Gallery View</h3>
                    <Slider {...settings}>
                        {gallery.images.map((item, index) =>{
                            return(
                                <div key={index} className="slide-item">
                                    <div className="image"
                                    style={{
                                        background:`url(/images/galleries/${item.img})`
                                    }}>
                                    </div>
                                    <div className="description">
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            )

        }
    }
    render(){
        const item = this.props.gallery;
        return(
            <div className="slide-item-wrap">
                {this.renderSlider(item)}
            </div>
        )
    }

    componentWillUnmount(){
        this.props.clearSelectedGallery();
    }
}

function mapStateToProps(state){
    return{
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedGallery, clearSelectedGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)