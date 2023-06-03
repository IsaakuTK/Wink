import { user } from "./user";

export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LOGIN = "LOGIN",
  SIGNIN = "SIGNIN",
  DASHBOARD = "DASHBOARD",
  PUBLISHED = "PUBLISHED",
  PROFILE = "PROFILE",
  DISPLAY = "DISPLAY",
  ABOUT = "ABOUT",
}

export type AppState = {
  screen: Screens;
  user: user,
};

export enum UserActions {
  "LOGIN" = "LOGIN",
  "REGISTER" = "REGISTER",
  "LOGOUT" = "LOGOUT",
  "EDIT" = "EDIT",
  "SET_USER" = "SET_USER"
}

export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}

export interface LogInAction {
  action: UserActions.LOGIN,
  payload: user
}

export interface LogOutAction {
  action: UserActions.LOGOUT,
  payload: void
}

export interface RegisterAction {
  action: UserActions.REGISTER,
  payload: user
}

export interface SetUserAction {
  action: UserActions.SET_USER,
  payload: string
}

export interface NavigateAction {
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export type Actions = 
NavigateAction
| LogInAction
|LogOutAction
|RegisterAction;