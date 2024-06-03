/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let spaces = 0;
    for(let i = 0; i < flowerbed.length; i++){
        let emptyLeft = (i == 0) || (flowerbed[i - 1] == 0);
        let emptyRight = (i == flowerbed.length - 1) || (flowerbed[i + 1] == 0);
        
        if (flowerbed[i] == 0 && emptyLeft && emptyRight){
            spaces++;
            i++;
        }
    }
    return spaces >= n;
    
};