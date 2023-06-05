import Storage, { PersistanceKeys } from "../utils/storage";
import { AppState, Screens } from "../types/store";
import { Observer } from "../types/store";
import { reducer } from "./reducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { navigate, setUserCredentials} from "./actions";


onAuthStateChanged(auth, async(u:any) => {
  if (u) {
    u.uid !== null ? dispatch(setUserCredentials(u)) : '';
    appState.user.email = String(u.email);
    appState.user.uid = u.uid;
    dispatch(navigate(Screens.DASHBOARD));
  } else {
    dispatch(navigate(Screens.DISPLAY));
  }
});

const emptyState : AppState = {
  screen: Screens.DISPLAY,
  user: {
    uid: "",
    username: "",
    email: "",
    image: "",
    password: "",
  },
  posts : [],
  followers : [],
  following : [],
  userCredentials: "",
};


export let appState = Storage.get<any>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: any) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};