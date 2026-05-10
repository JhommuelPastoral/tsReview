// import * as fs from "fs";
// import * as XLSX from "xlsx";

// const filePath = "C:\\Users\\Jhommuel\\Downloads\\test1.xlsx";

// if (fs.existsSync(filePath)) {
//   console.log("File exists!");
// } else {
//   console.error("File NOT found!");
// }


// const workbook = XLSX.readFile(filePath);
// const sheet = workbook.Sheets[workbook.SheetNames[0]];

// // Convert sheet to JSON
// const rows: { [key: string]: any }[] = XLSX.utils.sheet_to_json(sheet);

// // Log **only values**
// rows.forEach((row, index) => {
//   const values = Object.values(row);   // get only the values
//   console.log(`Row ${index + 1}:`, values);
// });

// console.log(`Total rows: ${rows.length}`);