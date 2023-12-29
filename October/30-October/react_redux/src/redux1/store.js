// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk"
// // import cakeReducer from "./cake/cakeReducer";
// import  rootReducer  from "./rootReducer";
// import logger from "redux-logger";
// import { composeWithDevTools } from 'redux-devtools-extension';


// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

// export default store;


import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store