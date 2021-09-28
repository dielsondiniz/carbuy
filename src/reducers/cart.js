const INITIAL_STATE = {
    products: [{ name: 'teste' }],
    cart: []
}
const dotProp = require('dot-prop-immutable');
const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_PRODUTCS':
            return { ...state, products: action.value }
        case 'ADD_PRODUTC_CART': {
            const indexProductAdd = dotProp.get(state, 'cart').findIndex((cart) => cart.id === action.value.id);
            if (indexProductAdd === -1) {
                let product = action.value;
                product.qtd = 1;
                state = dotProp.set(state, 'cart', cart => [...cart, action.value])
            } else {
                let newQtd = dotProp.get(state, `cart.${indexProductAdd}.qtd`)
                newQtd = newQtd + 1;
                state = dotProp.set(state, `cart.${indexProductAdd}.qtd`, newQtd)
            }

            return state
        }
        case 'DEC_PRODUTC_CART': {
            const indexProductAdd = dotProp.get(state, 'cart').findIndex((cart) => cart.id === action.value.id);
            if (indexProductAdd !== -1) {
                let newQtd = dotProp.get(state, `cart.${indexProductAdd}.qtd`)
                newQtd = newQtd - 1;
                if (newQtd > 0) {
                    state = dotProp.set(state, `cart.${indexProductAdd}.qtd`, newQtd)
                } else {
                    state = dotProp.delete(state, `cart.${indexProductAdd}`)
                }
            }

            return state
        }
        case 'REMOVE_PRODUTC_CART': {
            const indexProductAdd = dotProp.get(state, 'cart').findIndex((cart) => cart.id === action.value.id);
            if (indexProductAdd !== -1) {
                state = dotProp.delete(state, `cart.${indexProductAdd}`)
            }

            return state
        }

        default:
            return state
    }
}

export { reducers }