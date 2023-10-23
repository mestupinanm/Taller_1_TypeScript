import { series } from './data.js';
var seriesTableBody = getHtmlElement("series");
var averageSeasonsElement = getHtmlElement("promedio-seasons");
populateSeriesTable(series);
displayAverageSeasons(series);
function getHtmlElement(elementId) {
    return document.getElementById(elementId);
}
function populateSeriesTable(series) {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var row = createSeriesRow(serie);
        seriesTableBody.appendChild(row);
    }
}
function createSeriesRow(serie) {
    var row = document.createElement("tr");
    row.innerHTML = "\n        <td>".concat(serie.top, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n    ");
    return row;
}
function displayAverageSeasons(series) {
    var average = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = average.toString();
}
function calculateAverageSeasons(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
