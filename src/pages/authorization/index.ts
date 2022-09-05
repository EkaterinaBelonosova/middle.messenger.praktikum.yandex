import Block from '../../utils/Block';
import template from './authorization.hbs';
import { Link } from '../../components/Link';
import { InputBlock } from '../../components/InputBlock';
import { validate, validForm } from '../../utils/validators';
import { RegPage } from '../registration';
import * as styles from './authorization.css';

interface AuthPageProps {
    title: string;
  }
export class AuthPage extends Block {
    constructor(props: AuthPageProps) {
        super(props);
      }
    init() {
        this.children.inputLogin = new InputBlock({
            name: "login", 
            type: "text", 
            text: "Логин",
            events: {
                focus: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
                blur: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value)
              }
        });
        this.children.inputPass = new InputBlock({
            name: "password", 
            type: "password", 
            text: "Пароль",
            events: {
                focus: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
                blur: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value)
              }
        });
        this.children.linkAuth = new Link({
            text: 'Авторизоваться',
            className: 'button-link',
            //url: './chats.hbs',
            url: '#',
            events: {
                click: () => {
                    validForm('form-auth')
                },
            },
        });
        this.children.linkSing = new Link({
            text: 'Регистрация',
            className: 'a-link',
            url: './registration.hbs'
            
        });
    }
    render() {
        return this.compile(template, {...this.props, styles });
    }
}