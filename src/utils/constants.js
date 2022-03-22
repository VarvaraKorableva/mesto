export {
  initialCards,
  meanForValidationConfig,
  popup,
  profileEditButton,
  addButton,
  popupAddPictureForm,
  popupProfileForm,
  profileName,
  profileJob,
  nameInput,
  jobInput,
  popupAddPicture,
  cardContainer,
  popupFullSizePicture,
  inputName,
  inputLink,
  pictureName,
  popupProfile,
  popupImage
};

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

const meanForValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const profileEditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupAddPictureForm = document.querySelector('#popupForm');
const popupProfileForm = document.querySelector('.popup__form_profile-disabled');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const inputName = document.querySelector('#nameOfPicture');
const inputLink = document.querySelector('#linkOfPicture');
const pictureName = document.querySelector('.popup__picture-name');
const popupImage = document.querySelector('.popup__picture');

const cardContainer = ('.cards');
const popup = ('.popup');
const popupAddPicture = ('#popup-AddPicture');
const popupFullSizePicture = ('#popup-fullSizePicture');
const profileName = ('#profile__name');
const profileJob = ('#profile__job');
const popupProfile = ('#popup-profile');
