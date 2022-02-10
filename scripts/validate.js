
const meanForValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const enableValidation = (objOfSelectors) => {
  const formList = Array.from(document.querySelectorAll(objOfSelectors.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, objOfSelectors);
  });
};

const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);

  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);

  errorElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
};

//функция блокировки кнопки добавления изменений
function blockButton(buttonElement, config) {
  buttonElement.classList.add(config.inactiveButtonClass);
}
//функция разблокировки кнопки добавления изменений
function unBlockButton(buttonElement, config) {
  buttonElement.classList.remove(config.inactiveButtonClass);
}
//Выбор действия по регулировке кнопки (блок или разблокирововать)
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    blockButton(buttonElement, config);
    buttonElement.setAttribute('disabled', true);
  } else {
    unBlockButton(buttonElement, config);
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

enableValidation(meanForValidation);


