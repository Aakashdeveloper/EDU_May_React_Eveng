import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import ListView from '../container/ListView';
import PropertyDetails from '../container/PropertyDetails';
import Header from './Header';

class App extends React.PureComponent {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className="row">
                        <Route exact path="/" component={ListView}></Route>
                        <Route path="/openhouse/:id" component={PropertyDetails}></Route>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;