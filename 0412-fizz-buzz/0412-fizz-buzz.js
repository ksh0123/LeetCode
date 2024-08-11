/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for(let i = 0; i < n; i++){
        if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0){
            answer.push("FizzBuzz");
        } else if ((i + 1) % 3 == 0){
            answer.push("Fizz");
        } else if ((i + 1) % 5 == 0){
            answer.push("Buzz");
        } else {
            answer.push(`${i + 1}`);
        }
    }
    
    return answer;
};