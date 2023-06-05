import { Post } from "./posts";
import { User } from "./user";

export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LOGIN = "LOGIN",
  SIGNIN = "SIGNIN",
  DASHBOARD = "DASHBOARD",
  PUBLISHED = "PUBLISHED",
  PROFILE = "PROFILE",
  DISPLAY = "DISPLAY",
  ABOUT = "ABOUT",
}

export type AppState = {
  user: User,
  screen: Screens,
  posts : Post[],
  followers: User[],
  following: User[],
  userCredentials: String,
}