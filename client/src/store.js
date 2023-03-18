
import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { postListReducer, postDetailsReducer, postDeleteReducer, postCreateReducer, postUpdateReducer } from './reducers/postReducers';

const store = configureStore({
    reducer: {
        postList: postListReducer,
        postDetails: postDetailsReducer,
        postDelete: postDeleteReducer,
        postCreate: postCreateReducer,
        postUpdate: postUpdateReducer,
    },
    preloadedState: {
        
    },
    middleware: [thunk],
})

export default store