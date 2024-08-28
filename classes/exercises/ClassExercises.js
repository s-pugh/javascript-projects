// Define your Book class here:
class books {
    constructor(title, author, copyrightDate, isbn, numOfPages, numOfTimesCheckedOut, isBookDiscarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.numOfTimesCheckedOut = numOfTimesCheckedOut;
        this.isBookDiscarded = isBookDiscarded;
    }
    checkout(uses=1){
        this.numOfTimesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class manual extends books{
    constructor(title, author, copyrightDate, isbn, numOfPages, numOfTimesCheckedOut, isBookDiscarded){
        super(title, author, copyrightDate, isbn, numOfPages, numOfTimesCheckedOut, isBookDiscarded);
    }
   dispose(currentYear){
        if (currentYear-this.copyrightDate > 5){
            this.isBookDiscarded = 'Yes'
        }
    }

}

class novel extends books {
    constructor(title, author, copyrightDate, isbn, numOfPages, numOfTimesCheckedOut, isBookDiscarded){
        super(title, author, copyrightDate, isbn, numOfPages, numOfTimesCheckedOut, isBookDiscarded);
    }
    dispose(){
        if (this.numOfTimesCheckedOut > 100){
            this.isBookDiscarded = 'Yes'
        }
    }
}


// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new novel ('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No')
let shuttleBuilding = new manual('Top Secret Shuttle Building', 'Redacted', 2013, '0000000000000', 1147, 1, 'No')
// Code exercises 4 & 5 here:
console.log(prideAndPrejudice)
prideAndPrejudice.checkout(5)
console.log(prideAndPrejudice)
console.log(shuttleBuilding)
shuttleBuilding.dispose(2024)
console.log(shuttleBuilding)
