/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const temp = magazine.split('');
    
    for(let i = 0; i < ransomNote.length; i++){
        if(!temp.includes(ransomNote[i])){ 
            return false
        }
        
        const index = temp.indexOf(ransomNote[i])
        temp.splice(index,1)
    }
    return true
};