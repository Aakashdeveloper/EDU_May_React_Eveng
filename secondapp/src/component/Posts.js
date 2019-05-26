import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Posts extends Component {
    constructor(props){
        super(props)

        this.state= {
            pathname: 'javascript'
        }
    }

    render(){
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3>Post Page</h3>
                </div>
                <div className="panel-body">
                    <p> Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen 
                        book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, 
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen 
                        book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, 
                    </p>
                    <h2>JavaScript</h2>
                    <Link to="/posts/JavaScript?name='article'">Details</Link>
                    <h2>AWS</h2>
                    <Link to="/posts/AWS">Details</Link>
                    <h2>NodeJs</h2>
                    <Link to="/posts/NodeJs">Details</Link>
                </div>
            </div>
        )
    }
}


export default Posts;