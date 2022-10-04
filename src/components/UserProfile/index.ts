import Block from "../../utils/Block";
import template from "./userProfile.hbs";
import * as styles from "./userProfile.css";

type UserProfileProps = {
  name: string;
  className: string;
  value: string;
};

export class UserProfile extends Block<UserProfileProps> {
  public constructor(props: UserProfileProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
