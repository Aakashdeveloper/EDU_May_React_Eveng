import { connect} from 'react-redux';
import { fetchProperty  } from '../actions';
import ListView from '../component/ListView';

export const mapStateToProps = (state) => {
    console.log(">>>>>>",state)
    return{
        list : state.propertReducer.data
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchProperty: () => {
            return dispatch(fetchProperty.getPropertyList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);