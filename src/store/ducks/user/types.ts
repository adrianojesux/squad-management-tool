import { User } from "./../../../interfaces/user";

export interface UserState {
  loading: boolean;
  error: boolean;
  data: User | null;
}

export enum UserActionTypes {
  LOAD_USER = "@user/load-user",
  LOAD_SUCCESS = "@user/load-success",
  LOAD_ERROR = "@user/load-error",
}
