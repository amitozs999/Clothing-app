import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

const middleWares = [loggerMiddleware];

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore( persistedReducer,undefined, composedEnhancers);
//export const store = createStore(rootReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);


//store-> createstore(rootreducer)

// rootReducer = combineReducers({
//     user: userReducer,                        import { userReducer } from './user/user.reducer';
//     categories: categoriesReducer,       
//     cart: cartReducer,
//   });


//1. user.reducer
// export const userReducer = (state = INITIAL_STATE, action) => {
//     const { type, payload } = action;
  
//     switch (type) {
//       case USER_ACTION_TYPES.SET_CURRENT_USER:      import { USER_ACTION_TYPES } from './user.types';
//         return { ...state, currentUser: payload };
//       default:
//         return state;
//     }
//   };


//2. user.types
// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'user/SET_CURRENT_USER',
//   };


//3. user.selector
//export const selectCurrentUser = (state) => state.user.currentUser;


//4. user.action
// export const setCurrentUser = (user) =>
//   createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);