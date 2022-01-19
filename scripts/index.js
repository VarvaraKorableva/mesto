let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.popup_opened');
let formElement = document.querySelector('.popup__form');
let submitButton = document.querySelector('.popup__button');
let addButton = document.querySelector('.profile__add-button');
let likeButton = document.querySelector('.card__like-button');
let activLikeButton = document.querySelector('.card__like-button_active');

let profileName = document.getElementById('profile__name');
let profileJob = document.getElementById('profile__job');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('job');
let popupAddPicture = document.getElementById('popup-picture');
/*let nameOfPicture = document.getElementById('nameOfPicture');
let linkOfPicture = document.getElementById('linkOfPicture');*/
let picturePopapCloseButton = document.getElementById('picturePopapCloseButton');

let cardContainer = document.querySelector('.cards');

let makeButton = document.getElementById('makeButton');



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

initialCards.forEach(function(item){
  const cardTemplate = document.querySelector('#cards-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__text').textContent = initialCards.name;
  cardElement.querySelector('.card__image').src = initialCards.link;

  cardContainer.append(cardElement);
});

function showPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

function showPopupAddPicture() {
  popupAddPicture.classList.add('popup_opened');
}
/*
function addPicture(nameValue, linkValue) {
  const cardTemplate = document.querySelector('#cards-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__text').textContent = nameValue;
  cardElement.querySelector('.card__image').src = linkValue;

  cardContainer.prepend(cardElement);
}

makeButton.addEventListener('click', function() {
  const text = document.getElementById('nameOfPicture');
  const link = document.getElementById('linkOfPicture');

  addPicture(text.value, link.value);

  text.value = '';
  link.value = '';
});
*/

function closePopupAddPicture() {
  popupAddPicture.classList.remove('popup_opened');
}

/*function like() {
  likeButton.classList.add('card__like-button_active');
}*/

profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', showPopupAddPicture);
picturePopapCloseButton.addEventListener('click', closePopupAddPicture);
/*likeButton.addEventListener('click',like);*/


