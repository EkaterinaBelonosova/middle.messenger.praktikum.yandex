import Block from '../../utils/Block';
import template from './error.hbs';
import { Button } from '../Button';
import * as styles from './error.css';
import renderDom from '../../index';

type ErrorProps = {
    text: string;
    errors: string;
}

export class Error extends Block<ErrorProps> {
  public constructor(props: ErrorProps) {
    super(props);
  }
  init() {
    this.children.linkk = new Button({
        text: 'Назад к чатам',
        className: 'a-link-button',
        events: {
          click: () => {
              renderDom('/chats.hbs')
            },
      }
    });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}