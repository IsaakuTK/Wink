import { NavigateAction, NavigationActions, Screens,  GetTripsAction, AddTripAction, TripsActions } from "../types/store";

export const navigate = (screen: Screens): NavigateAction => {
  return {
    action: NavigationActions.NAVIGATE,
    payload: screen,
  };
};

