import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._pictureName = this._popup.querySelector('.popup__picture-name');
    this._popupImage = this._popup.querySelector('.popup__picture');

  };

  open(inputsValues){
    super.open();
    this._pictureName.textContent = inputsValues.name;
    this._popupImage.alt = inputsValues.name;
    this._popupImage.src = inputsValues.link;
  };
}
