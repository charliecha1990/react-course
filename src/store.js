import {createStore} from 'redux';



// reducer is the one that operates the real states
const counterReducer = (state=0, action) => {
    switch(action.type) {
        case 'add':
            return state+1;
        case 'minus':
            return state-1; 
    }
}

export default createStore(counterReducer)