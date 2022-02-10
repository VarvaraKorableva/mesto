const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
/*const openedPopup = document.querySelector('.popup_opened');*/
const popupAddPictureForm = document.querySelector('#popupForm');
const popupProfileForm = document.querySelector('.popup__form_profile-disabled');
const profileName = document.querySelector('#profile__name');
const profileJob = document.querySelector('#profile__job');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const popupAddPicture = document.querySelector('#popup-AddPicture');
const picturePopapCloseButton = document.querySelector('#addPicturePopapCloseButton');
const cardContainer = document.querySelector('.cards');
const fullSizePicturePopapCloseButton = document.querySelector('#fullSizePicturePopapCloseButton');
const popupFullSizePicture = document.querySelector('#popup-fullSizePicture');
const inputName = document.querySelector('#nameOfPicture');
const inputLink = document.querySelector('#linkOfPicture');
const popupPicture = document.querySelector('.popup__picture');
const pictureName = document.querySelector('.popup__picture-name');
const popupProfile = document.querySelector('#popup-profile');
const pictureFormSubmitButton = document.querySelector('#makeButton');


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
function createCard(name, link) {
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
      popupPicture.src = link;
      popupPicture.alt = name;

      showPopup(popupFullSizePicture);

  });

    return cardElement;

};

//Передача данных массива в функцию доб карточек с ее вызовом
initialCards.forEach (function(item) {
  const cardElement = createCard(item.name, item.link);
  cardContainer.append(cardElement);
  });

//Функция создание пользователем новой карточки, с помощью вызова функции createCard и обработчика событий сабмит
function initialNewCardFromUser() {
  const cardElement = createCard(inputName.value, inputLink.value);
  cardContainer.prepend(cardElement);
  closePopup(popupAddPicture);
  blockPictureFormSubmitButton();
  popupAddPictureForm.reset();
};

function handleSubmitUserForm (evt) {
  evt.preventDefault();
  closePopup(popupProfile);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
};

function blockPictureFormSubmitButton() {
  pictureFormSubmitButton.classList.add('popup__button_disabled');
  pictureFormSubmitButton.setAttribute('disabled', true);
}

function showPopup(popupName) {
  popupName.classList.add('popup_opened');

  document.addEventListener('keydown', escOverlayToClose);
  document.addEventListener('click', clickOverlayToClose);
};

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');

  document.removeEventListener('keydown', escOverlayToClose);
  document.removeEventListener('click', clickOverlayToClose);
};

//фун-ции закрытия попапов через overlay
function clickOverlayToClose(evt) {
  if (evt.target.classList.contains('popup')) {
    const overlay = document.querySelector('.popup_opened');
    closePopup(overlay);
  };
}

function escOverlayToClose(evt) {
  if(evt.key === 'Escape') {
    const overlay = document.querySelector('.popup_opened')
    closePopup(overlay);
};
}


popupPicture.addEventListener('click', () => {closePopup(popupFullSizePicture)});
fullSizePicturePopapCloseButton.addEventListener('click', () => {closePopup(popupFullSizePicture)});
popupCloseButton.addEventListener('click',() => {closePopup(popupProfile)});
addButton.addEventListener('click',() => {showPopup(popupAddPicture)});
picturePopapCloseButton.addEventListener('click',() => {closePopup(popupAddPicture)});
popupProfileForm.addEventListener('submit', handleSubmitUserForm);
popupAddPictureForm.addEventListener('submit',(evt) => {evt.preventDefault(); initialNewCardFromUser()});
profileEditButton.addEventListener('click',() => {nameInput.value = profileName.textContent; jobInput.value = profileJob.textContent; showPopup(popupProfile);});



