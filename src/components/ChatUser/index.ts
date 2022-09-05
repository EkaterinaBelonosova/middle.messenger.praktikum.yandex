import Block from '../../utils/Block';
import template from './chatUser.hbs';
import * as styles from './chatUser.css';

interface ChatUserProps {
    name: string;
    text: string;
    time: string;
    count_mess: number;
}

export class ChatUser extends Block {
  constructor(props: ChatUserProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}