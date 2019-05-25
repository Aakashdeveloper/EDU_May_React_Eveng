import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    constructor(){
        super()

        this.state = {
            title:'React App',
            keyword: 'User Text Here'
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({keyword: event.target.value?event.target.value:'User Text Here'})
        this.props.userSearch(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick = {() => { console.log("click from logo")}}>
                    {this.state.title}
                </div>
                <center>
                    <input type="text"
                        onChange={this.inputChange.bind(this)} />
                    <p>{this.state.keyword}</p>
                </center>
                <hr/>
            </header> 
        )
    }
}

export default Header;