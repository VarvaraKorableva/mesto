export default class Section {
  constructor ({ items, renderer }, containerSelector) {
    //массив данных, которые нужно добюна страницу при инициализации класса
    this._renderedItems = items;
    //колбек ф-ция, отвечающая за создание и отрисовку данных на странице
    this._renderer = renderer;
    //контейнер, куда вставляются карточки
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
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
