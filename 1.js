"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom_1 = require("jsdom");
var url = "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub";
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var res, html, dom, document_1, rows, data_2, maxX_1, maxY, grid, _i, data_1, _a, x, y, char, _b, grid_1, row, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    res = _c.sent();
                    return [4 /*yield*/, res.text()];
                case 2:
                    html = _c.sent();
                    dom = new jsdom_1.JSDOM(html);
                    document_1 = dom.window.document;
                    rows = document_1.querySelectorAll("table tr");
                    data_2 = [];
                    rows.forEach(function (row) {
                        var _a, _b, _c, _d;
                        var cells = row.querySelectorAll("td");
                        if (cells.length === 3) {
                            var x = Number((_a = cells[0].textContent) === null || _a === void 0 ? void 0 : _a.trim());
                            var char = (_c = (_b = cells[1].textContent) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : " ";
                            var y = Number((_d = cells[2].textContent) === null || _d === void 0 ? void 0 : _d.trim());
                            if (!isNaN(x) && !isNaN(y)) {
                                data_2.push({ x: x, char: char, y: y });
                            }
                        }
                    });
                    maxX_1 = Math.max.apply(Math, data_2.map(function (d) { return d.x; }));
                    maxY = Math.max.apply(Math, data_2.map(function (d) { return d.y; }));
                    console.log("Grid size: ".concat(maxX_1 + 1, " x ").concat(maxY + 1));
                    grid = Array.from({ length: maxY + 1 }, function () {
                        return Array.from({ length: maxX_1 + 1 }, function () { return " "; });
                    });
                    // fill grid
                    for (_i = 0, data_1 = data_2; _i < data_1.length; _i++) {
                        _a = data_1[_i], x = _a.x, y = _a.y, char = _a.char;
                        grid[y][x] = char;
                    }
                    // print result
                    console.log("\n===== RESULT =====\n");
                    for (_b = 0, grid_1 = grid; _b < grid_1.length; _b++) {
                        row = grid_1[_b];
                        console.log(row.join(""));
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _c.sent();
                    console.error("Error:", err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
main();
