// Cache elements
const form = document.querySelector('#quiz-form');
const questionsContainer = document.querySelector('#questions-container');
const resultDiv = document.querySelector('#result');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const submitBtn = document.querySelector('#submit-btn');

// Sample questions
const questions = [
    { question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra'], answer: 'Canberra' },
    { question: 'What has keys but can’t open locks?', options: ['Piano', 'Map', 'Computer'], answer: 'Piano' },
    { question: 'If you were running a race and you passed the person in second place, what place would you be in?', options: ['First', 'Second', 'Third'], answer: 'Second' },
    { question: 'What is the smallest prime number?', options: ['1', '2', '3'], answer: '2' },
    { question: 'How many continents are there on Earth?', options: ['5', '6', '7'], answer: '7' },
    { question: 'What word is spelled incorrectly in every dictionary?', options: ['Incorrectly', 'Perfectly', 'Misspelled'], answer: 'Incorrectly' },
    { question: 'What gets wetter as it dries?', options: ['Towel', 'Sponge', 'River'], answer: 'Towel' },
    { question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Iron', 'Diamond'], answer: 'Diamond' },
    { question: 'What can travel around the world while staying in a corner?', options: ['Stamp', 'Globe', 'Clock'], answer: 'Stamp' },
    { question: 'What is the only even prime number?', options: ['2', '4', '6'], answer: '2' },
    { question: 'What building has the most stories?', options: ['Library', 'Hotel', 'Skyscraper'], answer: 'Skyscraper' },
    { question: 'In what month do leaves fall the most?', options: ['March', 'June', 'October'], answer: 'October' },
    { question: 'How many letters are there in the alphabet?', options: ['26', '24', '28'], answer: '26' },
    { question: 'What comes once in a minute, twice in a moment, but never in a thousand years?', options: ['M', 'E', 'N'], answer: 'M' },
    { question: 'How many sides does a hexagon have?', options: ['6', '8', '10'], answer: '6' },
    { question: 'What is the color of an emerald?', options: ['Red', 'Green', 'Blue'], answer: 'Green' },
    { question: 'What has a neck but no head?', options: ['Bottle', 'Giraffe', 'Chair'], answer: 'Bottle' },
    { question: 'What is the main ingredient in guacamole?', options: ['Tomato', 'Avocado', 'Onion'], answer: 'Avocado' },
    { question: 'What has to be broken before you can use it?', options: ['Egg', 'Cup', 'Window'], answer: 'Egg' },
    { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Jupiter', 'Saturn'], answer: 'Jupiter' }
];