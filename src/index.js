module.exports = function towelSort(matrix) {
    let i, j;
    let count = 0;
    let mas = [];

    if (matrix && matrix.length > 0) {
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (j = 0; j < matrix[i].length; j++) {
                    mas[count] = matrix[i][j];
                    count++;
                }
            } else if (i % 2 == 1) {
                for (j = matrix[i].length - 1; j >= 0; j--) {
                    mas[count] = matrix[i][j];
                    count++;
                }
            }
        }
    }
    
    return mas;
};
