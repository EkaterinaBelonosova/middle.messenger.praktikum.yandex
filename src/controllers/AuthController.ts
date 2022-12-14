import { AuthAPI, SigninData, SignupData } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);
      await this.fetchUser();

      router.go('/messenger');
    } catch (e: any) {
      alert(e.reason);
      console.error(e);
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/settings');
    } catch (e: any) {
      alert(e.reason);
      console.error(e);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set('user', user);
  }

  async logout() {
    try {
      await this.api.logout();

      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async back() {
    try {
      router.back();
    } catch (e: any) {
      console.error(e.message);
    }
  }
  
  async forward() {
    try {
      router.forward();
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
