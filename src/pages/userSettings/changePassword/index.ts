import Block from "../../../utils/Block";
import template from "./changePassword.hbs";
import { Button } from "../../../components/Button";
import { InputBlock } from "../../../components/InputBlock";
import { Link } from "../../../components/Link";
import { validate, validForm, validFormData } from "../../../utils/validators";
import { EditPass } from "../../../api/UserAPI";
import UserController from "../../../controllers/UserController";
import AuthController from "../../../controllers/AuthController";
import * as styles from "../userSettings.css";

export class EditPassword extends Block {
  public constructor() {
    super({});
  }
  init() {
    this.children.Password = new InputBlock({
      name: "oldPassword",
      type: "password",
      text: "Старый пароль",
    });
    this.children.NewPassword = new InputBlock({
      name: "newPassword",
      type: "password",
      text: "Новый пароль",
      events: {
        focus: (e: { target: HTMLInputElement }) => {
          validate(e.target.name, e.target.value);
        },
        blur: (e: { target: HTMLInputElement }) => {
          validate(e.target.name, e.target.value);
        },
      },
    });
    this.children.buttonSave = new Button({
      text: "Сохранить пароль",
      className: "a-link-button-blue",
      events: {
        click: () => {
          if (validForm("form-edit-pass")) {
            this.onSubmit();
          }
        },
      },
    });
    this.children.linkBack = new Button({
      text: "Назад",
      className: "a-link-button",
      events: {
        click: () => {
          AuthController.back();
        },
      },
    });
  }
  onSubmit() {
    const data = validFormData("form-edit-pass");
    UserController.editPass(data as EditPass);
  }
  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
