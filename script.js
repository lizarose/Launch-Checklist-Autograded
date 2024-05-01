// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
      let selectedPlanet = pickPlanet(listedPlanets);
      console.log(selectedPlanet);
      addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);

      //Submit Button stuff
      const form = document.querySelector("form");
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        //Declaring variables for Pilot, Co-Pilot, Fuel Level, Cargo Mass
        let pilot = document.querySelector('input[name = "pilotName"]');
        let copilot = document.querySelector('input[name = "copilotName"]');
        let fuelLevel = document.querySelector('input[name = "fuelLevel"]');
        let cargoLevel = document.querySelector('input[name = "cargoMass"]');
        let list = document.querySelector('input[name = "faultyItems"]');

        // let fuelLevel = document.getElementById('fuelLevel').value;
        // let cargoLevel = document.getElementById('cargoMass').value;
        // let list = document.getElementById("faultyItems").style;
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
      });

    });
});
