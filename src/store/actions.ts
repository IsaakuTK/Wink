import { User } from "../types/user";
import { LoginAction, NavigationAction, NavigationActions, NewUserAction, Screens, SetUserCredentialsAction, SomeActionsofls, UserActions } from "../types/store";
import { appState, dispatch } from ".";

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

export const newUser = (user:User): NewUserAction =>{
  return{
      action: UserActions.NEWUSER,
      payload: user,
  }
}


export const loginU = (user:User): LoginAction =>{
  return{
      action: SomeActionsofls.LOGIN,
      payload: user,
  }
}
