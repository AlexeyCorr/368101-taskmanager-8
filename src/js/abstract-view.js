const createElement = (template = ``, tagName = `div`) => {
  const wrapper = document.createElement(tagName);
  wrapper.innerHTML = template.trim();
  return wrapper.firstChild;
};

class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate BaseComponent, only concrete one.`);
    }

    this._element = null;
    this._state = {};
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  get element() {
    if (this._element === null) {
      this._element = this.render();
    }

    return this._element;
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  bind() {}

  unbind() {}

  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }

  update() {}
}

export default AbstractView;
