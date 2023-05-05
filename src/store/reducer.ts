import { Actions, AppState, NavigationActions,AuthActions, TripsActions } from "../types/store";
import { addNewTrip } from "./actions";

export const reducer = (
  currentAction: Actions,
  currentState: AppState
): AppState => {
  const { action, payload } = currentAction;

  switch (action) {
    case NavigationActions.NAVIGATE:
      return {
        ...currentState,
        screen: payload,
      };

      case AuthActions.LOGIN:
        return {
            ...currentState,
            user: payload.user
        }

        case TripsActions.ADD:
            return {
                ...currentState,
                trips: [
                    payload,
                    ...currentState.trips,
                ]
            }

    default:
      return currentState;
  }
};