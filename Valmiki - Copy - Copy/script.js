// Function to close all dropdowns
function closeAllDropdowns() {
    var dropdowns = document.querySelectorAll('.dropdown-list');
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('show'); // Remove 'show' class to close dropdowns
    });
}

// Add event listeners to buttons
document.getElementById('certificateButton').addEventListener('click', function () {
    closeAllDropdowns(); // Close all dropdowns first
    var certificateList = document.getElementById('certificateList');
    certificateList.classList.toggle('show'); // Toggle the 'show' class for this dropdown
});

document.getElementById('languageToggleButton').addEventListener('click', function () {
    closeAllDropdowns(); // Close all dropdowns first
    var languageList = document.getElementById('languageList');
    languageList.classList.toggle('show'); // Toggle the 'show' class for this dropdown
});

document.getElementById('compilerButton').addEventListener('click', function () {
    closeAllDropdowns(); // Close all dropdowns first
    var compilerList = document.getElementById('compilerlist');
    compilerList.classList.toggle('show'); // Toggle the 'show' class for this dropdown
});
