import Block from '../../utils/Block';
import template from './Input.hbs';
import * as styles from './Input.css';

interface InputProps {
    name: string;
    type: string;
    className: string;
    placeholder?: string;
    events?: {
      blur?: (e: { target: HTMLInputElement; }) => void;
      focus?: (e: { target: HTMLInputElement; }) => void;
    };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}