export interface LoginData {
  email: string;
  password: string;
}

export interface StudentRegistration {
  user: string;
  _id: string;
  semester: string;
  level: number;
  faculty: {
    name: string;
  };
  department: {
    name: string;
  };
}
export interface LoginResponseUser {
  role: string;
  isEMailVerified: boolean;
  email: string;
  id: string;
  name: string;
  registration: StudentRegistration;
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
  setUser: (newUser: LoginResponseUser | null) => void;
  setExpires: (newExpire: string) => void;
  logout: () => void;
}
