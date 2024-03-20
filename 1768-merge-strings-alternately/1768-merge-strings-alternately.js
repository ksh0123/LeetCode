/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = '';
    let index = 0;
    while(true){
        if(word1[index] === undefined && word2[index] === undefined){
            return answer;
        } else {
            if(word1[index] !== undefined) answer += word1[index];
            if(word2[index] !== undefined) answer += word2[index];
            index++;
        }
    }
};