import readlineSync from 'readline-sync';
const greeting = () => {
const playerName = readlineSync.question('Your answer: ');
console.log(`Hello, ${playerName}`);
};
export default greeting;