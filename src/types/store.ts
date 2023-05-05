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
};

export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}

export interface NavigateAction {
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export type Actions = NavigateAction;