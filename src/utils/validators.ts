const validationRules: Record<string, { reg: RegExp; error: string }> = {
  first_name: {
    reg: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
    error: "Имя некорректное",
    //error: "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)"
  },
  display_name: {
    reg: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
    error: "Имя некорректное",
    //error: "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)"
  },
  second_name: {
    reg: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
    error: "Фамилия некорректная",
    //error: "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)"
  },
  login: {
    reg: /^[A-Za-z-_0-9]{3,20}/,
    error: "Логин неверен",
    //error: "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)"
  },
  email: {
    reg: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    error: "Почта неверная",
    //error: "латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы"
  },
  password: {
    reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
    error: "Пароль неверный",
    //error: " от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра"
  },
  oldPassword: {
    reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
    error: "Пароль неверный",
    //error: " от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра"
  },
  newPassword: {
    reg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
    error: "Пароль неверный",
    //error: " от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра"
  },
  phone: {
    reg: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
    error: "Телефон неверный",
    //error: "от 10 до 15 символов, состоит из цифр, может начинается с плюса"
  },
  messages: {
    reg: /^\s*$/,
    error: "не должно быть пустым",
  },
};

export function validate(nameInput: string, valueInput: string) {
  const pattern = validationRules[nameInput].reg;
  const regExp = new RegExp(pattern);
  const isValid = regExp.test(String(valueInput));
  if (!isValid) {
    isErrorMes(nameInput, validationRules[nameInput].error);
  } else {
    isDelError(nameInput);
  }
}

export function isErrorMes(name: string, error: string) {
  let span = document.getElementById("error_" + name);
  if (span) {
    span.classList.add("error_mess");
    span.innerHTML = error;
  }
}
export function isDelError(name: string) {
  let span = document.getElementById("error_" + name);
  if (span) {
    span.classList.remove("error_mess");
    span.innerHTML = "";
  }
}
export function validForm(selectorForm: string) {
  const form = document.querySelector("." + selectorForm) as HTMLDivElement;
  const spans = form.querySelectorAll("span");
  const inputs = form.querySelectorAll("input");
  let error = 0;
  let arrForm: any = {};
  spans.forEach((span) => {
    if (span.classList.contains("error_mess")) {
      error = error + 1;
    }
  });
  inputs.forEach((input) => {
    if (!input.value) {
      error = error + 1;
    }
  });

  if (error === 0) {
    isDelError(selectorForm);
    inputs.forEach((input) => {
      arrForm[input.name] = input.value;
    });
    console.log(arrForm);
    return true;
  } else {
    isErrorMes(selectorForm, "Все поля должны быть заполнены");
    return false;
  }
}
export function validFormData(selectorForm: string) {
  const form = document.querySelector("." + selectorForm) as HTMLDivElement;
  const inputs = form.querySelectorAll("input");
  let arrForm: any = {};
  inputs.forEach((input) => {
    arrForm[input.name] = input.value;
  });
  return arrForm;
}
