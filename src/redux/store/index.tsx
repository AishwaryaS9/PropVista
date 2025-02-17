// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// //Reducers

// import loginReducer from './slice/userSlice.ts';
// import userProfileReducer from './slice/userProfileSlice.ts';
// import listingReducer from './slice/listingSlice.ts';



// export const store = configureStore({
//     reducer: {
//         login: loginReducer,
//         userProfile: userProfileReducer,
//         listing: listingReducer
//     },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >


// **************

import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import loginReducer from './slice/userSlice.ts';
import userProfileReducer from './slice/userProfileSlice.ts';
import listingReducer from './slice/listingSlice.ts';

const rootReducer = combineReducers({
    login: loginReducer,
    userProfile: userProfileReducer,
    listing: listingReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login'], // Only persist the 'login' slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;


