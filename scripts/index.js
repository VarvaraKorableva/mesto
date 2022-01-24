let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.popup_opened');
let popupForm = document.getElementById('popupForm');
let formElement = document.querySelector('.popup__form');
let submitButton = document.querySelector('.popup__button');
let addButton = document.querySelector('.profile__add-button');
let profileName = document.getElementById('profile__name');
let profileJob = document.getElementById('profile__job');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('job');
let popupAddPicture = document.getElementById('popup-AddPicture');
let picturePopapCloseButton = document.getElementById('addPicturePopapCloseButton');
let cardContainer = document.querySelector('.cards');
let makeButton = document.getElementById('makeButton');
let popupPictureCloseButton = document.getElementById('picturePopapCloseButton');
let fullSizePicturePopapCloseButton = document.getElementById('fullSizePicturePopapCloseButton');
let popupFullSizePicture = document.getElementById('popup-fullSizePicture');
const cardElementText = document.querySelector('.card__text');
const cardElementImage = document.querySelector('.card__image');
const inputName = document.getElementById('nameOfPicture');
const inputLink = document.getElementById('linkOfPicture');

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

//Функция добавления карточек, с функцией лайков, удаления карточек, открытия попапа (большая картинка)
function addCard(name, link) {
  const cardTemplate = document.querySelector('#cards-template').content;
  cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__text').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;

    cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

    cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });

    cardElement.querySelector('.card__image').addEventListener ('click', function (openFullPicture) {
      let picture = document.querySelector('.popup__picture');
      let pictureName = document.querySelector('.popup__picture-name');
      pictureName.textContent = name;
      picture.src = link;
      picture.alt = name;

      popupFullSizePicture.classList.add('popup_opened-dark');
  });

  return cardElement;
  };

//Передача данных массива в функцию доб карточек с ее вызовом
initialCards.forEach (function(item) {
  const cardElement = addCard(item.name, item.link);
  addCard(item.name, item.link);
  cardContainer.append(cardElement);
  });

//Создание пользователем новой карточки, с помощью вызова функции addCard
makeButton.addEventListener('click', function () {
  addCard(inputName.value, inputLink.value);
  const cardElement = addCard(inputName.value, inputLink.value);
  cardContainer.prepend(cardElement);

  inputName.value = '';
  inputLink.value = '';

  closePopupAddPicture();
});

function addCardSubmitHandler (evt) {
  evt.preventDefault();
  addCard(inputName.value, inputLink.value);
  const cardElement = addCard(inputName.value, inputLink.value);

  inputLink.value = '';
  inputName.value = '';

  closePopupAddPicture();
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

function showPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function showPopupAddPicture() {
  popupAddPicture.classList.add('popup_opened');
}

function closePopupAddPicture() {
  popupAddPicture.classList.remove('popup_opened');
}

fullSizePicturePopapCloseButton.addEventListener('click', function() {
  popupFullSizePicture.classList.remove('popup_opened-dark');
});


profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
popupForm.addEventListener('submit', addCardSubmitHandler);
addButton.addEventListener('click', showPopupAddPicture);
picturePopapCloseButton.addEventListener('click', closePopupAddPicture);
