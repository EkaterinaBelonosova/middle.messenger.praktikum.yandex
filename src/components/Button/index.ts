import Block from "../../utils/Block";
import template from "./button.hbs";
import * as styles from "./button.css";

type ButtonProps = {
  text: string;
  className: string;
  events?: {
    click?: (e: Event) => void;
  };
};

export class Button extends Block<ButtonProps> {
  public constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
