import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, orderBy, query, onSnapshot, where, setDoc, doc} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged
} from "firebase/auth";

import firebaseConfig from "./firebaseConfig";
import { appState, dispatch } from "../store";
import { navigate } from "../store/actions";
import { Screens } from "../types/store";
import { User } from "../types/user";
import { Post } from "../types/posts";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    dispatch(navigate(Screens.LOGIN));
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
})  => {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth,email,password);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  })
};


/////////////////////// DB

const db = getFirestore(app);

const AddUser = async (user: any) =>{
  try {
    user.uid = appState.user.uid
    await setDoc(doc(db, "users", user.uid), user)
    return true
  } catch (e) {
    console.error("problem adding user: ", e);
    return false
  }
}

const GetUser = async(): Promise<User> =>{
  let resp: User ={
    uid: "",
    username: "",
    email: "",
    image: "",
    password: "",
  };
  const docRef = doc(db, "users", auth.uid);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    resp = (docSnap.data() as User);
  } else {
    console.log("No such document!");
  }
  return  resp
}


const EditProfile = async (u: User) =>{
  try {
    await setDoc (doc(db, "users", u.uid), u)
    return true
  } catch (e) {
    console.error("Error: ", e);
    return false
  }
}

const CreatePost = async (post: Post) =>{
  try {
  const where = collection(db, "posts")
    await addDoc(where,{...post, createdAt: new Date()});
    return true
  } catch (e) {
    console.error("Error: ", e);
    return false
  }
}

export default {
  registerUser,
  loginUser,
  AddUser,
  GetUser,
  EditProfile,
  onAuthStateChanged,
  CreatePost
};