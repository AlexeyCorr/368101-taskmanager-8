import makeFilter from './make-filter';
import makeCard from './make-card';

const filterBlock = document.querySelector(`.main__filter`);
const filtersData = [
  {
    type: `all`,
    count: 27,
    status: `checked`
  },
  {
    type: `overdue`,
    count: 10,
    status: `disabled`,
  },
  {
    type: `today`,
    count: 2,
    status: `disabled`
  },
  {
    type: `favorites`,
    count: 3,
    status: ``
  },
  {
    type: `repeating`,
    count: 5,
    status: ``
  },
  {
    type: `tags`,
    count: 3,
    status: `disabled`
  },
  {
    type: `all`,
    count: 4,
    status: ``
  }
];

// Make filters
const filters = filtersData
  .map((it) => makeFilter(it.type, it.count, it.status))
  .join(``);

filterBlock.insertAdjacentHTML(`beforeend`, filters);

// Make cards
const taskBlock = document.querySelector(`.board__tasks`);
const tasks = new Array(7)
  .fill(makeCard())
  .join(``);

taskBlock.insertAdjacentHTML(`beforeend`, tasks);
