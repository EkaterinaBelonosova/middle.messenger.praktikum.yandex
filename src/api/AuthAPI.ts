import HTTPTransport from "../utils/fetch";

export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export class AuthAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport();
  }

  signin(data: SigninData) {
    return this.http.post("/auth/signin", data);
  }

  signup(data: SignupData) {
    return this.http.post("/auth/signup", data);
  }

  read(): Promise<User> {
    return this.http.get("/auth/user");
  }

  logout() {
    return this.http.post("/auth/logout");
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
