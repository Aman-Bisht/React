const redux = require("redux")
const produce = require("immer").produce
const createStore = redux.createStore;
const initialState = {
    name:"ABC XYZ",
    address:{
        street:"123hyd",
        road:"kondapur",
        state:"UP"
    }
}

const UPDATE_STREET = "UPDATE_STREET"
const updateAddress = (street)=>{
    return {
        type:UPDATE_STREET,
        payload:street,
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_STREET:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street: action.payload,
            //     }
            // }
            return produce(state,(draft)=>{
                draft.address.street = action.payload
            })
        default:return state;
    }
}

const store = createStore(reducer);
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(()=>console.log("Updated State ", store.getState()))
store.dispatch(updateAddress("121bang"));
unsubscribe();