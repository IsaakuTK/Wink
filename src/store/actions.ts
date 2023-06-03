import { NavigateAction, NavigationActions, Screens,LogInAction,RegisterAction,UserActions} from "../types/store";
import { user } from "../types/user";
import Firebase from "../utils/firebase"



export const navigate = (screen: Screens): NavigateAction => {
  return {
    action: NavigationActions.NAVIGATE,
    payload: screen,
  };
};



export const LogIn = async (user:user ): Promise<LogInAction> =>{

  await Firebase.loginUser(user)
  
  return{
      action: UserActions.LOGIN,
      payload: user,
  }
}

export const Register = async (user:user): Promise<RegisterAction> =>{

  await Firebase.registerUser(user)
  

  return{
      action: UserActions.REGISTER,
      payload: user,
  }
}
