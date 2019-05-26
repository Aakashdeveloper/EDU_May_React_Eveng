import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Artist from './Artist';

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route path="/artist/:artistId" component={Artist} />
            </BrowserRouter>
        )
    }
}

export default Routing;