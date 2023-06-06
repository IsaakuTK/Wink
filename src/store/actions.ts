import { User } from "../types/user";
import { CreaPostAction, EditProfileAction, LoginAction, LogoutAction, NavigationAction, NavigationActions, NewUserAction, Screens, SetUserCredentialsAction, SomeActionsofls, UserActions } from "../types/store";
import firebase from "../utils/firebase";
import { Post } from "../types/posts";
import { appState } from ".";
import { onAuthStateChanged } from "firebase/auth";

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

export const LogOut =  (): LogoutAction =>{

  if(appState.userCredentials !==null || ''){
  setUserCredentials('')  
  sessionStorage.clear()
  navigate(Screens.DISPLAY)
  
  location.reload()
}

  return{
      action: UserActions.LOGOUT,
      payload: undefined,
  }
}

export const loginU = async (): Promise<LoginAction> =>{
  const user = await firebase.GetUser()
  console.log("suser",user)
  //location.reload()
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

export const createPost = async (post:Post): Promise<CreaPostAction> =>{

  await firebase.CreatePost(post)

  return{
      action: UserActions.CREATEPOST,
        payload: post,
    }
}
