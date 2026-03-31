let numVars = 3;
let cellValues = [];

function initMap() {
const size = 1 << numVars;
cellValues = Array(size).fill('0');
renderKMap();
}

function setVars(n){
numVars = n;
initMap();
}

function setCellMode(mode){
window.cellMode = mode;
}

function toggleCell(i){
const cycle = ['0','1','X'];
let index = cycle.indexOf(cellValues[i]);
cellValues[i] = cycle[(index+1)%3];
renderKMap();
}

function renderKMap(){
let html = "<table>";
let size = 1 << numVars;

for(let i=0;i<size;i++){
if(i%4===0) html += "<tr>";
html += `<td onclick="toggleCell(${i})">${cellValues[i]}</td>`;
if(i%4===3) html += "</tr>";
}

html += "</table>";
document.getElementById("kmapContainer").innerHTML = html;
}

function solve(){
document.getElementById("equationDisplay").innerText = "Solved (logic here)";
}

function clearMap(){
initMap();
}

initMap();
