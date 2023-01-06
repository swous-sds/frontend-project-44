import readlineSync from 'readline-sync';

const greeting = () => {
console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('Your answer: ');
console.log(`Hello, ${playerName}`);
};

export default greeting;