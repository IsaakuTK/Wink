import { Post } from "./posts";
import { User } from "./user";

export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LOGIN = "LOGIN",
  SIGNIN = "SIGNIN",
  DASHBOARD = "DASHBOARD",
  PUBLISHED = "PUBLISHED",
  PROFILE = "PROFILE",
  DISPLAY = "DISPLAY",
  ABOUT = "ABOUT",
  EDITPROFILE = "EDITPROFILE",
}

export type AppState = {
  user: User,
  screen: Screens,
  posts : Post[],
  followers: User[],
  following: User[],
  userCredentials: String,
}

export enum NavigationActions{
  "NAVIGATE"="NAVIGATE",
}

export interface NavigationAction{
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export enum UserActions {
  "NEWUSER" = "NEWUSER",
  "SETUSERCREDETIALS" = "SETUSERCREDETIALS",
  "EDIT" = "EDIT",
}

export interface NewUserAction {
  action: UserActions.NEWUSER,
  payload: User
}

export interface SetUserCredentialsAction {
  action: UserActions.SETUSERCREDETIALS,
  payload: String
}

export interface EditProfileAction {
  action: UserActions.EDIT,
  payload: User
}

export enum SomeActionsofls {
  "LOGIN" = "LOGIN",
}

export interface LoginAction {
  action: SomeActionsofls.LOGIN,
  payload: User
}


export type Actions = NewUserAction | NavigationAction | SetUserCredentialsAction | LoginAction | EditProfileAction; //|