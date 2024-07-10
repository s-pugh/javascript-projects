
let launchcode = {
  
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"]
}

function launchOutput(num) {
    let phrase = "" 

    if (num % 2 === 0){
        phrase += 'Launch'
    }

    if (num % 3 === 0){
        phrase += 'Code'
    }

    if (num % 5 === 0){
        phrase += ' Rocks'
    }

    if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0){
        return ("Rutabagas! That doesn't work.")
    }

    phrase += "!"

    if (phrase === 'Launch Rocks!'){
        phrase += ' (CRASH!!!!)'
    }

    
    console.log(phrase)
    return phrase
}
launchOutput(7)

module.exports = {
    launchcode: launchcode,
    launchOutput: launchOutput
}


