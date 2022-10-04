import Block from "../../utils/Block";
import template from "./authorization.hbs";
import { Button } from "../../components/Button";
import { LinkBase } from "../../components/LinkBase";
import { InputBlock } from "../../components/InputBlock";
import { Input } from "../../components/Input";
import { validate, validForm, validFormData } from "../../utils/validators";
import * as styles from "./authorization.css";
import { SignupData } from "../../api/AuthAPI";
import AuthController from "../../controllers/AuthController";

export class AuthPage extends Block {
  public constructor() {
    super({});
  }
  init() {
    this.children.inputLogin = new InputBlock({
      name: "login",
      type: "text",
      text: "Логин",
      events: {
        focus: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
        blur: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
      },
    });
    this.children.inputPass = new InputBlock({
      name: "password",
      type: "password",
      text: "Пароль",
      events: {
        focus: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
        blur: (e: { target: HTMLInputElement }) =>
          validate(e.target.name, e.target.value),
      },
    });
    this.children.linkAuth = new Button({
      text: "Авторизоваться",
      className: "a-link-button-blue",
      events: {
        click: () => {
          if (validForm("form-auth")) {
            this.onSubmit();
          }
        },
      },
    });
    this.children.linkSing = new LinkBase({
      label: "Регистрация",
      to: "/sign-up",
      className: "a-link-button",
    });
  }
  onSubmit() {
    const data = validFormData("form-auth");
    AuthController.signin(data as SignupData);
  }
  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
