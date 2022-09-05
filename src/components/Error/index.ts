import Block from '../../utils/Block';
import template from './error.hbs';
import { Link } from '../Link';
import * as styles from './error.css';

interface ErrorProps {
    text: string;
    errors: string;
}

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }
  init() {
    this.children.linkk = new Link({
        text: 'Назад к чатам',
        className: 'a-link',
        url: './chats.hbs'
    });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}