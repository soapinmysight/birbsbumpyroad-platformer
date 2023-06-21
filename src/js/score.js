export class Scores {
    // Define a variable 'score' and initialize it to 0
    score = 0
    addition
    // Define a function 'getScore' that returns the value of 'score'
    getScore() {
        return this.score
    }

    // Define a function 'setScore' that sets the value of 'score' to the given 'value'
    setScore(value) {
        this.score = value
    }

    // Define a function 'incrementScore' that increases the value of 'score' by 1
    addtoScore() {
        console.log(this.score)
        // add random value of 0 to 3 to 'score'
        let addition = Math.floor(Math.random() * 3)
        this.score = this.score + addition
        console.log(this.score)
    }

}