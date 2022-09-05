import Block from '../../utils/Block';
import template from './button.hbs';
import * as styles from './button.css';

interface ButtonProps {
    text: string;
    className: string;
    events?: {
      click: () => void;
    };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}