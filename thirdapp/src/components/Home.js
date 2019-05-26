import React, {Component} from 'react'
import Banner from './Banner';
import ArtistList from './ArtistList';

const db_url = "http://localhost:8900/artists"

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            artist: ''
        }
    }

    render(){
        console.log("inside render")
        return(
            <div>
                <Banner></Banner>
                <ArtistList allArtist={this.state.artist}></ArtistList>
            </div>
        )
    }



    componentDidMount(){
        console.log("did mount render")
        fetch(db_url,{
            method:'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                artist:data
            })
        })
    }
}



export default Home;