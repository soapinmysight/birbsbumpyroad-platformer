export class Timescores {
    // Define a variable 'score' and initialize it to 0
    score = 0
    // Define a function 'getScore' that returns the value of 'score'
    getScore() {
        return this.score
    }

    // Define a function 'setScore' that sets the value of 'score' to the given 'value'
    setScore(value) {
        this.score = value
    }

    // Define a function 'incrementScore' that increases the value of 'score' by 1
    incrementScore() {
        console.log(this.score)
        // Increment the value of 'score' by 1
        this.score = this.score + 1
        console.log(this.score)
    }

}