import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./index.js";

const STORE_VERSION = "v2";

function saveToLocalStorage(state) {
  try {
    localStorage.setItem("store", JSON.stringify({ version: STORE_VERSION, auth: state.auth }));
  } catch (e) {
    console.log(e);
  }
}
function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem("store");
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    // version mismatch pe stale state clear karo
    if (parsed.version !== STORE_VERSION) {
      localStorage.removeItem("store");
      return undefined;
    }
    return { auth: parsed.auth };
  } catch (e) {
    localStorage.removeItem("store");
    return undefined;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));
