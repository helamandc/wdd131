// select the DOM elements for output
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML = today.getFullYear()
//function to retrieve the last modified date
function displayLastModified() { const lastModified = document.lastModified; document.getElementById('lastModified').textContent = lastModified; }


// Function to display the review counter from localStorage
function displayReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');

    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    document.getElementById('reviewCount').textContent = `Reviews Completed: ${reviewCount}`;
}

// Call the function to display the review counter when the page loads
window.onload = function () {
    displayReviewCounter();
};