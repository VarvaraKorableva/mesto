import Card from './Card.js';
import {initialCards} from './Card.js';
import {meanForValidationConfig} from './FormValidator.js';
import FormValidator from './FormValidator.js';
export {popupProfileForm, popupAddPictureForm};

const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
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

const popupProfileFormValid = new FormValidator(meanForValidationConfig, popupProfileForm);
const popupAddPictureFormValid = new FormValidator(meanForValidationConfig, popupAddPictureForm);

initialCards.forEach ((item)=>{
  const card = new Card(item, '#cards-template');
  const cardElement = card.generateCard();
  document.querySelector('.cards').append(cardElement);
});

function initialNewCardFromUser() {
  const inputsValues = {
    name: inputName.value,
    link: inputLink.value
  }
  const card = new Card(inputsValues, '#cards-template');
  const cardElement = card.generateCard();

  document.querySelector('.cards').prepend(cardElement);

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

popupProfileFormValid.enableValidation(meanForValidationConfig);

popupAddPictureFormValid.enableValidation(meanForValidationConfig);

popupPicture.addEventListener('click', () => {closePopup(popupFullSizePicture)});
fullSizePicturePopapCloseButton.addEventListener('click', () => {closePopup(popupFullSizePicture)});
popupCloseButton.addEventListener('click',() => {closePopup(popupProfile)});
addButton.addEventListener('click',() => {showPopup(popupAddPicture)});
picturePopapCloseButton.addEventListener('click',() => {closePopup(popupAddPicture)});
popupProfileForm.addEventListener('submit', handleSubmitUserForm);
popupAddPictureForm.addEventListener('submit',(evt) => {evt.preventDefault(); initialNewCardFromUser()});
profileEditButton.addEventListener('click',() => {nameInput.value = profileName.textContent; jobInput.value = profileJob.textContent; showPopup(popupProfile);});
