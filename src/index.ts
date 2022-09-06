import { AuthPage } from './pages/authorization';
import { RegPage } from './pages/registration';
import { ChatsPage } from './pages/chats';
import { UserPage } from './pages/userSettings';
import { dataUser } from './data/userSetting';
import { ErrorPage404 } from './pages/404';
import { ErrorPage } from './pages/500';
import Block from './utils/Block';

const renderDom = (path: string) => {
  let homePage: Block =  new AuthPage({ title: 'Вход' });
  switch(path) {
    case '/':
      homePage = new AuthPage({ title: 'Вход' });
      break
    case '/authorization.hbs':
      homePage = new AuthPage({ title: 'Вход' });
      break
    case '/registration.hbs':
      homePage = new RegPage({ title: 'Регистрация' });
      break
    case '/chats.hbs':
      homePage = new ChatsPage({ title: 'Чаты' });
      break
    case '/userSettings.hbs':
      homePage = new UserPage({ title: 'Пользователь', user: dataUser });
      break
    case '/404.hbs':
      homePage = new ErrorPage404({ title: '404'});
      break
    case '/500.hbs':
      return new ErrorPage({ title: '500'});
      break
  }
  
  const root = document.querySelector('#app')!;
  root.innerHTML = '';
  root.append(homePage.getContent()!);
  homePage.dispatchComponentDidMount();
};

export default renderDom;

document.addEventListener('DOMContentLoaded', () => {
  renderDom('/');
});
