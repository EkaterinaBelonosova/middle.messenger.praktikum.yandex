import Block from '../../utils/Block';
import template from './chats.hbs';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ChatUser } from '../../components/ChatUser';
import * as styles from './chats.css';
import { validate, validForm } from '../../utils/validators';

interface ChatsPageProps {
    title: string;
  }
export class ChatsPage extends Block {
    constructor(props: ChatsPageProps) {
        super(props);
      }
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
    }
    render() {
        return this.compile(template, {...this.props, styles });
    }
}