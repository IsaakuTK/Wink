import { Trip } from "./trips";

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
};


export enum TripsActions {
  "ADD" = "ADD",
  "GET" = "GET",
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



export interface NavigateAction {
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export type Actions = 
NavigateAction
|AddTripAction;