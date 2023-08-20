
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (!matrix || matrix.length === 0) {
  return [];
} 
  for (let indexOfMatrix = 1; indexOfMatrix < matrix.length; indexOfMatrix += 2){
    matrix[indexOfMatrix] = matrix[indexOfMatrix].reverse();
  }
  return matrix.flat();
}
