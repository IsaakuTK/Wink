import { Actions, AppState, NavigationActions, PostAactions, SomeActionsofls, UserActions } from "../types/store";

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


      case SomeActionsofls.LOGIN:
        prevState.user = payload
        return prevState

        default:
        return prevState;

       case UserActions.EDIT:
        prevState.user = payload
            return prevState


      case UserActions.LOGOUT:
        return {
          ...prevState , userCredentials:""
      }

        case PostAactions.CREATEPOST:
          prevState.posts = [...prevState.posts, payload]
          return prevState

            
      case PostAactions.GETPOSTS:
        prevState.posts = payload
            return prevState
  }
};