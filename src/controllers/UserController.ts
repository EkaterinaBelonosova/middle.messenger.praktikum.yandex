import API, { UserAPI, EditUser, EditPass } from '../api/UserAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async editAvatar(data: any) {
    try {
      await this.api.editAvatar(data);
      router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }

  async editUser(data: EditUser) {
    try {
      await this.api.editUser(data);
      router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }
  async editPass(data: EditPass) {
    try {
      await this.api.editPass(data);
      router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }

  async avatarEdit() {
    try {
      router.go('/profile/change-avatar');
    } catch (e: any) {
      console.error(e);
    }
  }

  async passEdit() {
    try {
      router.go('/profile/change-pass');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async userEdit() {
    try {
      router.go('/profile/change-profile');
    } catch (e: any) {
      console.error(e.message);
    }
  }

}

export default new UserController();