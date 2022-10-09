import Block from '../../utils/Block';
import template from './registration.hbs';
import { Button } from '../../components/Button';
import { LinkBase } from '../../components/LinkBase';
import { InputBlock } from '../../components/InputBlock';
import * as styles from './registration.css';
import {
  validate,
  isErrorMes,
  isDelError,
  validForm,
  validFormData,
} from '../../utils/validators';
import { SignupData } from '../../api/AuthAPI';
import AuthController from '../../controllers/AuthController';

export class RegPage extends Block {
  public constructor() {
    super({});
  }

  init() {
    this.children.inputEmail = new InputBlock({
      name: 'email',
      type: 'text',
      text: 'Почта',
      events: {
        focus: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
        blur: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
      },
    });
    this.children.inputLogin = new InputBlock({
      name: 'login',
      type: 'text',
      text: 'Логин',
      events: {
        focus: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
        blur: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
      },
    });
    this.children.inputFirstName = new InputBlock({
      name: 'first_name',
      type: 'text',
      text: 'Имя',
      events: {
        focus: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
        blur: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
      },
    });
    this.children.inputSecondName = new InputBlock({
      name: 'second_name',
      type: 'text',
      text: 'Фамилия',
      events: {
        focus: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
        blur: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
      },
    });
    this.children.inputPhone = new InputBlock({
      name: 'phone',
      type: 'tel',
      text: 'Телефон',
      events: {
        focus: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
        blur: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
      },
    });
    this.children.inputPass = new InputBlock({
      name: 'password',
      type: 'password',
      text: 'Пароль',
      events: {
        focus: (e: { target: HTMLInputElement }) => {
          validate(e.target.name, e.target.value);
          const passInput = document.querySelector('input[name=password2]') as HTMLInputElement;
          if (passInput.value !== (e.target as HTMLInputElement).value) {
            isErrorMes('password2', 'Пароли должны совпадать');
          } else {
            isDelError('password2');
          }
        },
        blur: (e: { target: HTMLInputElement }) => {
          validate(e.target.name, e.target.value);
          const passInput = document.querySelector('input[name=password2]') as HTMLInputElement;
          if (passInput.value !== (e.target as HTMLInputElement).value) {
            isErrorMes('password2', 'Пароли должны совпадать');
          } else {
            isDelError('password2');
          }
        },
      },
    });
    this.children.inputPass2 = new InputBlock({
      name: 'password2',
      type: 'password',
      text: 'Пароль (ещё раз)',
      events: {
        focus: (e: { target: HTMLInputElement }) => {
          const passInput = document.querySelector('input[name=password]') as HTMLInputElement;
          if (passInput.value !== (e.target as HTMLInputElement).value) {
            isErrorMes(e.target.name, 'Пароли должны совпадать');
          } else {
            isDelError(e.target.name);
          }
        },
        blur: (e: { target: HTMLInputElement }) => {
          const passInput = document.querySelector('input[name=password]') as HTMLInputElement;
          if (passInput.value !== (e.target as HTMLInputElement).value) {
            isErrorMes(e.target.name, 'Пароли должны совпадать');
          } else {
            isDelError(e.target.name);
          }
        },
      },
    });
    this.children.linkSing = new Button({
      text: 'Зарегистрироваться',
      className: 'a-link-button-blue',
      events: {
        click: () => {
          if (validForm('form-registr')) {
            this.onSubmit();
          }
        },
      },
    });
    this.children.linkComeIn = new LinkBase({
      label: 'Войти',
      to: '/',
      className: 'a-link-button',
    });
  }

  onSubmit() {
    const data = validFormData('form-registr');
    AuthController.signup(data as SignupData);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
