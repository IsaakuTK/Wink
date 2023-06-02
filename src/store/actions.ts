import { NavigateAction, NavigationActions, Screens} from "../types/store";

export const navigate = (screen: Screens): NavigateAction => {
  return {
    action: NavigationActions.NAVIGATE,
    payload: screen,
  };
};

export const setUserCredentials = (user: string) => {
return {
  type:"SETUSER",
  payload: user,
}
}

