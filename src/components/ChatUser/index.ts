import Block from "../../utils/Block";
import template from "./chatUser.hbs";
import * as styles from "./chatUser.css";

type chatUserProps = {
  name: string;
  text: string;
  time?: string;
  style?: string;
  count_mess: number;
  events?: {
    click?: () => void;
  };
};

export class chatUser extends Block<chatUserProps> {
  public constructor(props: chatUserProps) {
    super(props);
  }
  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
