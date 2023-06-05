
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, getDocs, doc, query} from "firebase/firestore";
// import { Posts } from "../types/posts";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {firebaseConfig}  from "../firebaseconfig";
import { appState, dispatch } from "../store";
import { navigate } from "../store/actions";
import { Screens } from "../types/store";
import { User } from "../types/user";

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
    dispatch(navigate(Screens.DASHBOARD));
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
    user.uid = appState.userCredentials.uid
    await setDoc(doc(db, "users", user.uid), user)
    return true
  } catch (e) {
    console.error("problem adding user: ", e);
    return false
  }
}

const GetUser = async(): Promise<User[]> =>{
  const resp: User[] = [];

  const theuser=query(collection(db,"users"))
  const all = await getDocs(theuser);
  all.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    resp.push({
      ...doc.data()
    }as User)
  });
  return resp
}

// const addPost = async (post: Omit<Posts, "id">) => {
//   try {
//     const where = collection(db, "Post");
//     await addDoc(where, post);
//     console.log("se añadió el post");
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getPost = async () => {
//   const querySnapshot = await getDocs(collection(db, "products"));
//   const transformed: Array<Posts> = [];

//   querySnapshot.forEach((doc) => {
//     const data: Omit<Posts, "id"> = doc.data() as any;
//     transformed.push({ id: doc.id, ...data });
//   });

//   return transformed;
// };

export default {
  signOut,
  registerUser,
  loginUser,
  AddUser,
  GetUser,
};