import Storage, { PersistanceKeys } from "../utils/storage";
import { Observer, AppState, Screens, Actions } from "../types/store";
import { reducer } from "./reducer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { navigate, setUserCredentials} from "./actions";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../utils/firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, async(u:any) => {
  
  if (await (u)) {
    u !== null ? dispatch(setUserCredentials(u)) : '';
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