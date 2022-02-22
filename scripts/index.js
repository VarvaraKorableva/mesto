import Card from './Card.js';
import FormValidator from './FormValidator.js';

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
/*const popupPicture = document.querySelector('.popup__picture');*/
const pictureName = document.querySelector('.popup__picture-name');
const popupProfile = document.querySelector('#popup-profile');
const pictureFormSubmitButton = document.querySelector('#makeButton');
const popupImage = document.querySelector('.popup__picture');

const popupProfileFormValid = new FormValidator(meanForValidationConfig, popupProfileForm);
const popupAddPictureFormValid = new FormValidator(meanForValidationConfig, popupAddPictureForm);


//функция открытия ФулсайзПопапа при клике по image, использую как аргумент в сонструкторе класса Cards
function handleCardClick (name, link) {
  pictureName.textContent = name;
  popupImage.alt = name;
  popupImage.src = link;
  showPopup(popupFullSizePicture);
}

function createCard(item) {
  const card = new Card(item, '#cards-template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}
//Вставка карточки в DOM
function addCardToEndOfCardContainer(item) {
  cardContainer.append(createCard(item));
}
//Вставка карточки в DOM
function addCardToStartOfCardContainer(inputsValues) {
  cardContainer.prepend(createCard(inputsValues));
}

initialCards.forEach((item) => {
  addCardToEndOfCardContainer(item);
});

//Добавление карточки с введенными в инпут данными
function handleNewCardFormSubmit() {

  const inputsValues = {
    name: inputName.value,
    link: inputLink.value
  }

  addCardToStartOfCardContainer(inputsValues);
  closePopup(popupAddPicture);

  popupAddPictureForm.reset();
};

function handleSubmitUserForm (evt) {
  evt.preventDefault();
  closePopup(popupProfile);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
};

function showPopup(popupName) {
  popupName.classList.add('popup_opened');

  document.addEventListener('keydown', handleEscKey);
  document.addEventListener('click', clickOverlayToClose);
};

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');

  document.removeEventListener('keydown', handleEscKey);
  document.removeEventListener('click', clickOverlayToClose);
};

//фун-ции закрытия попапов через overlay
function clickOverlayToClose(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
}

function handleEscKey(evt) {
  if(evt.key === 'Escape') {
    const overlay = document.querySelector('.popup_opened')
    closePopup(overlay);
};
}

popupProfileFormValid.enableValidation(meanForValidationConfig);

popupAddPictureFormValid.enableValidation(meanForValidationConfig);


fullSizePicturePopapCloseButton.addEventListener('click', () => {
  closePopup(popupFullSizePicture);
});

popupCloseButton.addEventListener('click',() => {
  closePopup(popupProfile);
});

addButton.addEventListener('click',() => {
  showPopup(popupAddPicture);
  popupAddPictureFormValid.resetValidation();
});

picturePopapCloseButton.addEventListener('click',() => {
  closePopup(popupAddPicture);
});

popupProfileForm.addEventListener('submit', handleSubmitUserForm);

popupAddPictureForm.addEventListener('submit',(evt) => {
  evt.preventDefault();
  handleNewCardFormSubmit();
});

profileEditButton.addEventListener('click',() => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupProfileFormValid.resetValidation();

  showPopup(popupProfile);
});
