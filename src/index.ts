import { AuthPage } from './pages/authorization';
import { RegPage } from './pages/registration';
import { UserPage } from './pages/userSettings';
import { EditAvatar } from './pages/userSettings/changeAvatar';
import Router from './utils/Router';
import store from './utils/Store';
import AuthController from './controllers/AuthController';


enum Routes {
  Index = '/',
  Register = '/register',
  Profile = '/profile',
  Avatar = '/profile/change-avatar',
  PassWord = '/profile/change-pass',
  EditProfile = '/profile/change-profile'
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, AuthPage)
    .use(Routes.Register, RegPage)
    .use(Routes.Profile, UserPage)
    .use(Routes.Avatar, EditAvatar)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }
  try {
    await AuthController.fetchUser();

    Router.start();
 
    if (!isProtectedRoute) {
      Router.go(Routes.Profile)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});