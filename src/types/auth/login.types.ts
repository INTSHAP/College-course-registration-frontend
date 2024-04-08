export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponseUser {
  role: string;
  isEMailVerified: boolean;
  email: string;
  id: string;
  name: string;
}

export interface LoginResponseType {
  user: LoginResponseUser;
  tokens: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
}

export interface AuthContextType {
  token: string | null;
  user: LoginResponseUser | null;
  setToken: (newToken: string) => void;
  setUser: (newUser: LoginResponseUser) => void;
  setExpires: (newExpire: string) => void;
}
