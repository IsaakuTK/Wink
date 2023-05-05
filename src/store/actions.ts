import { NavigateAction, NavigationActions, Screens, AuthActions,LogInAction, LogOutAction, GetTripsAction, AddTripAction, TripsActions } from "../types/store";

export const navigate = (screen: Screens): NavigateAction => {
  return {
    action: NavigationActions.NAVIGATE,
    payload: screen,
  };
};

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
  return {
      action: AuthActions.LOGIN,
      payload
  }
}

export const addNewTrip = ({payload}: Pick<AddTripAction, "payload">): AddTripAction => {
  return {
      action: TripsActions.ADD,
      payload
  }
}