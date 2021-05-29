import { createStore, applyMiddleware } from "redux";       //1. import createStore from redux

import thunk from "redux-thunk"     // 6. import thunk from redux-thunk 

//4. now we will give the reducers(rootReducer) to store at (const store = createStore(); )

// 5. now we will give 2nd parameter (applyMiddleWare()) to store

const store = createStore(rootReducer, applyMiddleware(thunk));        //2. Make a Store

export default store;       //3. export the store because it will use any other place