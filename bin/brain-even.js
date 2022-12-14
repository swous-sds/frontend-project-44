#!/usr/bin/env node
//import greeting from '../src/core.js';
import readlineSync from 'readline-sync';
const greeting = () => {
	console.log('Welcome to the Brain Games!');
	const playerName = readlineSync.question('May I have your name?: ');
	console.log(`Hello, ${playerName}!`); // это добавили 

   console.log('Answer "yes" if the number is even, otherwise answer "no".');
   const getRandomNember = (min = 0, max = 50) => {
      const random = Math.floor(min - 0.5 + Math.random() * (max - min + 1));
      return Math.round(random); // ДЕЛАЕМ РАНДОМ ЧИСЕЛ ЧТОБЫ НАМ ОНИ ВЫВЕЛИСЬ ХОТЬ ПОН
   }
  
   for (let i=0; i < 3; i++) { // ХЗ БЛИН ЭТОТ ЦИКЛ МИНУС МИНИМУМ Я НЕ УВЕРЕНА
   const theNumber = getRandomNember(); 
   console.log(`Question: ${theNumber}`);
   const answersUser = readlineSync.question('Your answer: ');
   const theEvenNumber = (theNumber % 2 === 0) && (answersUser === 'yes');
   const theOddNumber = (theEvenNumber % 2 !== 1) && (answersUser === 'no'); // ОТВЕТЫ ЧЕЛИКА ДАЛЬШЕ БУДЕТ ПРОВЕРКА
   if (theEvenNumber === true || theOddNumber === true) {
      console.log('Correct!')
   } else {
      const correctAnswers = (answersUser === 'yes' ? 'no' : 'yes'); // ЧТОБЫ ВЫВОДИЛСЯ ОТВЕТ ДА ИЛИ НЕТ ДЛЯ ЛОХА КОТОРЫЙ НЕ РЕШИЛ
      console.log(`'${answersUser}' is wrong answer ;(. Correct answer was '${correctAnswers}'.`)
      console.log(`Let's try again, ${playerName}`)
      return;
   };
   console.log(`Congratulations, ${playerName}!`);
   };
};
greeting();

export default greeting;
