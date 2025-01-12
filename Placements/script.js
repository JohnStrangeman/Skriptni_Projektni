class Placement {
    constructor(player, rank, tournament, fieldType, year) {
        this.Player = player;
        this.Rank = rank;
        this.Tournament = tournament;
        this.FieldType = fieldType;
        this.Year = year;
    }
}

var Placements = [];
var currTable = [];

function LoadPlayers() {
    fetch('./Placements.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach((placement) => {
            Placements.push(new Placement(placement.Player, placement.Rank, placement.Tournament, placement.FieldType, placement.Year));
        });
        PopulateTable(Placements);
    });
}

function PopulateTable(listPlayers) {
    currTable = listPlayers;
    let table = document.getElementById("player_ranking");

    if(table.childElementCount > 1) {
        while (table.childElementCount > 1) {
            table.removeChild(table.lastElementChild);
        }
    }

    listPlayers.forEach(player => {
        table.appendChild(CreateRows(player, table.childElementCount));
    });
}


function CreateRows(placement, n) {
    let row = document.createElement("tr");
    row.class = 'players';
    row.id = 'row' + n;
    row.onmouseover = function() {
        document.getElementById(row.id).style.opacity = 0.7;
    };
    row.onmouseleave = function() {
        document.getElementById(row.id).style.opacity = 1;
    };

    let cellPlayer = document.createElement("td");
    let cellRank = document.createElement("td");
    let cellTournament = document.createElement("td");
    let cellFieldType = document.createElement("td");
    let cellYear = document.createElement("td");

    let player = document.createTextNode(placement.Player);
    let rank = document.createTextNode(placement.Rank);
    let tournament = document.createTextNode(placement.Tournament);
    let fieldType = document.createTextNode(placement.FieldType);
    let year = document.createTextNode(placement.Year);
    
    cellPlayer.appendChild(player);
    cellRank.appendChild(rank);
    cellTournament.appendChild(tournament);
    cellFieldType.appendChild(fieldType);
    cellYear.appendChild(year);
    
    row.appendChild(cellPlayer);
    row.appendChild(cellRank);
    row.appendChild(cellTournament);
    row.appendChild(cellFieldType);
    row.appendChild(cellYear);

    return row;
}

function SearchPlayers() {
    let player = document.getElementById("Players").value;
    let tournament = document.getElementById("Tournament").value;
    let fieldType = document.getElementById("FieldType").value;
    let year = document.getElementById("Year").value;
    let results = [];

    results = GetPlacementsBy('player', player, Placements)
    results = GetPlacementsBy('tournament', tournament, results)
    results = GetPlacementsBy('field', fieldType, results)
    results = GetPlacementsBy('year', year, results)

    PopulateTable(results);
}
/*
function rankCompare(a, b) {
    let rankA = a.Rank();
    let rankB = b.Rank();

    let scoreA = 0;
    let scoreB = 0;

    switch(rankA) {
        case 'W':
            scoreA = 1;
            break;
        case 'F':
            scoreA = 2;
            break;
        case 'SF':
            scoreA = 4;
            break;
        case 'QF':
            scoreA = 8;
            break;
        case 'R16':
            scoreA = 16;
            break;
        case 'R32':
            scoreA = 32;
            break;
        case 'R64':
            scoreA = 64;
            break;
        case 'R128':
            scoreA = 128;
            break;
        case '-':
            scoreA = 200;
            break;
        default:
            scoreA = 0;
            break;
    }

    switch(rankB) {
        case 'W':
            scoreB = 1;
            break;
        case 'F':
            scoreB = 2;
            break;
        case 'SF':
            scoreB = 4;
            break;
        case 'QF':
            scoreB = 8;
            break;
        case 'R16':
            scoreB = 16;
            break;
        case 'R32':
            scoreB = 32;
            break;
        case 'R64':
            scoreB = 64;
            break;
        case 'R128':
            scoreB = 128;
            break;
        case '-':
            scoreB = 200;
            break;
        default:
            scoreB = 0;
            break;
    }
    return scoreA - scoreB;
}

function SortRankings() {
    currTable.sort(rankCompare);
    alert("Sorted");
    PopulateTable(currTable);
}

function yearCompare(a, b) {
    let yearA = a.Year();
    let yearB = b.Year();    

    yearA.replace('.', '');
    yearB.replace('.', '');

    return yearB - yearA;
}

function SortYear() {
    currTable.sort(yearCompare);
    alert("Sorted");    
    PopulateTable(currTable);
}
*/
function GetPlacementsBy(category, search, placements) {
    if (search == '-') {
        return placements;
    }

    let temp = [];

    switch (category) {
        case 'player':
            placements.forEach(placement => {
                if(placement.Player == search) {
                    temp.push(placement);
                }
            });
            break;
        case 'tournament':
            placements.forEach(placement => {
                if(placement.Tournament == search) {
                    temp.push(placement);
                }
            });
            break;
        case 'field':
            placements.forEach(placement => {
                if(placement.FieldType == search) {
                    temp.push(placement);
                }
            });
            break;
       case 'year':
        placements.forEach(placement => {
            if(placement.Year == search) {
                temp.push(placement);
            }
        });
        break; 
        default: 
            temp = placements
            break;
    }
    return temp;
}

function RowOpacityIn(id) {
    document.getElementById(id).style.opacity = 0.8;
}

function RowOpacityOut(id) {
    document.getElementById(id).style.opacity = 1;
}

function back(){
    window.history.back();
}
function forward(){
    window.history.forward();
}

let image = document.getElementById('wta');
let position = 0;  
let maxPosition = window.innerWidth - image.width; 
let check = false;

function moveImage() {
    if (check===false) {
        position += 10;
        image.style.left = position + 'px';
        setTimeout(moveImage, 24);
        if(position>=maxPosition){
            check=true;
        }  
    }
    else{
        position -= 10;
        image.style.left = position + 'px';
        setTimeout(moveImage, 24);  
        if(position<=0){
            check=false;
        }
    }
}