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
  id: number;
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
    super('/user');
  }

  editUser(data: EditUser) {
    return this.http.put('/profile', { data });
  }

  editAvatar(data: any) {
    return this.http.put('/profile/avatar', data);
  }

  editPass(data: EditPass) {
    return this.http.put('/password', { data });
  }

  /*read(): Promise<User> {
    return this.http.get('');
  }*/
  
  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();