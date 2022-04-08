export default class UserInfo {
  constructor(userSelectors){
    this._profileName = document.querySelector(userSelectors.profileName);
    this._profileJob = document.querySelector(userSelectors.profileJob);
    this._profileAvatar = document.querySelector(userSelectors.profileAvatar);
  }
//возвращает объект с данными пользователя (подставить в форму при открытии)
  getUserInfo() {
    this._userData = {
      name: this._profileName.textContent,
      about: this._profileJob.textContent
    }
    return this._userData;

  };

//принимает введенные данные и доб их на страницу
  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileJob.textContent = userData.about;
    this.setUserAvatar(userData);
  };

  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  };

}
