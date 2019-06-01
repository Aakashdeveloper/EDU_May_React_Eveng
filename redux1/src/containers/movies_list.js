import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListMovies from '../component/list_movies'

class MoviesList extends Component  {

    componentDidMount(){
        this.props.moviesList();
    }

    render(){
        return(
            <div>
                <ListMovies datalist={this.props.movies}></ListMovies>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        movies: state.mymovies
    }
}
export default connect(mapStateToProps,actions)(MoviesList);