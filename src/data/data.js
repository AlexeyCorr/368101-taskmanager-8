const taskData = {
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
    `rudolf`,
  ]),
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  color: new Set([
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ]),
  repeatingDays: {
    'mo': true,
    'tu': false,
    'we': true,
    'th': false,
    'fr': false,
    'sa': true,
    'su': false,
  },
  isFavorite: new Boolean(Math.round(Math.random())),
  isDone: new Boolean(Math.round(Math.random())),
};

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

export {taskData, filtersData};
