"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var XLSX = require("xlsx");
var filePath = "C:\\Users\\Jhommuel\\Downloads\\test1.xlsx";
if (fs.existsSync(filePath)) {
    console.log("File exists!");
}
else {
    console.error("File NOT found!");
}
var workbook = XLSX.readFile(filePath);
var sheet = workbook.Sheets[workbook.SheetNames[0]];
// Convert sheet to JSON
var rows = XLSX.utils.sheet_to_json(sheet);
// Log **only values**
rows.forEach(function (row, index) {
    var values = Object.values(row); // get only the values
    console.log("Row ".concat(index + 1, ":"), values);
});
console.log("Total rows: ".concat(rows.length));
