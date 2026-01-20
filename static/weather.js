const input = document.querySelector(".city-input");

const welcomeScreen = document.querySelector(".welcome-screen");
const heroSection = document.querySelector(".hero");
const statsSection = document.querySelector(".stats");
const detailsSection = document.querySelector(".details");

const forecastToggleBtn = document.querySelector(".forecast-toggle");
const forecastPanel = document.querySelector(".forecast-panel");

const rainLayer = document.querySelector(".rain-layer");
const snowLayer = document.querySelector(".snow-layer");

const themeBtn = document.querySelector(".theme-toggle");



window.onload = () => {
    input.focus();
};


themeBtn.onclick = () => {
    document.body.classList.toggle("light");
};


forecastToggleBtn.onclick = () => {

    forecastPanel.classList.toggle("hidden");

    forecastToggleBtn.textContent =
        forecastPanel.classList.contains("hidden")
            ? "Show Forecast ▼"
            : "Hide Forecast ▲";
};





document.addEventListener("DOMContentLoaded", () => {

    const hasWeather = document.body.dataset.hasweather;

    if (hasWeather === "no") {

        welcomeScreen.style.display = "block";

        heroSection.style.display = "none";
        statsSection.style.display = "none";
        detailsSection.style.display = "none";
        forecastToggleBtn.style.display = "none";

        rainLayer.classList.add("hidden");
        snowLayer.classList.add("hidden");

    }


    else {

        welcomeScreen.style.display = "none";

        heroSection.style.display = "block";
        statsSection.style.display = "grid";
        detailsSection.style.display = "grid";
        forecastToggleBtn.style.display = "block";



    }

});
window.addEventListener("load", () => {

    const condition =
        (document.body.dataset.condition || "").toLowerCase();

    console.log("Final weather condition:", condition);


    rainLayer.classList.add("hidden");
    snowLayer.classList.add("hidden");


    if (
        condition.includes("rain") ||
        condition.includes("drizzle") ||
        condition.includes("thunder") ||
        condition.includes("storm")
    ) {
        rainLayer.classList.remove("hidden");
        console.log("RAIN AUTO ENABLED");
    }


    else if (condition.includes("snow")) {
        snowLayer.classList.remove("hidden");
        console.log("SNOW AUTO ENABLED");
    }

});
