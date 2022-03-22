export default class UserInfo {
  constructor(userSelectors){
    this._profileName = document.querySelector(userSelectors.profileName);
    this._profileJob = document.querySelector(userSelectors.profileJob);
  }
//возвращает объект с данными пользователя (+ подставить в форму при открытии)
  getUserInfo() {
    this._userInfo = {
      name: this._profileName.textContent,
      info: this._profileJob.textContent
    }
    return this._userInfo;

  };

//принимает введенные данные и доб их на страницу
  setUserInfo(userInfo) {
    this._profileName.textContent = userInfo.name;
    this._profileJob.textContent = userInfo.job;
  };

}
