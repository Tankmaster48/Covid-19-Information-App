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
const countryInput = document.getElementById('countryInput');

function useInfo(data) {
    newCases.innerHTML = data.Global.NewConfirmed;
    newRecoveries.innerHTML = data.Global.NewRecovered;
    newDeaths.innerHTML = data.Global.NewDeaths;
    totalCases.innerHTML = data.Global.TotalConfirmed;
    totalRecoveries.innerHTML = data.Global.TotalRecovered;
    totalDeaths.innerHTML = data.Global.TotalDeaths;
}

document.getElementById('enterBtn').addEventListener('click', changeCountry);

function changeCountry() {
    infoSystem.getInfo('https://api.covid19api.com/summary')
    .then(data => {
        let foundCountry = false;
        for(let i = 0; i<186; i++) {
            if(data.Countries[i].Country === countryInput.value) {
                newCases.innerHTML = data.Countries[i].NewConfirmed;
                newRecoveries.innerHTML = data.Countries[i].NewRecovered;
                newDeaths.innerHTML = data.Countries[i].NewDeaths;
                totalCases.innerHTML = data.Countries[i].TotalConfirmed;
                totalRecoveries.innerHTML = data.Countries[i].TotalRecovered;
                totalDeaths.innerHTML = data.Countries[i].TotalDeaths;
                foundCountry = true;
            }
        }

        if(foundCountry === false) {
            alert('Please enter a valid country')
        }
    })
    .catch(err => console.log(err));
}
