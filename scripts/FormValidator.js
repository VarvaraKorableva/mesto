export {meanForValidationConfig};
import {popupProfileForm, popupAddPictureForm} from './index.js';

const meanForValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export default class FormValidator {
  constructor(formElement, config) {
    this._formElement = formElement;
    this._config = config;
  }

  _isValid (formElement, inputElement, config) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, config);

    } else {
      this._hideInputError(formElement, inputElement, config);
    }
  };

  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _showInputError (formElement, inputElement, errorMessage, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };

  _hideInputError (formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(config.inputErrorClass);

    errorElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
  };

  //функция блокировки кнопки добавления изменений
  _blockButton(buttonElement, config) {
    buttonElement.classList.add(config.inactiveButtonClass);
  }
  //функция разблокировки кнопки добавления изменений
  _unBlockButton(buttonElement, config) {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
  //Выбор действия по регулировке кнопки (блок или разблокирововать)
  _toggleButtonState = (inputList, buttonElement, config) => {
    if (this._hasInvalidInput(inputList)) {
      this._blockButton(buttonElement, config);
      buttonElement.setAttribute('disabled', true);
    } else {
      this._unBlockButton(buttonElement, config);
      buttonElement.removeAttribute('disabled');
    }
  };

  _setEventListeners (formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement, config);
        this._toggleButtonState(inputList, buttonElement, config);
      });
    });
  };

  enableValidation (objOfSelectors) {
  const formList = Array.from(document.querySelectorAll(objOfSelectors.formSelector));
  formList.forEach(formElement => this._setEventListeners (formElement, objOfSelectors));
};

}



