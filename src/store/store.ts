import { usersApi } from '@/services';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;
