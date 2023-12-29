// const redux = require("redux");
// const createStore = redux.createStore;


// const BUY_CAKE = "BUY_CAKE";

// //---------------------Part 2 Action Part-------------------
// //Action
// // {
// //     type:BUY_CAKE,
// //     info:"First_Name",
// // }
// /*action is an object having type Property 
//   whereas action creator which return the action
// */
// //Action creator
// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: "First redux action",
//   };
// }

// //----------------Part 3 Reducer Part----------------
// //Reducer function
// //(state,action)=>()

// const initialState = {
//   numOfCakes: 10,
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     default:
//       return state;
//   }
// };



// const store = createStore(reducer)
// console.log("Initial State", store.getState());
// const unsubscribe = store.subscribe(()=>console.log("Update State",store.getState()));
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// unsubscribe();

const redux = require("redux");
const createStore = redux.createStore;


const BUY_CAKE = "Buy Cake";
//Action /State
function buyCake(){
    return {
        type:BUY_CAKE,
        info:"This is reducer action"
    }
}


//Reducer
const initialState = {
    noOfCake:10,
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                noOfCake:state.noOfCake-1,
            }
        default: return state;
    }
}

//Store
const store = createStore(reducer);
console.log("Initial State : ",store.getState());
const unsubscribe = store.subscribe(()=> console.log("Update State : ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe();
