import React,{Component} from 'react';

class PropertyDetail extends Component {
    constructor(props){
        super(props);

        this.state={
            details: this.props.details
        }
    }
  
    componentDidMount(){
        this.props.fetchDetails(this.props.match.params.id);
        
    }
    detailview =({details})=>{
        if(details){
            return(
                <div>
                    <center>
                        <h1>{details.address.crossStreet.toUpperCase()}</h1>
                    </center>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={details.photos[0]} />
                        </div>
                        <div className="col-md-6">
                            <br/>
                            <p className="side_text">{details.privateRemarks}</p>
                            <i class="fa fa-city"></i> {details.address.city}   &nbsp;&nbsp;&nbsp;
                            <i class="far fa-flag"></i> {details.address.country}<br/>
                            <i class="fas fa-dollar-sign"></i> {details.listPrice}
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                        <i class="fas fa-building"></i>   {details.property.stories} &nbsp;&nbsp;&nbsp;
                        <i class="fas fa-bed"></i>   {details.property.bedrooms} &nbsp;&nbsp;&nbsp;
                        <i class="fa fa-bath"></i> {details.property.bathsFull} &nbsp;&nbsp;&nbsp;
                        <i class="fa fa-toilet"></i> {details.property.bathsHalf} &nbsp;&nbsp;&nbsp;
                        <i class="fas fa-school"></i>   {details.school.highSchool} &nbsp;&nbsp;&nbsp;
                        <br/>
                        MLSID:   {details.mlsId} &nbsp;&nbsp;&nbsp;
                        <i class="fa fa-calendar"></i>   {details.listDate}
                        <br/>
                        <i class="fas fa-school"></i>   {details.school.highSchool} &nbsp;&nbsp;&nbsp;
                        <i class="fa fa-handshake"></i> {details.agreement}   &nbsp;&nbsp;&nbsp;
                        <i class="fas fa-male"></i> {details.agent.firstName} &nbsp;&nbsp;&nbsp;
                        <i class="fas fa-shopping-cart"></i> {details.geo.marketArea} &nbsp;&nbsp;&nbsp;
                        <i class="fa fa-money"></i> {details.association.fee}
                        
                        <hr/>
                        <br/>
                            
                        </div>
                    </div>
                    <hr/>
                    <p>**{details.disclaimer}</p>
                </div>
            )
        }

    }
    render(){
        const { details } = this.props;
        return(
            <div>
                {this.detailview(this.props)}
            </div>
            
        )
    }
}

export default PropertyDetail;