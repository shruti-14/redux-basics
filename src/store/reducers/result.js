import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT: 
            return {
                ...state,
                results: state.results.concat({id:new Date(),value:action.resultValue})
            }
        case actionTypes.DELETE_RESULT: 
            const filteredArray = state.results.filter(e=>{
                return e.id !== action.resultId;
            });
            return {
                ...state,
                results: filteredArray
            }    
    }
    return state;
}

export default reducer;