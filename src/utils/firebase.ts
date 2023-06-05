
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// import { Posts } from "../types/posts";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {firebaseConfig}  from "../firebaseconfig";
import { dispatch } from "../store";
import { navigate } from "../store/actions";
import { Screens } from "../types/store";

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
  setPersistence(auth,browserSessionPersistence)
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

// const addUser = async (id: Posts ) => {
//   try {
//     const where = collection(db, "User");
//     await addDoc(where, id);
//     console.log("se añadió el id user");
//   } catch (error) {
//     console.error(error);
//   }
// };

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
  // addUser,
  // addPost,
  // getPost,
  registerUser,
  loginUser,

};