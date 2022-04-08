import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callBackSubmit){
    super(popupSelector);
    this._callBackSubmit = callBackSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    this._popupButton = this._popupForm.querySelector('.popup__button');
    this._buttonText = this._popupButton.textContent;
  }

//отражает закрузку изменений на кнопке
  showLoading(isLoading) {
    if (isLoading) {
      this._popupButton.textContent = 'Сохранение...';
    } else {
      this._popupButton.textContent = this._buttonText;
    }
  };

// собирает данные всех полей формы
  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBackSubmit(this._getInputValues());
      //this.close();
    });
  };

  close() {
    super.close();
    this._popupForm.reset();
  };
}

