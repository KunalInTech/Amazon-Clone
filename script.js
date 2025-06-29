document.querySelector(".search-select").addEventListener("change", function () {
    console.log("Category selected:", this.value);
});
document.querySelector(".search-icon").addEventListener("click", function () {
    const searchQuery = document.querySelector(".search-input").value;
    if (searchQuery.trim() !== "") {
        alert(`Searching for "${searchQuery}"`);
    } else {
        alert("Please enter something to search.");
    }
});
document.querySelector(".button-text").addEventListener("click", function () {
    alert("Sign-in functionality coming soon!");
});
document.querySelector(".foot-panel1").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.querySelectorAll(".border").forEach(elem => {
    elem.addEventListener("mouseover", () => {
        elem.style.border = "1.5px solid white";
    });
    elem.addEventListener("mouseout", () => {
        elem.style.border = "1.5px solid transparent";
    });
});
document.querySelector(".new").addEventListener("click", () => {
    alert("Redirecting to sign-up page (to be implemented)");
});

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query === "") {
            showAlert("Please enter something to search.");
        } else {
            // You can replace this with actual functionality
            console.log("Searching for:", query);
        }
    });
});

function showAlert(message) {
    const alertBox = document.getElementById("custom-alert");
    const alertMsg = document.getElementById("alert-message");
    alertMsg.textContent = message;
    alertBox.classList.remove("hidden");
}

function closeAlert() {
    document.getElementById("custom-alert").classList.add("hidden");
}
