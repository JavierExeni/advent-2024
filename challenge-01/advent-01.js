/*
Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, 
pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. 
Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) 
y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
*/

function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b);
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3 = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// No hay regalos, la lista queda vacía

/* 
1. Code Simplicity:
Use of Set: Converts the list of gifts into a set, automatically removing duplicates.
Destructuring with [...]: Converts the set back into an array, keeping the code concise.
Use of sort: Sorts the elements in ascending order. The use of (a, b) => a - b ensures correct numerical order.
This approach solves the problem in a single line, making it clear and straightforward.

2. Performance:
Duplicate removal: The use of Set is more efficient than manually iterating to remove duplicates.
Sorting: The sort method is efficient and optimized in modern JavaScript engines.

3. Readability:
The code is easy to understand, even for people with limited JavaScript experience.
The use of standard operations (Set, sort) is intuitive and aligns with best practices.

4. Maintainability:
If the function needs to be modified in the future (e.g., changing the order of the gifts), this code is easy to adapt.
*/