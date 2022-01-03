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


profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


