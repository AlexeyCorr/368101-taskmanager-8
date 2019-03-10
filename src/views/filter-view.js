import AbstractView from "./../abstract-view";

class FilterView extends AbstractView {
  constructor(data) {
    super();

    this._data = data;
  }

  get template() {
    return `
    <input
      type="radio"
      id="filter__${this._data.type}"
      class="filter__input visually-hidden"
      name="filter"
      ${this._data.status}/>
    <label for="filter__${this._data.type}" class="filter__label">
      ${this._data.type}<span class="filter__all-count">${this._data.count}</span>
    </label>`
  }
}

export default FilterView;
