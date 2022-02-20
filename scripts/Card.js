export {initialCards};

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupElement = document.querySelector('#popup-fullSizePicture');
const popupImage = document.querySelector('.popup__picture');
const popupCloseButton = document.querySelector('.popup__picture-close-button');
/*const cardImage = document.querySelector('.card__image');
const likeButton = document.querySelector('.card__like-button');
const trushButton = document.querySelector('.card__delete-button');*/
const pictureName = document.querySelector('.popup__picture-name');

export default class Card {
  constructor (data, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });

    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleTrashClick();
    });
  }

  _handleOpenPopup(){
    popupImage.src = this._link;
    pictureName.textContent = this._name;
    popupImage.alt = this._name;
    popupElement.classList.add('popup_opened');
  }
  _handleClosePopup(){
    popupImage.src = "";
    popupElement.classList.remove('popup_opened');
  }
  _handleLikeClick() {
   this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }
  _handleTrashClick() {
   this._element.querySelector('.card__delete-button').closest('.card').remove();
  }

  /*метод _getTemplate, найдёт: template-элемент с классом cards-template,
извлечёт его содержимое, в содержимом найдёт элемент с классом card,
клонирует его, вернёт клонированный элемент.*/
    _getTemplate() {
const cardElement = document
  .querySelector(this._cardSelector)
  .content
  .querySelector('.card')
  .cloneNode(true);
      return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__text').textContent = this._name;
    const cardImage = this._element.querySelector('.card__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;

    return this._element;
  }
}

