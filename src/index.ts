import { AuthPage } from './pages/authorization';
import { RegPage } from './pages/registration';
import { UserPage } from './pages/userSettings';
import { EditAvatar } from './pages/userSettings/changeAvatar';
import { EditPassword } from './pages/userSettings/changePassword';
import { UserEditPage } from './pages/userSettings/changeSettings';
import { ChatsPageS } from './pages/chats';
import Router from './utils/Router';
import store from './utils/Store';
import AuthController from './controllers/AuthController';
import ChatController from './controllers/ChatController';


enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/settings',
  Avatar = '/settings/change-avatar',
  PassWord = '/settings/change-pass',
  EditProfile = '/settings/change-profile',
  Chats =  '/messenger',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, AuthPage)
    .use(Routes.Register, RegPage)
    .use(Routes.Profile, UserPage)
    .use(Routes.Avatar, EditAvatar)
    .use(Routes.PassWord, EditPassword)
    .use(Routes.EditProfile, UserEditPage)
    .use(Routes.Chats, ChatsPageS)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }
  try {
    await AuthController.fetchUser();
    await ChatController.getChats();

    Router.start();
 
    if (!isProtectedRoute) {
      Router.go(Routes.Chats)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});