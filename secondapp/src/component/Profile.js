import React, {Component} from 'react';

class Profile extends Component {
    render(){
        return(
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3>Profile Blog</h3>
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
                    <h1>Profile Page</h1>
                <button type="button" className="btn btn-primary">
                    Submit
                </button>
                <button type="button" className="btn btn-success">
                    Submit
                </button>
                <button type="button" className="btn btn-warning">
                    Submit
                </button>
                <button type="button" className="btn btn-danger">
                    Submit
                </button>
                <button type="button" className="btn btn-info">
                    Submit
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>AI</td>
                        </tr>
                        <tr>
                            <td>Stephen</td>
                            <td>UI</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}


export default Profile;