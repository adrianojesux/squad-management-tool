import { action } from "typesafe-actions";
import { UserActionTypes } from "./types";
import { User } from "./../../../interfaces/user";

export const userRequest = () => action(UserActionTypes.LOAD_USER);
export const userLoadSuccess = (data: User) =>
  action(UserActionTypes.LOAD_SUCCESS, { data });
export const userError = () => action(UserActionTypes.LOAD_ERROR);
