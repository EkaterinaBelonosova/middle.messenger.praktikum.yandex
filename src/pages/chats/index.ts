import Block from '../../utils/Block';
import template from './chats.hbs';
import { Input } from '../../components/Input';
import { ChatInput } from '../../components/ChatInput';
import { ChatOptions } from '../../components/ChatOptions';

import { Message } from '../../components/Message';

import { Button } from '../../components/Button';
import { ChatUser } from '../../components/ChatUser';
import { withStore } from '../../utils/Store';
import { validFormData  } from '../../utils/validators';

import ChatController from '../../controllers/ChatController';
import * as styles from './chats.css';

export type ChatInfo = {
  last_message: {
    content: string
  };
  title: string;
  id: number;
  unread_count: number;
}

type MessageData = {
  time: Date;
  user_id: number;
  content: string;
}

class ChatsPage extends Block {
  protected initChildren() {
    this.children.chatList = [];
    if (this.props?.allChats !== undefined) {
      Object.values(this.props.allChats).map((chats: any) => {
        const text = chats.last_message?.content.length > 30 ? `${chats.last_message?.content.slice(0, 30)}...` : chats.last_message?.content;

        this.children.chatList.push(
          new ChatUser({
            name: chats.title,
            text: text,
            count_mess: chats.unread_count,
            style: (chats.unread_count > 0 ) ? "" : "none",
            events: {
              click: () => {
                ChatController.getChat(chats.id, this.props.user.id, chats.title);
              },
            }
          }),
        );
      });
    }

    if (this.props?.token !== undefined) {
      this.children.header = new ChatOptions({
        chatId: this.props.chatId,
        nameChat: this.props.nameChat
      });
    }

    this.children.messages = [];

    if (this.props?.chat !== undefined) {
      this.props.chat.forEach((message: MessageData) => {
        const date = new Date(message.time);
        const isMyMessage = message.user_id === this.props.user.id;
        this.children.messages.unshift(
          new Message({
            content: message.content,
            time: `${date.getHours()}:${date.getMinutes()}`,
            className: isMyMessage ? 'message-outgoing' : 'message-incoming',
          }),
        );
      });
    }
    this.children.inputMess = new Input({
      name: "message",
      type: "text",
      className: "chat-input-mess",
      placeholder: "Сообщение",
      
    });
    this.children.button = new Button({
      text: '>',
      className: 'form-messages-button',
      events: {
        click: (evt) => {
          evt.preventDefault();
          const data = validFormData('chat-messages');
          if (data?.message) {
            ChatController.sendMessage(data as {message: string});
          }
        },
      },
    });
    this.children.linkProfile = new Button({
      text: 'Профиль >',
      className: 'profile_link-button',
      events: {
        click: () => {
          ChatController.profile();
        },
      }
    });

    this.children.buttonAddChat = new Button({
      text: 'Добавить чат',
      className: 'profile_link-button',
      events: {
        click: () => {
          const data = validFormData('add-chat');
          if (data?.title) {
            ChatController.createChat(data);
          }
        },
      },
    });
    this.children.inputChat = new Input({
      name: "search",
      type: "text",
      className: "chat-input",
      placeholder: "Поиск"
    });
    this.children.inputChatName = new ChatInput({
      name: 'title',
      className: "chat-input-add"
    });
  }
    render() {
        return this.compile(template, {...this.props, styles });
    }
}


const withChats = withStore((state) => ({
  allChats: state.allChats,
  chatId: state.chatId,
  nameChat: state.nameChat,
  token: state.token,
  user: state.user,
  chat: state.chat
}))

export const ChatsPageS = withChats(ChatsPage);
/*chatsAll: state.allChats,
  chatId: state.chatId,
  token: state.token,
  currentUser: state.currentUser,
  currentChat: state.chat,*/