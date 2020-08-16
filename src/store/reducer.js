const intialState = {
    listFilters: [],
    listFiltersTrue: [],

    listDrinks: [],

    loadedList: false
};

export const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'LOADED_LIST':
            return {
                ...state,
                loadedList: true,
                listFilters: action.payload
            }

        case 'TOGGLE_CHECKBOX':
            const listFilters = state.listFilters.map(item => {
                if(item.id === action.payload) {
                    item.checkBox = !item.checkBox
                }
                return item
            })


            return {
                ...state,
                listFilters: listFilters,
                listFiltersTrue: listFilters.filter(item => item.checkBox === true)
            }

        case 'REQUEST':
            return {
                ...state,
                listDrinks: action.payload
            }


        default:
            return state
    }
}