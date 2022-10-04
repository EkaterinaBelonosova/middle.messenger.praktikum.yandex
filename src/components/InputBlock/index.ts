import Block from "../../utils/Block";
import template from "./inputBlock.hbs";
import { Input } from "../Input";
import * as styles from "./inputBlock.css";

type InputBlockProps = {
  name: string;
  text: string;
  type: string;
  value?: string;
  placeholder?: string;
  events?: {
    blur?: (e: { target: HTMLInputElement }) => void;
    focus?: (e: { target: HTMLInputElement }) => void;
  };
};

export class InputBlock extends Block<InputBlockProps> {
  public constructor(props: InputBlockProps) {
    super(props);
  }

  init() {
    this.children.input = new Input({
      name: this.props.name,
      type: this.props.type,
      className: "input-field",
      events: this.props.events,
      value: this.props.value,
      placeholder: ".",
    });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
