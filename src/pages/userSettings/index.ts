import Block from '../../utils/Block';
import template from './userSettings.hbs';
import { UserProfile } from '../../components/UserProfile';
import { Link } from '../../components/Link';
import * as styles from './userSettings.css';


export interface User {
    email: string;
    login: string;
    name: string;
    second_name: string;
    display_name: string;
    phone: string;
}
  
interface UserPageProps {
    title: string;
    user: User;
}

export class UserPage extends Block {
    constructor(props: UserPageProps) {
        super(props);
    }
    init() {    
        this.children.userEmail = new UserProfile({
            name: "Почта", 
            className: "profile-input",
            value: this.props.user.email
        });
        this.children.userLogin = new UserProfile({
            name: "Логин", 
            className: "profile-input",
            value: this.props.user.login
        });
        this.children.userName = new UserProfile({
            name: "Имя", 
            className: "profile-input",
            value: this.props.user.name
        });
        this.children.userSecondName = new UserProfile({
            name: "Фамилия", 
            className: "profile-input",
            value: this.props.user.second_name
        });
        this.children.userDisplayName = new UserProfile({
            name: "Имя в чате", 
            className: "profile-input",
            value: this.props.user.display_name
        });
        this.children.userPhone = new UserProfile({
            name: "Телефон", 
            className: "profile-input",
            value: this.props.user.phone
        });
        this.children.linkEditData = new Link({
            text: 'Изменить данные',
            className: 'profile-info-link',
            url: "#",
            events: {
                click: () => console.log('clicked'),
            },
        });
        this.children.linkEditPass = new Link({
            text: 'Изменить пароль',
            className: 'profile-info-link',
            url: "#",
            events: {
                click: () => console.log('clicked'),
            },
        });
        this.children.linkExit = new Link({
            text: 'Выйти',
            className: 'profile-info-link',
            url: './',
            events: {
                click: () => console.log('clicked'),
            },
        });
    }
    render() {
        return this.compile(template, {...this.props, styles });
    }
}