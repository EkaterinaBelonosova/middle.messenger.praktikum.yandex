import Block from '../../utils/Block';
import template from './404.hbs';
import { Error } from '../../components/Error';
import * as styles from '../authorization/authorization.css';

type ErrorPageProps = {
  title: string;
};
export class ErrorPage404 extends Block<ErrorPageProps> {
  public constructor(props: ErrorPageProps) {
    super(props);
  }
  
  init() {
    this.children.error = new Error({
      errors: '404',
      text: 'Не туда попали',
    });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
