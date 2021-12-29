let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.popup_opened');
let formElement = document.querySelector('.popup__form');
let submitButton = document.querySelector('.popup__button');

let profileName = document.getElementById('profile__name');
let profileJob = document.getElementById('profile__job');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('job');


function showPopup() {
  popup.classList = 'popup_opened';
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
profileEditButton.addEventListener('click', showPopup);


function closePopup() {
  popup.classList = 'popup';
}
popupCloseButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove ('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);


