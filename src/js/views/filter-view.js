import AbstractView from "./../abstract-view";

class FilterView extends AbstractView {
  constructor(data) {
    super();

    this._type = data.type;
    this._status = data.status;
    this._count = data.count;

    this._onClickFilter = this._onClickFilter.bind(this);

    this._onFilter = null;
  }

  _onClickFilter() {
    typeof this._onFilter === `function` && this._onFilter();
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  get template() {
    return `
    <div>
      <input
        type="radio"
        id="filter__${this._type}"
        class="filter__input visually-hidden"
        name="filter"
        ${this._status}/>
      <label for="filter__${this._type}" class="filter__label">
        ${this._type}<span class="filter__all-count">${this._count}</span>
      </label>
    </div>`
  }

  bind() {
    this._element.querySelector(`.filter__input`)
      .addEventListener(`change`, this._onClickFilter);
  }

  unbind() {
    this._element.querySelector(`.filter__input`)
      .removeEventListener(`change`, this._onClickFilter);
  }
}

export default FilterView;
