import React from 'react';
import CardView from './CardView';

class ListView extends React.PureComponent {

    componentDidMount(){
        this.props.fetchProperty();
    }
    render(){
        const { list } = this.props;
        return(
            <CardView propertyData = {list}></CardView>
        )
    }
}

export default ListView;