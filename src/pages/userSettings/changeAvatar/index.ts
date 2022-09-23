import Block from '../../../utils/Block';
import template from './changeAvatar.hbs';
import { Button } from '../../../components/Button';
import UserController from '../../../controllers/UserController';
import AuthController from '../../../controllers/AuthController';
import { withStore } from '../../../utils/Store';
import { Link } from '../../../components/Link';
import * as styles from '../userSettings.css';

export class EditAvatar extends Block<any> {
    constructor(props: any) {
        super(props);
    }
    onSubmit() {
        const inputFile = document.getElementById('avatar') as HTMLInputElement;
        if (inputFile) {
            const data = new FormData();
            data.append('avatar', (inputFile as any).files[0]);
            UserController.editAvatar(data as any);
        }
    }
    init() {
        this.children.buttonSave = new Button({
            text: 'Сохранить аватарку',
            className: 'a-link-button-blue',
            events: {
                click: () => {
                    this.onSubmit()
                }
            },
        });

        this.children.linkBack = new Button({
            text: 'Назад',
            className: 'a-link-button',
            events: {
                click: () => {
                    AuthController.back();
                  }
            }
        });
    } 
    render() {
        return this.compile(template, {...this.props, styles });
    }
}

const withUser = withStore((state) => ({ ...state.user }))

export const UserPage = withUser(EditAvatar);
