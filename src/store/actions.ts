import { User } from "../types/user";
import { CreaPostAction, EditProfileAction, GetPostsAction, LoginAction, LogoutAction, NavigationAction, NavigationActions, NewUserAction, PostAactions, Screens, SetUserCredentialsAction, SomeActionsofls, UserActions } from "../types/store";
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
  navigate(Screens.DASHBOARD)
  return{
      action: UserActions.NEWUSER,
      payload: user,
  }
}

export const LogOut =  (): LogoutAction =>{

  if(appState.userCredentials !==null || ''){
  navigate(Screens.LOGIN)
  setUserCredentials('')  
  sessionStorage.clear()
  localStorage.clear()
  appState.posts = []
    appState.followers=[]
    appState.following=[]
    appState.user={
        uid: "",
      username: "",
      email: "",
      password: "",
      image: "",
      
    }    
  
}

  return{
      action: UserActions.LOGOUT,
      payload: undefined,
  }
}

export const getUs = async (): Promise<LoginAction> =>{
  onAuthStateChanged
  const user = await firebase.GetUser()
  navigate(Screens.DASHBOARD)
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
      action: PostAactions.CREATEPOST,
        payload: post,
    }
}

export const getPosts = async (): Promise<GetPostsAction> =>{

  const posts = await firebase.GetPosts()

  return{
      action: PostAactions.GETPOSTS,
      payload: posts,
  }
}
