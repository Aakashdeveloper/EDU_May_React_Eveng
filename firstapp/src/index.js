import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Books from './component/Books';
import Header from './component/Header';
import NewsList from './component/NewsList';

import JSON from './db.json'

// JSX
class App extends Component{

    constructor(){
        super()

        this.state={
            news:JSON
        }
    }

    render(){
        console.log(this.state.news)
        return (
            <div>
                <header>
                    <Header/>
                </header>
                    <NewsList/>
                <hr/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))

/*
const App = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
                <NewsList/>
            <hr/>
        </div>
    )
}
*/
