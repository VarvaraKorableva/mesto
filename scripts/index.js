const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
const openPopup = document.querySelector('.popup_opened');
const popupForm = document.getElementById('popupForm');
const formElement = document.querySelector('.popup__form');
const profileName = document.getElementById('profile__name');
const profileJob = document.getElementById('profile__job');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('job');
const popupAddPicture = document.getElementById('popup-AddPicture');
const picturePopapCloseButton = document.getElementById('addPicturePopapCloseButton');
const cardContainer = document.querySelector('.cards');
const fullSizePicturePopapCloseButton = document.getElementById('fullSizePicturePopapCloseButton');
const popupFullSizePicture = document.getElementById('popup-fullSizePicture');
const inputName = document.getElementById('nameOfPicture');
const inputLink = document.getElementById('linkOfPicture');
const picture = document.querySelector('.popup__picture');
const pictureName = document.querySelector('.popup__picture-name');
const popupProfile = document.getElementById('popup-profile');


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
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__text').textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

    cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

    cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });

    cardElement.querySelector('.card__image').addEventListener ('click', function (openFullPicture) {
      pictureName.textContent = name;
      picture.src = link;
      picture.alt = name;

      showPopup(popupFullSizePicture);

  });

    return cardElement;

};

//Передача данных массива в функцию доб карточек с ее вызовом
initialCards.forEach (function(item) {
  const cardElement = addCard(item.name, item.link);
  cardContainer.append(cardElement);
  });

//Функция создание пользователем новой карточки, с помощью вызова функции addCard и обработчика событий сабмит
function initialNewCardFromUser() {
  const cardElement = addCard(inputName.value, inputLink.value);
  cardContainer.prepend(cardElement);
  closePopup(popupAddPicture);
  popupForm.reset();
};

function handleSubmitUserForm (evt) {
  evt.preventDefault();
  closePopup(popupProfile);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
};

function showPopup(popupName) {
  popupName.classList.add('popup_opened');
};

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
};

fullSizePicturePopapCloseButton.addEventListener('click', () => {closePopup(popupFullSizePicture)});
popupCloseButton.addEventListener('click',() => {closePopup(popupProfile)});
addButton.addEventListener('click',() => {showPopup(popupAddPicture)});
picturePopapCloseButton.addEventListener('click',() => {closePopup(popupAddPicture)});
formElement.addEventListener('submit', handleSubmitUserForm);
popupForm.addEventListener('submit',(evt) => {evt.preventDefault(); initialNewCardFromUser()});
profileEditButton.addEventListener('click',() => {nameInput.value = profileName.textContent; jobInput.value = profileJob.textContent; showPopup(popupProfile);});


