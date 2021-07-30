const exportUsersToExcel = require('./script');

const users = [
  {
    name: 'Rohan',
    email: 'rohan@gmail.com',
    designation: 'Developer',
    days: [10, 20, 30],
  },
  {
    name: 'Rohit',
    email: 'rohit@gmail.com',
    designation: 'Developer',
    days: [10, 30, 20],
  },
  {
    name: 'Neelam',
    email: 'neelam@gmail.com',
    designation: 'Project Lead',
    days: [20, 30, 40],
  },
];

const workSheetColumnNames = ['Name', 'Email', 'Designation'];
const newWorkSheetColumnNames = ['', 'Day1', 'Day2', 'Day3'];
const workSheetName = ['Users', 'UserDays'];
// const RowNames = ['Rohan', 'Neelam', 'Rohit'];

exportUsersToExcel(
  users,
  workSheetColumnNames,
  newWorkSheetColumnNames,
  workSheetName
  // RowNames
);
