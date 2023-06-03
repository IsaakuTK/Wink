import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer, Screens } from "../types/store";
import { reducer } from "./reducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { navigate, LogIn } from "./actions";


onAuthStateChanged(auth, async(user) => {
  console.log('Entra');
  console.log('user',user)
  if (user) {
    appState.user !== null ? dispatch(await LogIn (appState.user)) : '';
    dispatch(navigate(Screens.DASHBOARD));
  } else {
    dispatch(navigate(Screens.LOGIN));
  }
});


const emptyState: AppState = {
  screen: Screens.DISPLAY,
  user: {
  email: "",
  password: "",}
};


export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: Actions) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};