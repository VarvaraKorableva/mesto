import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callBackSubmit){
    super(popupSelector);
    this._callBackSubmit = callBackSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
  }
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
      this.close();
    });
  };

  close() {
    super.close();
    this._popupForm.reset();
  };
}

