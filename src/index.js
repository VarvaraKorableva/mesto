import './pages/index.css';
import {
  initialCards,
  meanForValidationConfig,
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
  popupProfile
} from './utils/constants.js';

import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

const popupProfileFormValid = new FormValidator(meanForValidationConfig, popupProfileForm);
const popupAddPictureFormValid = new FormValidator(meanForValidationConfig, popupAddPictureForm);
const popupWithImage = new PopupWithImage(popupFullSizePicture);
const userInfo = new UserInfo({profileName: profileName, profileJob: profileJob});


function createCard(data) {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  }, '#cards-template');

  const cardElement = card.generateCard();
  return cardElement;
}

const initialCardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    initialCardsList.addItemAppend(createCard(item));
  }
}, cardContainer);

// Добавление карточки с введенными в инпут данными
const popupAddCard = new PopupWithForm(popupAddPicture, (inputsValues) => {
  initialCardsList.addItem(createCard(inputsValues));
  popupAddPictureFormValid.resetValidation();
});

const popupEditProfile = new PopupWithForm(popupProfile, (userData) => {
  userInfo.setUserInfo(userData);
});

initialCardsList.renderItems();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();
popupProfileFormValid.enableValidation();
popupAddPictureFormValid.enableValidation();

addButton.addEventListener('click',() => {
  popupAddPictureFormValid.resetValidation();
  popupAddCard.open();
});

profileEditButton.addEventListener('click',() => {
  const {name, info} = userInfo.getUserInfo();
  popupProfileFormValid.resetValidation();
  nameInput.value = name;
  jobInput.value = info;
  popupEditProfile.open();
});

