import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { authReducer } from "./Authentication/reducer";
import { picturesReducer } from "./Pictures/reducer";
import { pictureSagas } from "./Pictures/sagas";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  auth: authReducer,
  pictures: picturesReducer,
});
// lets cache images
const persistedReducer = persistReducer(persistConfig, rootReducer);

function* allSagas() {
  yield all([...pictureSagas]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);

sagaMiddleware.run(allSagas);
