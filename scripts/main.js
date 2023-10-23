"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
const seriesTableBody = getHtmlElement("series");
const averageSeasonsElement = getHtmlElement("promedio-seasons");
populateSeriesTable(data_js_1.series);
displayAverageSeasons(data_js_1.series);
function getHtmlElement(elementId) {
    return document.getElementById(elementId);
}
function populateSeriesTable(series) {
    for (let serie of series) {
        const row = createSeriesRow(serie);
        seriesTableBody.appendChild(row);
    }
}
function createSeriesRow(serie) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${serie.top}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    return row;
}
function displayAverageSeasons(series) {
    const average = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = average.toString();
}
function calculateAverageSeasons(series) {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}
