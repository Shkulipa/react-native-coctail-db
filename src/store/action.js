import requestService from "../requestService/requestService";

export const loadedList = () => async dispatch => {
    const list = await requestService.getListDrinks();

    let newArr = [];

    for (let i = 0; i < list.drinks.length; i++) {
        newArr.push({
            id: i,
            title: list.drinks[i].strCategory,
            checkBox: false
        })
    }

    dispatch({
        type: 'LOADED_LIST',
        payload: newArr
    })
}

export const toggleCheckBox = (id, title) => {
    return {
        type: 'TOGGLE_CHECKBOX',
        payload: id,
        payloadTitle: title
    }
}

export const request = (listFiltersTrue) => async dispatch => {
    let newArr = [];

    for( let i = 0; i < listFiltersTrue.length; i++ ) {
        let obj = await requestService.getDrinks(listFiltersTrue[i].title);
        let newObj = {
            title: listFiltersTrue[i].title,
            data: obj.drinks,
            id: i
        }
        newArr.push(newObj);
    }

    dispatch({
        type: 'REQUEST',
        payload: newArr
    })
}

