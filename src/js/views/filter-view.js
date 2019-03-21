import AbstractView from "./../abstract-view";

class FilterView extends AbstractView {
  constructor(data) {
    super();

    this._type = data.type;
    this._status = data.status;
    this._count = data.count;
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
}

export default FilterView;
