const template = (type, count, status = ``) => `<input
  type="radio"
  id="filter__${type}"
  class="filter__input visually-hidden"
  name="filter"
  ${status}
/>
<label for="filter__${type}" class="filter__label">
  ${type} <span class="filter__all-count">${count}</span></label
>`;

export default template;
