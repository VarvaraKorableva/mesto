export {
  meanForValidationConfig,
  popup,
  profileEditButton,
  addButton,
  popupAddPictureForm,
  popupProfileForm,
  profileNameSelector,
  profileJobSelector,
  nameInput,
  jobInput,
  popupAddPicture,
  cardContainer,
  popupFullSizePicture,
  inputName,
  inputLink,
  pictureName,
  popupProfile,
  popupImage,
  profileAvatarSelector,
  updateAvatarButton,
  popapAreYouSureToDelete,
  popupUpdateAvatar,
};

const meanForValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const profileEditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('#profile__add-button');
const popupAddPictureForm = document.querySelector('#popupForm');
const popupProfileForm = document.querySelector('.popup__form_profile-disabled');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const inputName = document.querySelector('#nameOfPicture');
const inputLink = document.querySelector('#linkOfPicture');
const pictureName = document.querySelector('.popup__picture-name');
const popupImage = document.querySelector('.popup__picture');
const updateAvatarButton = document.querySelector('.profile__avatar-button');
//const profileAvatar = document.querySelector('.profile__avatar');
//const popupUpdateAvatar = document.querySelector('#update_avatar');

const cardContainer = ('.cards');
const popup = ('.popup');
const popupAddPicture = ('#popup-AddPicture');
const popupFullSizePicture = ('#popup-fullSizePicture');
const popapAreYouSureToDelete =('#areYouSureToDelete');
const popupUpdateAvatar = ('#update_avatar');
const profileNameSelector = ('#profile__name');
const profileJobSelector = ('#profile__job');
const popupProfile = ('#popup-profile');
const profileAvatarSelector = ('.profile__avatar');


