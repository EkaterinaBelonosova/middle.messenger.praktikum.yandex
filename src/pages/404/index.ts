import Block from '../../utils/Block';
import template from './404.hbs';
import { Error } from '../../components/Error';
import * as styles from '../authorization/authorization.css';

export class ErrorPage404 extends Block {
  
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
