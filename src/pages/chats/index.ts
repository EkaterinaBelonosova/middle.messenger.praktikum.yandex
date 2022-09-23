import Block from '../../utils/Block';
import template from './chats.hbs';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ChatUser } from '../../components/ChatUser';
import { withStore } from '../../utils/Store';
import UserController from '../../controllers/UserController';
import AuthController from '../../controllers/AuthController';
import * as styles from './chats.css';


class ChatsPage extends Block {
    init() {
      this.children.ChatUser = new ChatUser({
        name: "Имя",
        text: "Тест",
        time: "08:00",
        count_mess: 3
      });
      this.children.ChatUser2 = new ChatUser({
        name: "Имя2",
        text: "Тест2",
        time: "10:00",
        count_mess: 2
      });
      this.children.inputChat = new Input({
        name: "search",
        type: "text",
        className: "chat-input",
        placeholder: "Поиск"
      });
      this.children.inputMess = new Input({
        name: "messages",
        type: "text",
        className: "chat-input-mess",
        placeholder: "Сообщение",
        
      });
      this.children.button = new Button({
        text: '>',
        className: 'form-messages-button'
      });
      this.children.linkProfile = new Button({
        text: 'Профиль >',
        className: 'profile_link-button',
        events: {
            click: () => {
                
              },
        }
      });
      this.children.link404 = new Button({
        text: '404 страница',
        className: 'profile_link-button',
        events: {
            click: () => {
               
              },
        }
      });
      this.children.link500 = new Button({
        text: '500 страница',
        className: 'profile_link-button',
        events: {
            click: () => {
                
              },
        }
      });
      
    }
    render() {
        return this.compile(template, {...this.props, styles });
    }
}


const withChats = withStore((state) => ({ 
  chatsStore: state.allChats,
  chatId: state.chatId,
  token: state.token,
  currentUser: state.currentUser,
  currentChat: state.chat, 
}))

export const ChatsPageS = withChats(ChatsPage);