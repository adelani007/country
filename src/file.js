const body = document.querySelector("body");
const mainContainer = document.querySelector("main");

const countries = async () => {
  try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const results = await data.json();

    console.log(results);
    results.forEach((country) => {
      const countryContainer = document.createElement("div");
      countryContainer.classList.add();
      countryContainer.innerHTML = `
      <div class=" h-full rounded shadow-lg p-4 bg-white">
      <img src="${country.flags.png}" alt="${
        country.name.common
      }" class=" h-32 w-64 object-contain object-center mb-6 rounded" />
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${country.name.common}</div>
        <p class="text-gray-700 text-base">
          Official Name: ${country.name.official}
        </p>
        <p class="text-gray-700 text-base">
            fifa: ${country.fifa || "N/A"}
        </p>
        <p class="text-gray-700 text-base">
          Population: ${country.population.toLocaleString()}
        </p>
        <p class="text-gray-700 text-base">
          Region: ${country.region}
        </p>
      <a target="_blank" href="${
        country.maps.googleMaps
      }" >  <button class="flex text-center justify-center w-full mt-5 rounded-lg bg-blue-600 text-white px-4 py-1">View on Map</button> </a>
        </div>
      </div>
    `;
      mainContainer.appendChild(countryContainer);
    });
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => countries());
