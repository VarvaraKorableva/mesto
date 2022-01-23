let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.popup_opened');
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

  cardElement.querySelector('.card__text').textContent = item.name;
  cardElement.querySelector('.card__image').src = item.link;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    /*cardElement.remove();*/
    evt.target.closest('.card').remove();
  });

  cardContainer.append(cardElement);

  cardElement.querySelector('.card__image').addEventListener ('click', function (evt) {
    evt.target.popupFullSizePicture.classList.add('popup_opened');
  });

});
/*
function openFullPicture () {

  let picture = document.querySelector('.popup__picture').src;
  let name = document.querySelector('.popup__picture-name').textContent;
  name = item.name;
  picture = item.link;

  popupFullSizePicture.classList.add('.popup_opened');
}*/


function addCardSubmitHandler (evt) {
  evt.preventDefault();
  const cardTemplate = document.querySelector('#cards-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const inputName = document.getElementById('nameOfPicture');
  const inputLink = document.getElementById('linkOfPicture');
  cardElement.querySelector('.card__text').textContent = inputName.value;
  cardElement.querySelector('.card__image').src = inputLink.value;
  cardElement.querySelector('.card__image').alt = inputName.value;

  closePopupAddPicture();

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function () {
    cardElement.remove();
   });

  cardContainer.prepend(cardElement);

  inputLink.value = "Ссылка на картинку";
  inputName.value = "Название";
}

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

function closePopupAddPicture() {
  popupAddPicture.classList.remove('popup_opened');
}



/*
fullSizePicturePopapCloseButton.addEventListener('click', closePopupFullSizePicture);*/
makeButton.addEventListener('click', addCardSubmitHandler);
profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', showPopupAddPicture);
picturePopapCloseButton.addEventListener('click', closePopupAddPicture);
