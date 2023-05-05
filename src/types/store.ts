import { Trip } from "./trips";

export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LOGIN = "LOGIN",
  SIGNIN = "SIGNIN",
  DASHBOARD = "DASHBOARD",
  PUBLISHED = "PUBLISHED",
  PROFILE = "PROFILE",
}

export type AppState = {
  screen: Screens;

  user: {
    userName: string;
    email: string;
  }
  trips: Trip[],
};


export enum TripsActions {
  "ADD" = "ADD",
  "GET" = "GET",
}


export enum AuthActions {
  "LOGIN" = "LOGIN",
  "LOGOUT" = "LOGOUT",
}

export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}


export interface AddTripAction {
  action: TripsActions.ADD,
  payload: Trip
}

export interface GetTripsAction {
  action: TripsActions.GET,
  payload: Trip[]
}

export interface LogInAction {
  action: AuthActions.LOGIN,
  payload: Pick<AppState, "user">
}

export interface LogOutAction {
  action: AuthActions.LOGOUT,
  payload: void
}

export interface NavigateAction {
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export type Actions = 
NavigateAction
|LogInAction
|LogOutAction
|AddTripAction;