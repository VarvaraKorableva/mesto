export default class Section {
  constructor ({ renderer }, containerSelector) {
    //колбек ф-ция, отвечающая за создание и отрисовку данных на странице
    this._renderer = renderer;
    //контейнер, куда вставляются карточки
    this._container = document.querySelector(containerSelector);
  }

  renderItems(arr) {
    arr.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }

  addItemAppend(element) {
    this._container.append(element);
  }
}
