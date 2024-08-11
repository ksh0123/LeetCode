/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for(let i = 0; i < n; i++){
        let string = '';
        if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0){
            string += "FizzBuzz";
        } else if ((i + 1) % 3 == 0){
            string += "Fizz";
        } else if ((i + 1) % 5 == 0){
            string += "Buzz";
        } else {
            string += i + 1;
        }
        answer.push(string);
    }
    
    return answer;
};