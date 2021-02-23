
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArray = [];
    if (!matrix){
        return newArray;
    }
    for (let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        if (i % 2 === 1) {
            row = row.reverse();
        }
        for (let j = 0; j < row.length; j++) {
            newArray.push(row[j]);
        }
    }

  return newArray;
}
