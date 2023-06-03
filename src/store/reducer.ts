import { Actions, AppState, NavigationActions, UserActions } from "../types/store";
import { user } from "../types/user";

export const reducer = (
  currentAction: Actions,
  currentState: AppState,
  
): AppState => {
  const { action, payload } = currentAction;

  switch (action) {
    case NavigationActions.NAVIGATE:
      return {
        ...currentState,
        screen: payload,
      };

      case UserActions.LOGIN:
            currentState.user = payload
            return currentState
            
        case UserActions.REGISTER:
            currentState.user = payload
            return currentState 

        case UserActions.LOGOUT: 
            return {
                ...currentState , user:{
                    email: "",
                    password: "",
                    
                }
            }


      default:
        return currentState;
  }
  
  
};
