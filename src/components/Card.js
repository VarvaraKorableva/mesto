
export default class Card {
  constructor ({ data, handleCardClick, handleCardDelete, handleLikeClick}, cardSelector, api, userId) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleCardDelete = handleCardDelete;
      this._handleLikeClick = handleLikeClick;
      this._userId = userId;
      this._api = api;
      this._id = data._id;
      this._ownerId = data.owner._id;
      this._likes = data.likes;
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
      this._handleCardDelete();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({name: this._name, link: this._link});
    });
  }

deteteCard() {
    this._deleteButton.closest('.card').remove();
}

// Метод постановки и удаления лайков
putLike() {
  const count = this._element.querySelector('.card__counter');
  if (!this._likeButton.classList.contains('card__like-button_active')) {
    this._api.putLike(this._id)
      .then((data) => {
        this._likeButton.classList.add('card__like-button_active');
        count.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      })
  } else {
      this._api.deleteLike(this._id)
        .then((data) => {
          this._likeButton.classList.remove('card__like-button_active');
          count.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err);
        })
  }
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
//Наполнение карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._cardText.textContent = this._name;
    const cardImage = this._cardImage;
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector('.card__counter').textContent = this._likes.length;
    if (!(this._ownerId === this._userId)) {
      this._element.querySelector('.card__delete-button').style.display = 'none';
    }
    if (this._likes.find((obj) => this._userId === obj._id)) {
      this._likeButton.classList.add('card__like-button_active');
    }

    return this._element;
  }
}

