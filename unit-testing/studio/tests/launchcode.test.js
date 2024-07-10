// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should return 'nonprofit' for organization key", () => {
    expect(launchcode.launchcode.organization).toBe("nonprofit");
  })

  test("should return 'Jeff' for executiveDirector key", () => {
    expect(launchcode.launchcode.executiveDirector).toBe("Jeff");
  })

  test("should return 100 for percentageCoolEmployees", () => {
    expect(launchcode.launchcode.percentageCoolEmployees).toBe(100);
  })

  test("should return 3 items in programsOffered key", () => {
    expect(launchcode.launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.launchcode.programsOffered.length).toBe(3)
  })

  test("should return 'Launch!' when number entered is divisible by only 2", () => {
    let output = launchcode.launchOutput(4)
    expect(output).toBe("Launch!");
  })
  test("should return 'Code!' when number entered is divisible by only 3", () => {
    let output = launchcode.launchOutput(3)
    expect(output).toBe("Code!");
  })
  test("should return 'Rocks!' when number entered is divisible by only 5", () => {
    let output = launchcode.launchOutput(5)
    expect(output).toBe(" Rocks!");
  })
  test("should return 'LaunchCode!' when number entered is divisible by 2 and 3", () => {
    let output = launchcode.launchOutput(6)
    expect(output).toBe("LaunchCode!");
  })
  test("should return 'Code Rocks!' when number entered is divisible by 3 and 5", () => {
    let output = launchcode.launchOutput(15)
    expect(output).toBe("Code Rocks!");
  })
  test("should return 'Launch Rocks!' when number entered is divisible by 2 and 5", () => {
    let output = launchcode.launchOutput(10)
    expect(output).toBe("Launch Rocks! (CRASH!!!!)");
  })
  test("should return 'LaunchCode Rocks!' when number entered is divisible by 2, 3, and 5", () => {
    let output = launchcode.launchOutput(30)
    expect(output).toBe("LaunchCode Rocks!");
  }) 
  test("should return 'Rutabagas! That doesn't work.' when number entered is not divisible by 2, 3, or 5", () => {
    let output = launchcode.launchOutput(7)
    expect(output).toBe("Rutabagas! That doesn't work.");
  })
  
  
});