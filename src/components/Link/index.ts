import Block from "../../utils/Block";
import template from "./link.hbs";
import * as styles from "./link.css";

type LinkProps = {
  url?: string;
  text: string;
  className: string;
  events?: {
    click: () => void;
  };
};

export class Link extends Block<LinkProps> {
  public constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
