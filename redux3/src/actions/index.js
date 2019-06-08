import { getPropertyData } from './propertySearch';

export function openHouseData(response){
    return {type: 'GET_OPENHOUSE_DATA', payload:response}
}

const getPropertyList = () => async(dispatch) => {
    try{
        const response = await getPropertyData();
            dispatch(openHouseData(response))
    } catch(err){
            dispatch(openHouseData([]));
    }
}

export const fetchProperty ={
    openHouseData,
    getPropertyList
}