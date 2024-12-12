class Player {
    constructor(rank, region, name, age, tournaments, points) {
        this.Rank = rank;
        this.Region = region;
        this.Name = name;
        this.Age = age;
        this.Tournaments = tournaments;
        this.Points = points;
    }
}

let Players = [];

function LoadPlayers() {
    fetch('./Players.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach((player) => {
            Players.push(new Player(player.Rank, player.Region, player.Name, player.Age, player.Tournaments, player.Points));
        });
        PopulateTable(Players);
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
        table.appendChild(CreateRows(player));
    });
}


function CreateRows(player) {
    let row = document.createElement("tr");
    row.class = 'players';
    
    let cellRank = document.createElement("td");
    let cellRegion = document.createElement("td");
    let cellName = document.createElement("td");
    let cellAge = document.createElement("td");
    let cellTournaments = document.createElement("td");
    let cellPoints = document.createElement("td");
    
    let rank = document.createTextNode(player.Rank);
    let region = document.createTextNode(player.Region);
    let name = document.createTextNode(player.Name);
    let age = document.createTextNode(player.Age);
    let tournaments = document.createTextNode(player.Tournaments);
    let points = document.createTextNode(player.Points);
    
    cellRank.appendChild(rank);
    cellRegion.appendChild(region);
    cellName.appendChild(name);
    cellAge.appendChild(age);
    cellTournaments.appendChild(tournaments);
    cellPoints.appendChild(points);
    
    row.appendChild(cellRank);
    row.appendChild(cellRegion);
    row.appendChild(cellName);
    row.appendChild(cellAge);
    row.appendChild(cellTournaments);
    row.appendChild(cellPoints);

    return row;
}

function SearchPlayers() {
    let search = document.getElementById("name").value;
    let results = [];
    Players.forEach(player => {
        if(search.toLowerCase() == player.Name.toLowerCase())
        {
            results.push(player);
        }
    });

    PopulateTable(results);
}