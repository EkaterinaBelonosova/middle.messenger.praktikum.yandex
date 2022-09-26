import BaseAPI from './BaseAPI';

export interface EditPass {
  newPassword: string;
  oldPassword: string;
}

export interface EditUser {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
}
export interface User {
  id?: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super();
  }

  editUser(data: EditUser) {
    return this.http.put('/user/profile', data);
  }

  editAvatar(data: any) {
    return this.http.put('/user/profile/avatar', data);
  }

  editPass(data: EditPass) {
    return this.http.put('/user/password', data );
  }

  read(): Promise<User> {
    return this.http.get('/auth/user');
  }
  
  //read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();