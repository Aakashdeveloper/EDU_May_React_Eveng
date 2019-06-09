import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../container/Home';
import Details from '../container/Details';
import Gallery from '../container/Gallery';
import FormComponent from '../container/FormComponent';

import Header from '../component/Header';
import Footer from '../component/Footer';



class App extends Component {
    render(){
        return(
            <div>
               <BrowserRouter>
                    <div>
                        <Header/>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/gallery/:id" component={Gallery}></Route>
                            <Route path="/details/:id" component={Details}></Route>
                            <Route path="/form" component={FormComponent}></Route>
                        <br/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;