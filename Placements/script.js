class Placement {
    constructor(player, rank, tournament, fieldType, year) {
        this.Player = player;
        this.Rank = rank;
        this.Tournament = tournament;
        this.FieldType = fieldType;
        this.Year = year;
    }
}

let Placements = [];

function LoadPlayers() {
    fetch('./Placements.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach((placement) => {
            Players.push(new Placement(placement.Player, placement.Rank, placement.Tournament, placement.FieldType, placement.Year));
        });
        PopulateTable(Placements);
    });
}

function PopulateTable(listPlayers) {
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
    let search = document.getElementById("name").value;
    let results = [];
    Placements.forEach(placement => {
        if(search.toLowerCase() == placement)
        {
            results.push(placement);
        }
    });

    PopulateTable(results);
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