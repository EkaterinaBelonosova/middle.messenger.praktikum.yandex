import Block from '../../utils/Block';
import template from './chatInput.hbs';
import * as styles from './chatInput.css';

type ChatInputProps = {
  name: string;
  className?: string;
  placeholder?: string;
};

export class ChatInput extends Block<ChatInputProps> {
  constructor(props: ChatInputProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
