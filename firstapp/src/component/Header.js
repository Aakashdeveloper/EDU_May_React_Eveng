import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    constructor(){
        super()

        this.state = {
            title:'React App'
        }
    }

    inputChange(event){
        console.log(event.target.value)
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
                        onChange={this.inputChange} />
                </center>
                <hr/>
            </header> 
        )
    }
}

export default Header;