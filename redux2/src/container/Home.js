import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { latestNews, OtherNew, LatestGallery} from '../actions';


//Component
import LatestNews from '../component/Home/LatestNews';
import OtherNews from '../component/Home/OtherNews';
import Gallery from '../component/Home/Gallery';

class Home extends Component {

    componentDidMount(){
        this.props.latestNews();
        this.props.OtherNew();
        this.props.LatestGallery();
    }
    render(){
        return(
            <div>
                <LatestNews latest = {this.props.articles.latest}/>
                <OtherNews  others= {this.props.articles.other}/>
                <Gallery galleryData = {this.props.gallery.latestGallery}/>
            </div>
        )
    }
}

// this will recive the state
function mapStateToProps(state){
    console.log(">>>>>",state)
    return{
        articles: state.articles,
        gallery:  state.gallery
    }
}

// this will bind the actions
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews, OtherNew, LatestGallery}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);