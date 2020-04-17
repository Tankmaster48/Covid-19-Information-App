// Initiate Info
const infoSystem = new Info();

// Get information
infoSystem.getInfo('https://api.covid19api.com/summary')
    .then(data => useInfo(data))
    .catch(err => console.log(err));

// UI variables
const newCases = document.getElementById('newCases');
const newRecoveries = document.getElementById('newRecoveries');
const newDeaths = document.getElementById('newDeaths');
const totalCases = document.getElementById('totalCases');
const totalRecoveries = document.getElementById('totalRecoveries');
const totalDeaths = document.getElementById('totalDeaths');

function useInfo(data) {
    newCases.innerHTML = data.Global.NewConfirmed;
    newRecoveries.innerHTML = data.Global.NewRecovered;
    newDeaths.innerHTML = data.Global.NewDeaths;
    totalCases.innerHTML = data.Global.TotalConfirmed;
    totalRecoveries.innerHTML = data.Global.TotalRecovered;
    totalDeaths.innerHTML = data.Global.TotalDeaths;
}
