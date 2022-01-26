const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.popup_opened');
const popupForm = document.getElementById('popupForm');
const formElement = document.querySelector('.popup__form');
const submitButton = document.querySelector('.popup__button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.getElementById('profile__name');
const profileJob = document.getElementById('profile__job');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('job');
const popupAddPicture = document.getElementById('popup-AddPicture');
const picturePopapCloseButton = document.getElementById('addPicturePopapCloseButton');
const cardContainer = document.querySelector('.cards');
const addCardButton = document.getElementById('makeButton');
const popupPictureCloseButton = document.getElementById('picturePopapCloseButton');
const fullSizePicturePopapCloseButton = document.getElementById('fullSizePicturePopapCloseButton');
const popupFullSizePicture = document.getElementById('popup-fullSizePicture');
const cardElementText = document.querySelector('.card__text');
const cardElementImage = document.querySelector('.card__image');
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

  cardElement.querySelector('.card__text').textContent = name;
  let cardImage = cardElement.querySelector('.card__image').src = link;
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

//Создание пользователем новой карточки, с помощью вызова функции addCard
addCardButton.addEventListener('click', function () {
  addCard(inputName.value, inputLink.value);
  const cardElement = addCard(inputName.value, inputLink.value);
  cardContainer.prepend(cardElement);

  inputName.value = '';
  inputLink.value = '';

  closePopup(popupAddPicture);
});

function addCardSubmitHandler (evt) {
  evt.preventDefault();
  const cardElement = addCard(inputName.value, inputLink.value);

  inputLink.value = '';
  inputName.value = '';

  closePopup(popupAddPicture);
}

function handleSubmitUserForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

function showPopup(popupName) {
  popupName === popupFullSizePicture ? popupName.classList.add('popup_opened-dark') : popupName.classList.add('popup_opened');

 /* nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');*/
};


function closePopup(popupName) {
  popupName === popupFullSizePicture ? popupName.classList.remove('popup_opened-dark') : popupName.classList.remove('popup_opened');
};


fullSizePicturePopapCloseButton.addEventListener('click', closePopup(popupFullSizePicture));
profileEditButton.addEventListener('click', showPopup(popupProfile));
popupCloseButton.addEventListener('click', closePopup(popupProfile));
addButton.addEventListener('click', showPopup(popupAddPicture));
picturePopapCloseButton.addEventListener('click', closePopup(popupAddPicture));
formElement.addEventListener('submit', handleSubmitUserForm);
popupForm.addEventListener('submit', addCardSubmitHandler);
