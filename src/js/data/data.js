const MAX_TASKS = 7;

export const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const getTaskData = () => {
  return {
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
    color: [
      `black`,
      `yellow`,
      `blue`,
      `green`,
      `pink`,
    ][Math.floor(Math.random() * 5)],
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false,
    },
    isFavorite: new Boolean(Math.round(Math.random())),
    isDone: new Boolean(Math.round(Math.random())),
  }
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
    status: ``,
  },
  {
    type: `today`,
    count: 2,
    status: ``
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
    type: `archive`,
    count: 4,
    status: `disabled`
  }
];

const taskData = () => {
  const data = [];
  for (let i = 0; i <= MAX_TASKS; i++) {
    data.push(getTaskData());
  }
  return data;
};
const tasks = taskData();

export {tasks, filtersData};
