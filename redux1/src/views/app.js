import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'

class App extends Component  {

    componentDidMount(){
        this.props.moviesList();
    }
    renderList =(movies) => {
        if(movies){
            return movies.map((data) => {
                return(
                    <div key={data.id}>
                        {data.name}
                    </div>
                )
            })
        }

    }
    render(){
        return(
            <div>
                {this.renderList(this.props.movies)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('>>>>>>',state)
    return{
        movies: state.mymovies
    }
}
export default connect(mapStateToProps,actions)(App);