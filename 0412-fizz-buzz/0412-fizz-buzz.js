/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for(let i = 1; i <= n; i++){
        let string = '';
        if (i % 3 == 0){
            string += 'Fizz';
        }
        if (i % 5 == 0){
            string += 'Buzz';
        }
        if (string == ''){
            string += i
        }
        
        answer.push(string);
    }
    
    return answer;
};