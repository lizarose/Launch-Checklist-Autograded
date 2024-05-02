// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.
  let htmlString = "";
  const missionTarget = document.getElementById("missionTarget");

  missionTarget.innerHTML = htmlString;

  htmlString = `
              <h2>Mission Destination</h2>
                  <ol>
                      <li>Name: ${name}</li>
                      <li>Diameter: ${diameter}</li>
                      <li>Star: ${star}</li>
                      <li>Distance from Earth: ${distance}</li>
                      <li>Number of Moons: ${moons}</li>
                  </ol>
                  <img src="${imageUrl}">
            `;

  missionTarget.innerHTML = htmlString;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  //Const for: Pilot, Co-Pilot, Fuel Level, and Cargo Level Check
  const pilotValidation = validateInput(pilot);
  const copilotValidation = validateInput(copilot);
  const fuelLevelValidation = validateInput(fuelLevel);
  const cargoLevelValidation = validateInput(cargoLevel);

    console.log(pilotValidation)
  //Validation
  if ((pilotValidation === "Empty" || copilotValidation === "Empty") || pilotValidation === "Is a Number" || copilotValidation === "Is a Number") {
    window.alert(
      "Please fix the following issue: Pilot and Co-Pilot require names."
    );
    list.style.visibility = "hidden";

  } else if (fuelLevelValidation === "Not a Number" || fuelLevelValidation === "Empty") {
    window.alert(
      "Please fix the following issue: Fuel level must be a valid number."
    );
    list.style.visibility = "hidden";

  } else if (cargoLevelValidation === "Not a Number" || cargoLevelValidation === "Empty") {
    window.alert(
      "Please fix the following issue: Cargo mass must be a valid number."
    );
    list.style.visibility = "hidden";

  } else {
    console.log(`All inputs are filled in appropriately.`);
  }

  document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch.`;
  document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is ready for launch.`;

  let minFuelLevelRequired = 10000;
  let maxCargoAllowed = 10000;
  //If Fuel Level and Cargo Mass are Both True
  if (fuelLevel >= minFuelLevelRequired && cargoLevel <= maxCargoAllowed) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
    document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
    //If Fuel Level is True and Cargo Mass is False w/ too heavy
  } else if (fuelLevel >= minFuelLevelRequired && cargoLevel >= maxCargoAllowed) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
    document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
    //If Fuel Level is False w/ too low and Cargo Mass is True
  } else if (fuelLevel <= minFuelLevelRequired && cargoLevel <= maxCargoAllowed) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
    document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
    document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
    //If Fuel Level is False w/ too low OR Cargo Mass is False w/too heavy
  } else if (fuelLevel <= minFuelLevelRequired || cargoLevel >= maxCargoAllowed) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
    document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
    document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
    //Anything Else Prints Error
  } else {
    console.log(`Error...something went wrong. Try again.`);
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let random = Math.floor(Math.random() * planets.length);
  let planetResponse = planets[random];

  return planetResponse;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
