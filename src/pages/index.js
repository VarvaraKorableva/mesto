
import './index.css';
import {
  meanForValidationConfig,
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
  popupProfile,
  profileAvatarSelector,
  updateAvatarButton,
  popapAreYouSureToDelete,
  popupUpdateAvatar
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupToDelete from '../components/PopupToDelete.js';
import Api from '../components/Api';

let userId;

const popupProfileFormValid = new FormValidator(meanForValidationConfig, popupProfileForm);
const popupAddPictureFormValid = new FormValidator(meanForValidationConfig, popupAddPictureForm);
//const popupAvatarValid = new FormValidator(meanForValidationConfig, popupUpdateAvatar);
const popupWithImage = new PopupWithImage(popupFullSizePicture);
const userInfo = new UserInfo({profileName: profileNameSelector, profileJob: profileJobSelector, profileAvatar: profileAvatarSelector});
const areYouSureToDeletePopup = new PopupToDelete(popapAreYouSureToDelete);


const api = new Api({
  url:'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: '482a243d-811c-428c-9d72-a4802c45fd09',
    'Content-Type': 'aplication/json'
  }
});

//закрузка карточек с сервера
api.getInitialCards()
.then((data) => {
  initialCardsList.renderItems(data);
})
.catch((err) => {
  console.log(err);
});

function createCard(data) {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupWithImage.open(data);
    },
    handleCardDelete: () => {
      areYouSureToDeletePopup.setSubmitAction(() => {
        areYouSureToDeletePopup.showLoading(true);
        api.deleteCard(data._id)
        .then(() => {
          card.deleteCard();
          areYouSureToDeletePopup.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          areYouSureToDeletePopup.showLoading(false);
        })
      })
      areYouSureToDeletePopup.open();
    },
    handleLikeClick: () => {
      card.putLike();
    }
  }, '#cards-template', api, userId);

  return card.generateCard();
}

const initialCardsList = new Section({
  renderer: (data) => {
    initialCardsList.addItem(createCard(data));
  }
}, cardContainer);


//загрузка информации (имя и проф) о пользователе с сервера
api.getUserInfo()
.then((data) => {
//userId = userInfo._id;
userInfo.setUserInfo(data);
})
.catch((err) => {
  console.log(err);
});

// Добавление карточки с введенными в инпут данными + отправка этих данных на сервер
const popupAddCard = new PopupWithForm(popupAddPicture, (values) => {
  popupAddCard.showLoading(true);
  api.addUserCard(values)
    .then((data) => {
      initialCardsList.addItem(createCard(data));
      popupAddCard.close();
      popupAddPictureFormValid.resetValidation();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.showLoading(false);
    })
});

addButton.addEventListener('click',() => {
  popupAddPictureFormValid.resetValidation();
  popupAddCard.open();
});

profileEditButton.addEventListener('click',() => {
  const {name, about} = userInfo.getUserInfo();
  popupEditProfile.showLoading(false);
  popupProfileFormValid.resetValidation();
  nameInput.value = name;
  jobInput.value = about;
  popupEditProfile.open();
});

// Создание экземпляра класса popup с обновлением новых данных о пользователе
const popupEditProfile = new PopupWithForm(popupProfile, (userData) => {
  popupEditProfile.showLoading(true);
  api.setUserInfo(userData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.showLoading(false);
    })
});

// Слушатель на кнопку открытия popup редактирования аватара
updateAvatarButton.addEventListener('click', () => {
  avatarEditPopup.showLoading(false);
  //popupAvatarValid.resetValidation();
  avatarEditPopup.open();
});

const avatarEditPopup = new PopupWithForm(popupUpdateAvatar, (inputsValues) => {
  avatarEditPopup.showLoading(true);
  api.updateUserAvatar(inputsValues)
    .then((data) => {
      userInfo.setUserAvatar(data);
      avatarEditPopup.close();
      //popupAvatarValid.resetValidation();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarEditPopup.showLoading(false);
    })
});


//initialCardsList.renderItems();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();
popupProfileFormValid.enableValidation();
popupAddPictureFormValid.enableValidation();
//popupAvatarValid.resetValidation();
areYouSureToDeletePopup.setEventListeners();
avatarEditPopup.setEventListeners();

