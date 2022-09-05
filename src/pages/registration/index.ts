import Block from '../../utils/Block';
import template from './registration.hbs';
import { Link } from '../../components/Link';
import { InputBlock } from '../../components/InputBlock';
import * as styles from './registration.css';
import { validate, isErrorMes, isDelError, validForm } from '../../utils/validators';

interface RegPageProps {
    title: string;
  }
export class RegPage extends Block {
    constructor(props: RegPageProps) {
        super(props);
      }
    init() {
        this.children.inputEmail = new InputBlock({
            name: "email", 
            type: "text", 
            text: "Почта",
            events: {
                focus: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
                blur: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value)
              },
        });
        this.children.inputLogin = new InputBlock({
            name: "login", 
            type: "text", 
            text: "Логин",
            events: {
                focus: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
                blur: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value)
              },
        });
        this.children.inputFirstName = new InputBlock({
            name: "first_name", 
            type: "text", 
            text: "Имя",
            events: {
                focus: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
                blur: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value)
              },
        });
        this.children.inputSecondName = new InputBlock({
            name: "second_name", 
            type: "text", 
            text: "Фамилия",
            events: {
                focus: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value),
                blur: (e: { target: HTMLInputElement; }) => validate(e.target.name, e.target.value)
              },
        });
        this.children.inputPass = new InputBlock({
            name: "password", 
            type: "password", 
            text: "Пароль",
            events: {
                focus: (e: { target: HTMLInputElement; }) => {
                    validate(e.target.name, e.target.value)
                    const passInput = document.querySelector('input[name=password2]') as HTMLInputElement;
                    if (passInput.value !== (e.target as HTMLInputElement).value) {
                        isErrorMes("password2", 'Пароли должны совпадать')
                    } else {
                        isDelError("password2")
                    }
                },
                blur: (e: { target: HTMLInputElement; }) => {
                    validate(e.target.name, e.target.value)
                    const passInput = document.querySelector('input[name=password2]') as HTMLInputElement;
                    if (passInput.value !== (e.target as HTMLInputElement).value) {
                        isErrorMes("password2", 'Пароли должны совпадать')
                    } else {
                        isDelError("password2")
                    }
                }
              },
        });
        this.children.inputPass2 = new InputBlock({
            name: "password2", 
            type: "password", 
            text: "Пароль (ещё раз)",
            events: {
                focus: (e: { target: HTMLInputElement; }) => {
                    const passInput = document.querySelector('input[name=password]') as HTMLInputElement;
                    if (passInput.value !== (e.target as HTMLInputElement).value) {
                        isErrorMes(e.target.name, 'Пароли должны совпадать')
                    } else {
                        isDelError(e.target.name)
                    }
                },
                blur: (e: { target: HTMLInputElement; }) => {
                    const passInput = document.querySelector('input[name=password]') as HTMLInputElement;
                    if (passInput.value !== (e.target as HTMLInputElement).value) {
                        isErrorMes(e.target.name, 'Пароли должны совпадать')
                    } else {
                        isDelError(e.target.name)
                    }
                }
        
            }
        });
        this.children.linkSing = new Link({
            text: 'Зарегистрироваться',
            className: 'button-link',
            //url: './chats.hbs',
            url: '#',
            events: {
                click: () => validForm('form-registr'),
            },
        });
        this.children.linkComeIn = new Link({
            text: 'Войти',
            className: 'a-link',
            url: './authorization.hbs'
        });
    }
    render() {
        return this.compile(template, {...this.props, styles });
    }
}