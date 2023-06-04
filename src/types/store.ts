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
  "ADD" = "ADD",
  "GET" = "GET"
}

export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}

export interface AddUserAction {
  action: UserActions.ADD,
  payload: user
}

export interface GetUserAction {
  action: UserActions.GET,
  payload: user[]
}


export interface NavigateAction {
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export type Actions = 
NavigateAction
|AddUserAction
|GetUserAction;