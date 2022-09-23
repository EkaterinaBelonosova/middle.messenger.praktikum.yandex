import Block from '../../utils/Block';
import template from './userSettings.hbs';
import { UserProfile } from '../../components/UserProfile';
import { Link } from '../../components/Link';
import { Button } from '../../components/Button';
import { Avatar } from '../../components/Avatar';
import { withStore } from '../../utils/Store';
import UserController from '../../controllers/UserController';
import AuthController from '../../controllers/AuthController';
import * as styles from './userSettings.css';


export type User = {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
}

class UserPageBase extends Block {
    protected initChildren() {   
        this.children.avatar = new Avatar({
            link: `https://ya-praktikum.tech/api/v2/resources${this.props?.avatar}`,
            events: {
              click: () => {
                UserController.avatarEdit();
              },
            },
          });
        this.children.userEmail = new UserProfile({
            name: "Почта", 
            className: "profile-input",
            value: this.props?.email
        });
        this.children.userLogin = new UserProfile({
            name: "Логин", 
            className: "profile-input",
            value: this.props?.login
        });
        this.children.userName = new UserProfile({
            name: "Имя", 
            className: "profile-input",
            value: this.props?.first_name
        });
        this.children.userSecondName = new UserProfile({
            name: "Фамилия", 
            className: "profile-input",
            value: this.props?.second_name
        });
        this.children.userDisplayName = new UserProfile({
            name: "Имя в чате", 
            className: "profile-input",
            value: this.props?.display_name
        });
        this.children.userPhone = new UserProfile({
            name: "Телефон", 
            className: "profile-input",
            value: this.props?.phone
        });
        this.children.linkEditData = new Link({
            text: 'Изменить данные',
            className: 'profile-info-link',
            events: {
                click: () => {
                    UserController.userEdit();
                }
            },
        });
        this.children.linkEditPass = new Link({
            text: 'Изменить пароль',
            className: 'profile-info-link',
            events: {
                click: () => {
                  UserController.passEdit();
                }
            }
        });
        this.children.linkExit = new Button({
            text: 'Выйти',
            className: 'profile-info-link',
            events: {
                click: () => {
                    AuthController.logout();
                }
            }
        });
        this.children.linkBack = new Button({
            text: '<',
            className: 'a-link-button',
            events: {
                click: () => {
                    UserController.messenger();
                  }
            }
        });
    }
    render() {
        return this.compile(template, {...this.props, styles });
    }
}

const withUser = withStore((state) => ({ ...state.user }))

export const UserPage = withUser(UserPageBase);