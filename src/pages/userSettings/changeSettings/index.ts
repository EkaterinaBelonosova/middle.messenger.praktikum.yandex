import Block from '../../../utils/Block';
import template from './changeSettings.hbs';
import { Button } from '../../../components/Button';
import { InputBlock } from '../../../components/InputBlock';
import { withStore } from '../../../utils/Store';
import UserController from '../../../controllers/UserController';
import AuthController from '../../../controllers/AuthController';
import { validate, validForm, validFormData } from '../../../utils/validators';
import * as styles from '../userSettings.css';

export type User = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
};

class EditUser extends Block {
  protected initChildren() {
    this.children.inputEmail = new InputBlock({
      name: 'email',
      type: 'text',
      text: 'Почта',
      value: this.props?.email,
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
      value: this.props?.login,
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
      value: this.props?.first_name,
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
      value: this.props?.second_name,
      events: {
        focus: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
        blur: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
      },
    });
    this.children.inputDisplayName = new InputBlock({
      name: 'display_name',
      type: 'tel',
      text: 'Имя в чате',
      value: this.props?.display_name,
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
      value: this.props?.phone,
      events: {
        focus: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
        blur: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
      },
    });

    this.children.linkSing = new Button({
      text: 'Сохранить данные',
      className: 'a-link-button-blue',
      events: {
        click: () => {
          if (validForm('form-edit-user')) {
            this.onSubmit();
          }
        },
      },
    });
    this.children.linkBack = new Button({
      text: 'Назад',
      className: 'a-link-button',
      events: {
        click: () => {
          AuthController.back();
        },
      },
    });
  }

  onSubmit() {
    const data = validFormData('form-edit-user');
    UserController.editUser(data as User);
  }
  
  render() {
    return this.compile(template, { ...this.props, styles });
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const UserEditPage = withUser(EditUser);
