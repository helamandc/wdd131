// select the DOM elements for output
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML = today.getFullYear()
//function to retrieve the last modified date
function displayLastModified() { const lastModified = document.lastModified; document.getElementById('lastModified').textContent = lastModified; }


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", function () {
    populateDropdown(products);
});

function populateDropdown(finalProducts) {
    const dropdown = document.querySelector(".myDropdown");

    finalProducts.forEach(product => {
        const option = document.createElement("option");
        option.textContent = product.name;
        option.setAttribute("value", product.id);
        dropdown.appendChild(option);
    });
}

// Function to increment the review counter and store it in localStorage
function incrementReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');

    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
}
