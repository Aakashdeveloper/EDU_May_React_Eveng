import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

class Gallery extends Component{
    render(){
        return(
            <div> Gallery Details</div>
        )
    }
}

export default connect()(Gallery)