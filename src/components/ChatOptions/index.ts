import Block from '../../utils/Block';
import template from './chatOptions.hbs';
import ChatController from '../../controllers/ChatController';

import { Button } from '../Button';
import { ChatInput } from '../ChatInput';

import { validFormData } from '../../utils/validators';

import * as styles from './chatOptions.css';

type ChatOptionsProps = {
  chatId: number;
  nameChat: string;
};

export class ChatOptions extends Block<ChatOptionsProps> {
  constructor(props: ChatOptionsProps) {
    super(props);
  }

  protected initChildren() {
    this.children.buttonRemoveChat = new Button({
      text: 'Удалить чат',
      className: 'a-link-button-red',
      events: {
        click: () => {
          ChatController.deleteChat(this.props.chatId);
        },
      },
    });

    this.children.inputUserId = new ChatInput({
      name: 'userId',
      className: 'user-input-add',
      placeholder: 'id user',
    });

    this.children.buttonAddUser = new Button({
      text: 'Добавить пользователя',
      className: 'a-link-button-blue',
      events: {
        click: () => {
          const data = validFormData('add-remove-user');
          console.log(data);
          if (data?.userId) {
            ChatController.addUser({
              chatId: this.props.chatId,
              users: [data.userId],
            });
          }
          var element = document.querySelector('.add-remove-user') as HTMLFormElement;
          if (typeof element !== 'undefined' && element !== null) {
            element.reset();
          }
        },
      },
    });

    this.children.buttonRemoveUser = new Button({
      text: 'Удалить пользователя',
      className: 'a-link-button-red',
      events: {
        click: () => {
          const data = validFormData('add-remove-user');
          if (data?.userId) {
            ChatController.deleteUser({
              chatId: this.props.chatId,
              users: [parseInt(data.userId)],
            });
            data.userId = '';
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
