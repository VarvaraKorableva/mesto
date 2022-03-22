
export default class Card {
  constructor ({ data, handleCardClick }, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {

    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._cardImage = this._element.querySelector('.card__image');
    this._likeButton = this._element.querySelector('.card__like-button');
    this._cardText = this._element.querySelector('.card__text');

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleTrashClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({name: this._name, link: this._link});
    });
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('card__like-button_active');
  }
  _handleTrashClick() {
    this._deleteButton.closest('.card').remove();
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

    this._cardText.textContent = this._name;
    const cardImage = this._cardImage;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    return this._element;
  }
}

