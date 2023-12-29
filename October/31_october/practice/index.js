const redux = require("redux");
const reduxlogger = require("redux-logger")
const applyMiddleware = redux.applyMiddleware
const logger = reduxlogger.createLogger()
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const BUY_CAKE = "BUY_CAKE"
const RESTOCK_CAKE ="RESTOCK_CAKE"

function buyCake(){
    return {
        type:BUY_CAKE,
        info:"BUY CAKE"
    }
}

function restockCake(qty=1){
    return {
        type: RESTOCK_CAKE,
        quantity:qty,
    }
}

const initialState={
    numberOfCake:30,
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                numberOfCake: state.numberOfCake-1
            }
        case RESTOCK_CAKE:
            return {
                numberOfCake:state.numberOfCake+action.quantity,
            }
        default: return state;
    }
}

const store = createStore(reducer,applyMiddleware(logger));
console.log("Initial State ",store.getState());
// const unsubscribe = store.subscribe(()=> console.log("Update State",store.getState()));
const unsubscribe = store.subscribe(()=>{});
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake());
// store.dispatch(restockCake(3))

const actions = bindActionCreators({buyCake,restockCake},store.dispatch);
actions.buyCake()
actions.buyCake()
actions.buyCake()
actions.restockCake(3);
unsubscribe();
