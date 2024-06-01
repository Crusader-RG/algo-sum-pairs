const sumPairs = (arr, num) => {
    let ansArr = []
    for (i = 0; i <= arr.length; i++){
        for (j = i; j <= arr.length; j++){
            if (i === j) {
                continue
            } else if (i + j === num){
                ansArr.push(i)
                ansArr.push(j)
            }
        }
    }
    if (ansArr.length === 0){
        return "unable to find pairs"
    } else {
    return ansArr
    }
};

module.exports = sumPairs;
