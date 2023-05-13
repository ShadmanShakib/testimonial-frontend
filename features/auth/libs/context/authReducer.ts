import { AuthContextValue, Action } from "./types";
export default function authReducer(state: any, action: Action) {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state };
  }
}
