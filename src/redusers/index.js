const initialState = {
    menu: [], 
    items: [],
    totalPrice: 0,
    error: false,
    modal: true,
    value: '',
    type: 'price'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                error: false
            };

        case 'ADD_TO_CART':
            const id = action.payload;
            
            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0){
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                }
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }

            } 
            // товара раньше не было в корзине
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            };
            
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };
            case 'ON_DELETE':
                const ids = action.payload;
                const itemIndex = state.items.findIndex(item => item.id === ids);
                let price = state.items[itemIndex]['price'] * state.items[itemIndex]['qtty'];
                console.log(state.items)
                console.log( state.items[itemIndex])
                console.log( state.totalPrice)
            return {
                ...state,
                items: [...state.items.filter(r => r.id !== ids)],
                totalPrice: state.totalPrice - price
            };
            case 'MENU_ERROR':
                return {
                    ...state,
                    menu: state.menu,
                    error: true
                };
                case 'ON_SORT':
                   const sorts = action.payload;  
                   const arrSort = state.menu.concat();

                return {
                    ...state,
                    // eslint-disable-next-line array-callback-return
                    menu: arrSort.sort((a, b) => {
                        if(sorts === 'price') {
                          return  a[sorts] > b[sorts] ? 1 : -1;
                        }
                        else if(sorts === 'category') {
                            return a[sorts].localeCompare(b[sorts]);
                        }
                        else if(sorts === 'title'){
                            return (a[sorts] - b[sorts]? 1 : -1);
                        }
                    })
                    
                };
                case 'ON_SEARCH':
                    const value = action.payload;
                    
                    return {
                        ...state,
                        value: value      
                    };
                    case 'ON_CLEAR':
                    return {
                        ...state,
                        items: [],
                        totalPrice: 0
                    };
        default: 
            return state;
    }
}

export default reducer;