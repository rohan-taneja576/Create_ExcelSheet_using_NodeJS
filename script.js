let Data = [
  {
    name: 'Rohan',
    email: 'rohan@gmail.com',
    designation: 'Developer',
  },
  {
    name: 'Rohit',
    email: 'rohit@gmail.com',
    designation: 'Developer',
  },
  {
    name: 'Neelam',
    email: 'neelam@gmail.com',
    designation: 'Project Lead',
  },
];

const xlsx = require('xlsx');

const createExcel = (data, workSheetColumnNames, workSheetName) => {
  const workBook = xlsx.utils.book_new();
  const workSheetData = [workSheetColumnNames, ...data];
  const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
  xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
  xlsx.writeFile(workBook, 'Tas1ExcelFile.xlsx');
};

const daysExcelSheet = (dayData, workSheetColumnNames, workSheetName) => {
  const newWorkBook = xlsx.utils.book_new();
  const newWorkSheetData = [workSheetColumnNames, ...dayData];
  const newWorkSheet = xlsx.utils.aoa_to_sheet(newWorkSheetData);
  xlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, workSheetName);
  xlsx.writeFile(newWorkBook, 'Task2ExcelFile.xlsx');
};

const exportUsersToExcel = (
  users,
  workSheetColumnNames,
  newWorkSheetColumnNames,
  workSheetName
  // RowNames
) => {
  const data = users.map(user => {
    return [user.name, user.email, user.designation];
  });
  const dayData = users.map(user => {
    return [user.name, ...user.days];
  });

  createExcel(data, workSheetColumnNames, workSheetName[0]);
  daysExcelSheet(dayData, newWorkSheetColumnNames, workSheetName[1]);
};

module.exports = exportUsersToExcel;
