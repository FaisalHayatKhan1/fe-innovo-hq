export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  name: string;
  isNew: boolean;
  coffee: number;
  drink: number;
  status: string;
};

export const ColoumnList: Column[] = [
  {
    id: "incomming",
    title: "Incomming",
  },
  {
    id: "preparing",
    title: "Preparing",
  },
  {
    id: "ready",
    title: "Ready",
  },
];

export const BookingList: Task[] = [
  {
    id: "1",
    columnId: "incomming",
    content: "List admin APIs for dashboard",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "2",
    columnId: "incomming",
    content:
      "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "3",
    columnId: "preparing",
    content: "Conduct security testing",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "4",
    columnId: "preparing",
    content: "Analyze competitors",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "5",
    columnId: "ready",
    content: "Create UI kit documentation",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "6",
    columnId: "ready",
    content: "Dev meeting",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "7",
    columnId: "ready",
    content: "Deliver dashboard prototype",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "8",
    columnId: "todo",
    content: "Optimize application performance",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "9",
    columnId: "todo",
    content: "Implement data validation",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "10",
    columnId: "todo",
    content: "Design database schema",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "11",
    columnId: "todo",
    content: "Integrate SSL web certificates into workflow",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "12",
    columnId: "preparing",
    content: "Implement error logging and monitoring",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
  {
    id: "13",
    columnId: "preparing",
    content: "Design and implement responsive UI",
    name: "jacob Jones",
    isNew: true,
    coffee: 6,
    drink: 10,
    status: "Deliver at 19:30",
  },
];
