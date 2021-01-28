const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}
const onDelete = (id) => {
    return {
        type: 'ON_DELETE',
        payload: id
    }
}

const onError = () => {
    return {
        type: 'MENU_ERROR'
    }
}
const onSort = (sort) => {
    return {
        type: 'ON_SORT',
        payload: sort

    }
}

const onSearch = (search) => {
    return {
        type: 'ON_SEARCH',
        payload: search

    }
}
const onClear = () => {
    return {
        type: 'ON_CLEAR'
    }
}
export {
    menuLoaded,
    addToCart,
    onDelete,
    onError,
    onSort,
    onSearch,
    onClear
};