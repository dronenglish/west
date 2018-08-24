var day = 1

function incrementDay(){
  day  += 1;
}

function clearStatus() {
      document.getElementById("status").innerHTML = "";
  }

function nextDay(){
  generateWeather();
  generateIncome();
  document.getElementById("wood").innerHTML = resources.wood;
  document.getElementById("wealth").innerHTML = resources.wealth;
  document.getElementById("weather").innerHTML = weather.weather + " and " + weather.temp + "F";
  incrementDay();
  document.getElementById("day").innerHTML = day;
}

// Buildings, Resources, Weather
var leftBuilding = {
  type: 'Saloon',
  level: 1,
  open: '0',
  occupants: '0',
  available: 6,
  summary: function() {return "[" 
    + this.occupants + "/" 
    + this.available + "] " 
    + this.type + " (lvl " 
    + this.level + ") " ;}
};
  
var centralBuilding = {
  type: 'Hotel',
  level: 0,
  open: '0',
  occupants: '0',
  available: 4,
  summary: function() {return "[" 
    + this.occupants + "/" 
    + this.available + "] " 
    + this.type + " (lvl " 
    + this.level + ") " ;}
};
  
var rightBuilding = {
  type: 'General Store',
  level: 0,
  open: '0',
  occupants: '0',
  available: 2,
    summary: function() {return "[" 
    + this.occupants + "/" 
    + this.available + "] " 
    + this.type + " (lvl " 
    + this.level + ") " ;}
};
  
var resources = {
  wealth: 300,
  wood: 200
}

var weather = {
  weather: 'Sunny',
  temp: 90
}


function upgradeBuilding(building){
  if (building.level == 5) {
    document.getElementById("status").innerHTML = "max level reached!";
  }
  else if (resources.wood < 199 || resources.wealth < 199) {
    document.getElementById("status").innerHTML = "not enough resources!";
  }
  else{
  building.level += 1;
  building.available += 2;
  resources.wood -= 200;
  resources.wealth -= 200;
  document.getElementById("status").innerHTML = "upgraded!";
  document.getElementById("wood").innerHTML = resources.wood;
  document.getElementById("wealth").innerHTML = resources.wealth;
  document.getElementById("centralBuilding").innerHTML = centralBuilding.summary();
  document.getElementById("leftBuilding").innerHTML = leftBuilding.summary();
  document.getElementById("rightBuilding").innerHTML = rightBuilding.summary();
  }
}

function viewBuilding(building){}








function generateWeather(){
  var tempChange = Math.floor((Math.random() * 10) + 1);
  if (weather.temp > 105){
    weather.temp -= 6;
    weather.weather = 'Storm'
  }
  else if (weather.temp < 40){
    weather.temp += 2;
    weather.weather = 'Windy'
  }
  else if (tempChange < 5){
    weather.temp -= 2;
    weather.weather = 'Sunny'
  }
  else if (tempChange > 5){
    weather.temp += 5;
    weather.weather = 'Sunny'
  }
  else{
    weather.temp -= 2;
    weather.weather = 'Storm'
  }
  }

function generateIncome(){
  var incomeChange = Math.floor((Math.random() * 10) + 1);
  if (incomeChange > 5){
    resources.wealth += 25;
    resources.wood += 10;
  }
  else if (incomeChange < 5){
    resources.wealth += 30;
    resources.wood += 15;
  }
  else{
    resources.wealth += 40;
    resources.wood += 20;
  }
  }



  
// Display:
document.getElementById("centralBuilding").innerHTML = centralBuilding.summary();
document.getElementById("leftBuilding").innerHTML = leftBuilding.summary();
document.getElementById("rightBuilding").innerHTML = rightBuilding.summary();
  
document.getElementById("wood").innerHTML = resources.wood;
document.getElementById("wealth").innerHTML = resources.wealth;

document.getElementById("weather").innerHTML = weather.weather + " and " + weather.temp + "F";
document.getElementById("day").innerHTML = day;