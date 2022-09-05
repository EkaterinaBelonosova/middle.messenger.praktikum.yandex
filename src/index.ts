import { AuthPage } from './pages/authorization';
import { RegPage } from './pages/registration';
import { ChatsPage } from './pages/chats';
import { UserPage } from './pages/userSettings';
import { dataUser } from './data/userSetting';
import { ErrorPage404 } from './pages/404';
import { ErrorPage } from './pages/500';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;
  const path = document.location.pathname;
  console.log(path);
  switch(path) {
    case '/':
      const homePage = new AuthPage({ title: 'Вход' });
      root.append(homePage.getContent()!);
      homePage.dispatchComponentDidMount();
      break
    case '/authorization.hbs':
      const homePage2 = new AuthPage({ title: 'Вход' });
      root.append(homePage2.getContent()!);
      homePage2.dispatchComponentDidMount();
      break
    case '/registration.hbs':
      const Auth = new RegPage({ title: 'Регистрация' });
      root.append(Auth.getContent()!);   
      Auth.dispatchComponentDidMount();
      break
    case '/chats.hbs':
      const Chats = new ChatsPage({ title: 'Чаты' });
      root.append(Chats.getContent()!);   
      Chats.dispatchComponentDidMount();
      break
    case '/userSettings.hbs':
      const User = new UserPage({ title: 'Пользователь', user: dataUser });
      root.append(User.getContent()!);   
      User.dispatchComponentDidMount();
      break
    case '/404.hbs':
      const Error4 = new ErrorPage404({ title: '404'});
      root.append(Error4.getContent()!);   
      Error4.dispatchComponentDidMount();
      break
    case '/500.hbs':
      const Error = new ErrorPage({ title: '500'});
      root.append(Error.getContent()!);   
      Error.dispatchComponentDidMount();
      break

  }

 
});
