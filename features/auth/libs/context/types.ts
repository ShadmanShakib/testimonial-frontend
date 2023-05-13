export interface User {
  id: string;
  username: string;
}
export interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
export interface DecodedToken {
  id: number;
  email: string;
  iat: number;
  exp: number;
}

export type Action =
  | {
      type: "SIGN_IN";
    }
  | {
      type: "SIGN_UP";
    }
  | {
      type: "LOG_OUT";
    };
