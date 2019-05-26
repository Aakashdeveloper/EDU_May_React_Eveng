import React, {Component} from 'react';

class Lifecycle extends Component {
    // 1 GET Default State
    constructor(props){
        super(props)

        // 2 SET Default State
        this.state={
            title: 'About React LifeCycle'
        }

        console.log("inside constructor")
    }

    // 3 Before GET Created
    componentWillMount() {
        console.log(">>>>Inside Will Mount")
        // document.querySelector('h2').style.color="teal"
    }

    componentWillUpdate(){
        console.log(">>>>Inside Will Update")
    }

    componentDidUpdate(){
        console.log(">>>>Inside Did Update")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Inside Should update")
        if(nextState.title === this.state.title){
            return false
        }

        return true
    }


    // 4 Render JSX
    render(){
        console.log('inside render')
        return(
            <div>
                <h1>LifeCycle</h1>
                <h2>{this.state.title}</h2>
                <div onClick={() => this.setState({title:'About React LifeCycle'})}>
                    Click To Change
                </div>
                <div onClick={() => this.setState({title:'Reflection of Second click'})}>
                    Click Second Change
                </div>
            </div>
        )
    }

    //5 After Component Mounted
    componentDidMount(){
        console.log(">>>>Inside Did Mount")
        document.querySelector('h2').style.color="teal"
    }


    componentWillUnmount(){
        alert('do you want to leave')
    }


}


export default Lifecycle;