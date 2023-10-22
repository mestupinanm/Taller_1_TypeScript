import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTableBody = getHtmlElement("series");
const averageSeasonsElement = getHtmlElement("promedio-seasons");

populateSeriesTable(series);
displayAverageSeasons(series);

function getHtmlElement(elementId: string): HTMLElement {
    return document.getElementById(elementId) as HTMLElement;
}

function populateSeriesTable(series: Serie[]): void {
    for (let serie of series) {
        const row = createSeriesRow(serie);
        seriesTableBody.appendChild(row);
    }
}

function createSeriesRow(serie: Serie): HTMLTableRowElement {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${serie.top}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    return row;
}

function displayAverageSeasons(series: Serie[]): void {
    const average = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = average.toString();
}

function calculateAverageSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}