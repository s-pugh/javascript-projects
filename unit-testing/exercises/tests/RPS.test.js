const whoWon = require ('../RPS.js');

describe("whoWon", function(){
    test("should return 'TIE!' when both players have the same input", function(){
        let output = whoWon.whoWon('rock', 'rock')
        expect(output).toEqual('TIE!')
    })
    test("should return 'Player 2 wins!' when player 1 is rock and player 2 is paper", function(){
        let output = whoWon.whoWon('rock', 'paper')
        expect(output).toEqual('Player 2 wins!')
    })
    test("should return 'Player 2 won!' when player 1 is paper and player 2 is scissors", function(){
        let output = whoWon.whoWon('paper', 'scissors')
        expect(output).toEqual('Player 2 wins!')
    }) 
    test("should return 'Player 2 wins!' when player 1 is scissors and player 2 is rock", function(){
        let output = whoWon.whoWon('scissors', 'rock')
        expect(output).toEqual('Player 2 wins!')
    })
    test("should return 'Player 1 won!' when player 1 is paper and player 2 is rock", function(){
        let output = whoWon.whoWon('paper', 'rock')
        expect(output).toEqual('Player 1 wins!')
    })
    test("should return 'Player 1 wins!' when player 1 is rock and player 2 is scissors", function(){
        let output = whoWon.whoWon('rock', 'scissors')
        expect(output).toEqual('Player 1 wins!')
    })
    test("should return 'Player 1 won!' when player 1 is scissors and player 2 is paper", function(){
        let output = whoWon.whoWon('scissors', 'paper')
        expect(output).toEqual('Player 1 wins!')
    })
})