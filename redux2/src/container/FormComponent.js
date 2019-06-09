import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postData} from '../actions';
import { browserHistory} from 'react-router-dom';

class FormComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            fname:'John',
            lname:'Stephen'
        }

        this.handleChangeFName = this.handleChangeFName.bind(this);
        this.handleChangeLName = this.handleChangeLName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFName(event){
        this.setState({fname:event.target.value})
    }
    handleChangeLName(event){
        this.setState({lname:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.postData(this.state.fname, this.state.lname);
        alert('form submitted');
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="container">
                <div>
                    <form>
                        <div className="form-group">
                            <label>FirstName</label>
                            <input type="text"
                                    className="form-control"
                                    value={this.state.fname}
                                    id="fname"
                                    onChange={this.handleChangeFName}
                                />
                        </div>
                        <div className="form-group">
                            <label>LastName</label>
                            <input type="text"
                                    className="form-control"
                                    value={this.state.lname}
                                    id="lname"
                                    onChange={this.handleChangeLName}
                                />
                        </div>
                        <button type="submit" className="btn btn-success"
                            onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postData}, dispatch)
}


export default connect(null, mapDispatchToProps)(FormComponent);