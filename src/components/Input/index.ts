import Block from '../../utils/Block';
import template from './Input.hbs';
import * as styles from './Input.css';

type InputProps = {
    name: string;
    type: string;
    className: string;
    placeholder?: string;
    events?: {
      blur?: (e: { target: HTMLInputElement; }) => void;
      focus?: (e: { target: HTMLInputElement; }) => void;
    };
    value?: string;
}

export class Input extends Block<InputProps> {
  public constructor(props: InputProps) {
    super(props);
  }
  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }
  render() {
    return this.compile(template, { ...this.props, styles });
  }
}