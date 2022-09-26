import Block from '../../utils/Block';
import template from './chatUser.hbs';
import * as styles from './chatUser.css';

type ChatUserProps = {
    name: string;
    text: string;
    time?: string;
    style?: string;
    count_mess: number;
    events?: {
      click?: () => void;
    }
}

export class ChatUser extends Block<ChatUserProps> {
  public constructor(props: ChatUserProps) {
    super(props);
  }
  render() {
    return this.compile(template, { ...this.props, styles });
  }
}