const INITIAL_STATE = {
    
}
const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TESTE':
            return { ...state }
        default:
            return state
    }
}

export { reducers }