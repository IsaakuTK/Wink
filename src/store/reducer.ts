import { Actions, AppState, NavigationActions, UserActions } from "../types/store";

export const reducer = (Action: Actions, prevState: AppState) => {
  const { action, payload } = Action; 

  switch (action) {
    case NavigationActions.NAVIGATE:
      return {
        ...prevState,
        screen: payload,
    }

      case UserActions.SETUSERCREDETIALS:
        
        prevState.userCredentials = payload;
        return prevState


      case UserActions.NEWUSER:
        
        prevState.user = payload
        return prevState

        default:
        return prevState;
  }
};