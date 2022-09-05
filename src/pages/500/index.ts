import Block from '../../utils/Block';
import template from './500.hbs';
import { Error } from '../../components/Error';

interface ErrorPageProps {
    title: string;
  }
export class ErrorPage extends Block {
    constructor(props: ErrorPageProps) {
        super(props);
      }
    init() {
        this.children.error = new Error({
            errors: "500", 
            text: "Мы уже фиксим"
        });
    }
    render() {
        return this.compile(template, {...this.props});
    }
}