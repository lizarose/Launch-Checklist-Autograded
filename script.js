// Write your JavaScript code here!
window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
            let selectedPlanet = pickPlanet(listedPlanets)
            console.log(selectedPlanet)

            addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)

            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

            
    
        })
            //Declaring variables for Pilot, Co-Pilot, Fuel Level, Cargo Mass
                pilot = document.getElementById('pilotName').value;
                copilot = document.getElementById('copilotName').value;
                fuelLevel = document.getElementById('fuelLevel').value;
                cargoLevel = document.getElementById('cargoMass').value;
                list = document.getElementById("faultyItems").style;


                //Submit Button stuff
             const form = document.getElementById('testForm');
             form.addEventListener("submit", (event) => {
                 event.preventDefault();
             })


        
 });