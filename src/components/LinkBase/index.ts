import Block from '../../utils/Block';
import { PropsWithRouter, withRouter } from '../../hocs/withRouter';
import template from './link.hbs';
import * as styles from './link.css';

interface LinkProps extends PropsWithRouter {
  to: string;
  label: string;
  className: string;
  events?: {
    click: () => void;
  };
}

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate(),
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}

export const LinkBase = withRouter(BaseLink);
