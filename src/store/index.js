import { createStore } from 'redux'
const initState = { value: 0, showCounter: false }
const counterReduser = (state = initState, action) => {
    if (action.type === 'increase') {
        return {...state, value: state.value + action.payload}
    } 
    if (action.type === 'decrease') {
        return {...state, value: state.value - action.payload}
    }
    if (action.type === 'toggleCounter') {
        return {...state, showCounter: !state.showCounter}
    }
    return state;   
}

// app init --> run state --> action (none) --> counter reduser --> 0

const store = createStore(counterReduser);

export default store;