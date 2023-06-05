import { User } from "../types/user";
import { NavigationAction, NavigationActions, Screens, SetUserCredentialsAction, UserActions } from "../types/store";

export const navigate = (screen:Screens): NavigationAction =>{
  return{
      action: NavigationActions.NAVIGATE,
      payload: screen,
  }
}


export const setUserCredentials = (user: string): SetUserCredentialsAction => {
return {
    action: UserActions.SETUSERCREDETIALS,
    payload: user,
  }
}

