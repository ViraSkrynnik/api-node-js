console.log('Arrays');
const numbers: number[] = [1, 2, 3];
console.log('Array:', numbers);
console.log('Array length is:', numbers.length);
console.log(' ');

const cityNames: string[] = ['Tallinn', 'Helsinki'];
cityNames.push('Riga');
console.log('City names:', cityNames);
console.log('City names length is:', cityNames.length);
console.log(' ');

const cars: string[] = ['Volvo', 'BMW', 'Audi'];
cars.pop();
console.log('Cars:', cars);
console.log('Cars length is:', cars.length);
console.log(' ');

const userIds: number[] = [];
userIds.push(11);
console.log('User IDs length is:', userIds.length);
userIds.push(22);
console.log('User IDs length is:', userIds.length);
console.log(' ');

console.log('Loops');
const showNumbers: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < showNumbers.length; i++) {
    console.log('Number:', showNumbers[i]);
}
console.log(' ');

const sumNumbers: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;
for (let i = 0; i < sumNumbers.length; i++) {
    sum += sumNumbers[i];
}
console.log('Sum of array elements:', sum);
console.log(' ');

const original: number[] = [3, 6, 9];
const doubled: number[] = [];
for (let i = 0; i < original.length; i++) {
    doubled.push(original[i] * 2);
}
console.log('Doubled array:', doubled);
console.log(' ');

const backwardsNumbers = [10, 20, 30];
for (let i = backwardsNumbers.length - 1; i >= 0; i--) {
    console.log(backwardsNumbers[i]);
}
console.log(' ');

console.log('Task 1');
const arrayMaxNumber: number[] = [12, 5, 89, 3, 42, 101];
let maxNumber: number = arrayMaxNumber[0];
for (let i = 1; i < arrayMaxNumber.length; i++) {
    if (arrayMaxNumber[i] > maxNumber) {
        maxNumber = arrayMaxNumber[i];
    }
}
console.log("Array maximum number:", maxNumber);
console.log(' ');

console.log('Task 2');
const arrayMinNumber: number[] = [51, 40, 23, 78, 15];
let minNumber: number = arrayMinNumber[0];
for (let i = 1; i < arrayMinNumber.length; i++) {
    if (arrayMinNumber[i] < minNumber) {
        minNumber = arrayMinNumber[i];
    }
}
console.log("Array minimum number:", minNumber);
console.log(' ');

console.log('Task 3');
const arrayEvenNumber: number[] = [12, 5, 89, 3, 42, 77, 10, 6, 21];
let evenCount: number = 0;
for (let i = 0; i < arrayEvenNumber.length; i++) {
    const currentNumber: number = arrayEvenNumber[i];
    if (currentNumber % 2 === 0) {
        evenCount++;
    }
}
console.log("Amount of even numbers:", evenCount);
console.log(' ');

console.log('Task 4');
const allNumbers: number[] = [10, -5, 0, 22, -1, 7, -15, 3];
const positiveNumbers: number[] = [];
for (let i = 0; i < allNumbers.length; i++) {
    const currentNumber: number = allNumbers[i];
    if (currentNumber > 0) {
        positiveNumbers.push(currentNumber);
    }
}
console.log("Array of positive numbers:", positiveNumbers);