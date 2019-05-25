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
            news:JSON,
            filtered: JSON
        }
    }

    filterNews(keyword) {
        let output = this.state.news.filter((item) => {
            return (item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
        })

        this.setState({filtered: output})
    }

    // ages.filter((age) => { return age >= 18 })
    render(){
        // console.log(this.state.news)
        return (
            <div>
                <header>
                    <Header userSearch={(data) => this.filterNews(data)} />
                </header>
                    <NewsList mynews={this.state.filtered} />
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
