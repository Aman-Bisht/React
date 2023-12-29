// const redux = require("redux");
// const createStore = redux.createStore;

// const BUY_CAKE = "Buy Cake";
// const BUY_ICECREAM = "Buy Ice-cream";

// function buyCake(){
//     return {
//         type: BUY_CAKE,
//         info: "Buy Cake"
//     }
// }

// function buyIceCream(){
//     return {
//         type: BUY_ICECREAM,
//         info:"Buy Ice-Cream",
//     }
// }

// const initialState ={
//     numberOfCake : 20,
//     numberOfIceCream : 10,
// }

// const reducer = (state=initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numberOfCake:state.numberOfCake-1
//             }
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numberOfIceCream:state.numberOfIceCream-1
//             }
//         default:
//             return state
//     }
// }

// const store = createStore(reducer);
// console.log("Initial State : ",store.getState());
// const unsubscribe = store.subscribe(()=> console.log("Updated State : ",store.getState()));
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// unsubscribe()


//-------------------------Using Different Approach----------------------------------------
//--------------------------Using combineReducers--------------------------------------------

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "Buy Cake";
const BUY_ICECREAM = "Buy Ice-cream";

function buyCake(){
    return {
        type: BUY_CAKE,
        info: "Buy Cake"
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info:"Buy Ice-Cream",
    }
}

const cakeState ={
    numberOfCake : 20,    
}
const iceCreamState = {
    numberOfIceCream : 10,
}

const cackeReducer = (state=cakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberOfCake:state.numberOfCake-1
            }
        default:
            return state
    }
}

const iceCreameReducer = (state=iceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCream:state.numberOfIceCream-1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake:cackeReducer,
    iceCreame:iceCreameReducer
})

const store = createStore(rootReducer);
console.log("Initial State : ",store.getState());
const unsubscribe = store.subscribe(()=> console.log("Updated State : ",store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
