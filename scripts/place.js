// select the DOM elements for output
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML = today.getFullYear()
//function to retrieve the last modified date
function displayLastModified() { const lastModified = document.lastModified; document.getElementById('lastModified').textContent = lastModified; }


const calculateWindChill = () => (temp = parseFloat(document.getElementById('temperature').textContent), wind = parseFloat(document.getElementById('wind').textContent), temp > 10 ? 'N/A' : (document.getElementById('windchill').textContent = (13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16)).toFixed(2)))
