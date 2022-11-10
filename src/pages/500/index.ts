import Block from '../../utils/Block';
import template from './500.hbs';
import { Error } from '../../components/Error';

export class ErrorPage extends Block {
  
  init() {
    this.children.error = new Error({
      errors: '500',
      text: 'Мы уже фиксим',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
