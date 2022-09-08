import Block from '../../utils/Block';
import template from './authorization.hbs';
import { Button } from '../../components/Button';
import { InputBlock } from '../../components/InputBlock';
import { validate, validForm } from '../../utils/validators';
import * as styles from './authorization.css';
import renderDom from '../../index';

type AuthPageProps = {
    title: string;
  }
export class AuthPage extends Block<AuthPageProps> {
    public constructor(props: AuthPageProps) {
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
        this.children.linkAuth = new Button({
            text: 'Авторизоваться',
            className: 'a-link-button-blue',
            events: {
                click: () => {
                    if (validForm('form-auth')) {
                        renderDom('/chats.hbs')
                    }   
                },
            },
        });
        this.children.linkSing = new Button({
            text: 'Регистрация',
            className: 'a-link-button',
            events: {
                click: () => {
                    renderDom('/registration.hbs')
                  },
            }
        });
    }
    render() {
        return this.compile(template, {...this.props, styles });
    }
}