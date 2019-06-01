import React, {Component} from 'react';
import Header from './Header';
import AlbumList from './AlbumList';

const db_url = "http://localhost:8900/artists"

class Artist extends Component {
    constructor(props){
        super(props);

        this.state={
            details: ''
        }
    }

    componentDidMount(){
        fetch(`${db_url}/${this.props.match.params.artistId}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then((output) => {
            this.setState({
                details: output
            })
        })
    }

    render(){
        return(
            <div> 
                <Header/>
                <div className="artist_bio" key={this.state.details.id}>
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.details.cover}.jpg')
                            no-repeat`}}>
                        </span>
                    </div>
                    <h3>{this.state.details.name}</h3>
                    <div className="biot_text">
                        {this.state.details.bio}
                    </div>
                    <AlbumList albumdata = {this.state.details.albums}></AlbumList>
                </div> 
            </div>
        )
    }

    
   
}

export default Artist;