
let initialState = {
    initialItems:[],
    items: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'SEARCH'){
        console.log("Search action dispatched");
        const updatedList = state.initialItems.filter(function(item){
                  return item.toLowerCase().search(
                    action.searchKey.toLowerCase()) !== -1;
                });
        return{
            ...state,
            items:updatedList
        }
    }

    if(action.type === 'FETCH'){
        console.log("FETCH action dispatched");
        return{
            ...state,
            initialItems:action.countries,
            items:action.countries
        }        
    }
     
    return state;
}

export default reducer;