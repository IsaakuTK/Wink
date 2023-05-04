export type Observer = ({render: () => void} & HTMLElement);

export enum Screens{
    DASHBOARD = "DASHBORAD",
    LOGIN = "LOGIN",
    SIGNUP = "SIGNUP",
    PROFILE = "PROFILE",
    PUBLISHED = "PUBLISHED",
}

export type AppState = {
    screen: Screens;
};

export enum NavigationActions {
    "NAVIGATE" = "NAVIGATE",
};

export interface NavigateAction {
    action: NavigationActions.NAVIGATE;
    payload: Screens;
};

export type Actions = 
|NavigateAction
