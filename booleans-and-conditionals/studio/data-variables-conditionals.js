// Initialize Variables below
const date = "Monday 2019-03-18"
const time = "10:05:34 AM"
const astronautCount = 7
const astronautStatus = "ready"
const averageAstronautMassKg = 80.7
const crewMassKg = (astronautCount * averageAstronautMassKg)
const fuelMassKg = 760000
const shuttleMassKg = 74842.31
const totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg)
const maximumMassKg = 850000
const fuelTempCelsius = -225
const minimumFuelTemp = -300
const maximumFuelTemp = -150
const fuelLevel = "100%"
const weatherStatus = "clear"
let preparedForLiftoff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut count: ", astronautCount)
} else {
    console.log("Astronaut count:", astronautCount)
    preparedForLiftoff = false
}

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronaut status: ", astronautStatus)
} else {
    console.log("Astronaut status: ", astronautStatus)
    preparedForLiftoff = false
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassKg) {
    console.log("Total Mass: ", totalMassKg)
} else {
    console.log("Total mass: ",totalMassKg)
    preparedForLiftoff = false
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {
    console.log("Fuel Temperature: ", fuelTempCelsius);
} else {
    console.log("Fuel temperature: ",fuelTempCelsius)
    preparedForLiftoff = false
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel Level: ",fuelLevel)
} else {
    console.log("Fuel level: ",fuelLevel)
    preparedForLiftoff = false
}


// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather status: ",weatherStatus)
} else {
    console.log("Weather status: ",weatherStatus)
    preparedForLiftoff = false
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftoff === true) {
    console.log("All systems are a go! Initiating space shuttle launch sequence");
    console.log("Date: ", date);
    console.log("Time: ", time);
    console.log("Astronaut count: ",astronautCount);
    console.log("Crew Mass: ", crewMassKg ,"kg");
    console.log("Fuel Mass: ", fuelMassKg ,"kg");
    console.log("Shuttle Mass: ", shuttleMassKg , "kg");
    console.log("Total Mass: ", totalMassKg , "kg");
    console.log("Fuel Temperature: ", fuelTempCelsius ,"C");
    console.log("Weather Status: ", weatherStatus);
    console.log("Have a safe trip astronauts!");
} else {
    console.log("Mission Aborted")
}