
export default class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;

    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
  }

  _isValid (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);

    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _showInputError (inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };

  //функция блокировки кнопки добавления изменений
  _blockButton(_submitButton) {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true);
  }

  //функция разблокировки кнопки добавления изменений
  _unBlockButton(_submitButton) {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  }
  //Выбор действия по регулировке кнопки (блок или разблокирововать)
  _toggleButtonState(_submitButton) {
    if (this._hasInvalidInput(this._inputList)) {
      this._blockButton();
    } else {
      this._unBlockButton();
    }
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _setEventListeners () {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation () {
    this._setEventListeners()
  };
}



