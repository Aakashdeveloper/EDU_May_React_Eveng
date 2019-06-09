import { getPropertyData, getPropertyDetail } from './propertySearch';

export function openHouseData(response){
    return {type: 'GET_OPENHOUSE_DATA', payload:response}
}

export function openHouseDetail(response){
    return {type: 'GET_OPENHOUSE_DETAILS', payload:response}
}

const getPropertyList = () => async(dispatch) => {
    try{
        const response = await getPropertyData();
            dispatch(openHouseData(response))
    } catch(err){
            dispatch(openHouseData([]));
    }
}


const getPropertyDetails = (id) => async(dispatch) => {
    try{
        const response = await getPropertyDetail(id);
            dispatch(openHouseDetail(response))
    } catch(err){
            dispatch(openHouseDetail([]));
    }
}
export const fetchProperty ={
    openHouseData,
    getPropertyList,
    getPropertyDetails,
    openHouseDetail
}