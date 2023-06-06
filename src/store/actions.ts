import { User } from "../types/user";
import { EditProfileAction, LoginAction, NavigationAction, NavigationActions, NewUserAction, Screens, SetUserCredentialsAction, SomeActionsofls, UserActions } from "../types/store";
import { appState, dispatch } from ".";
import firebase from "../utils/firebase";

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


export const loginU = async (): Promise<LoginAction> =>{
  const user = await firebase.GetUser()
  
  return{
      action: SomeActionsofls.LOGIN,
      payload: user,
  }
}

export const editProfile = async (user:User): Promise<EditProfileAction> =>{

  await firebase.EditProfile(user)

  return{
      action: UserActions.EDIT,
      payload: user,
  }
}
