/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const strSet = new Map()
    const answer = []
    
    if(strs.length === 1) return [strs]
    
    for(let i = 0; i < strs.length; i++) {
        let tmp = strs[i].split("").sort().join("")
        if(strSet.has(tmp)) strSet.set(tmp,[...strSet.get(tmp), strs[i]])
        else strSet.set(tmp,[strs[i]])
    }
    
    for(let x of strSet.values()) {
        answer.push(x)
    }
    
    return answer   
}