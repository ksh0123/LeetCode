/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for(let i = 0; i < accounts.length; i++){
        let total = 0;
        accounts[i].forEach(x => total += x);
        if (max <= total) max = total;
    }
    return max;
};