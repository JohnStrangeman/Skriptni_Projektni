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

var Players = [];

function PopulateTable(listPlayers) {
    let table = document.getElementById("player_ranking");
    LoadPlayers();
    listPlayers.forEach(player => {
        table.appendChild(CreateRows(player));
    });
    alert('Table filled');
}

function LoadPlayers() {
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => Players = JSON.parse(json));
    alert('Json loaded');
}

function CreateRows(player) {
    let row = document.createElement("tr");
    
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
    LoadPlayers();
    let search = document.getElementById("name").value;
    let results = [];
    Players.forEach(player => {
        if(search.toLowerCase() == player.Name.toLowerCase())
        {
            results.push(player);
        }
    });
    alert('found' + results.length + 'results');
    PopulateTable(results);
}