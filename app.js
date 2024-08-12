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
let currentStep = 0;

// Save selected option to localStorage
function saveSelectedOption() {
    const selectedOption = document.querySelector(`input[name="question-${currentStep}"]:checked`);
    if (selectedOption) {
        localStorage.setItem(`question-${currentStep}`, selectedOption.value);
    }
}

// Load selected options from localStorage
function loadSelectedOptions() {
    questions.forEach((q, index) => {
        const savedOption = localStorage.getItem(`question-${index}`);
        if (savedOption) {
            document.querySelector(`input[name="question-${index}"][value="${savedOption}"]`).checked = true;
        }
    });
}
window.addEventListener('load', () => {
    // Clear all quiz-related items from localStorage
    questions.forEach((q, index) => {
        localStorage.removeItem(`question-${index}`);
    });

    // Manually reset all radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });

    // Re-render questions to reflect the reset
    renderQuestions();
});
function renderQuestions() {
    questionsContainer.innerHTML = ''; // Clear existing content

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('step');
        if (index === currentStep) questionDiv.classList.add('active');

        questionDiv.innerHTML = `<p>${q.question}</p>`;


                // Add a blank option at the start
                const blankOption = document.createElement('input');
                blankOption.type = 'radio';
                blankOption.name = `question-${index}`;
                blankOption.value = '';
                blankOption.disabled = true;
                blankOption.style.display = 'none'; // Hide the blank option
        
                const blankLabel = document.createElement('label');
                blankLabel.appendChild(blankOption);
                questionDiv.appendChild(blankLabel);
        
                // Render the actual options
                q.options.forEach((option) => {
                    const input = document.createElement('input');
                    const label = document.createElement('label');
        
                    input.type = 'radio';
                    input.name = `question-${index}`;
                    input.value = option;
        
                    // Check if this option was previously selected
                    const savedOption = localStorage.getItem(`question-${index}`);
                    if (savedOption === option) {
                        input.checked = true;
                    }
        
                    label.appendChild(input);
                    label.appendChild(document.createTextNode(option));
                    questionDiv.appendChild(label);
                });
        
                questionsContainer.appendChild(questionDiv);
            });
 // Toggle button visibility
 prevBtn.style.display = (currentStep === 0) ? 'none' : 'inline';
 nextBtn.style.display = (currentStep === questions.length - 1) ? 'none' : 'inline';
 submitBtn.style.display = (currentStep === questions.length - 1) ? 'inline' : 'none';
}
  
// Function to check if an option is selected
function isOptionSelected() {
    const selectedOption = document.querySelector(`input[name="question-${currentStep}"]:checked`);
    return selectedOption !== null;
}

// Function to handle next and previous navigation
function navigate(step) {
    if (step === 1 && !isOptionSelected()) {
        alert('Please select an option before proceeding.');
        return;
    }

    saveSelectedOption(); // Save the selected option before navigating

    currentStep += step;
    if (currentStep < 0) currentStep = 0;
    if (currentStep >= questions.length) currentStep = questions.length - 1;
    renderQuestions();
}


// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    resultDiv.textContent = `You scored ${score} out of ${questions.length}!`;
    document.getElementById('playagain').style.display = 'unset';

    seeyou.textContent = 'Hope you enjoyed my game? See you next time... bye!'

    // Save score to localStorage
    localStorage.setItem('lastScore', score);
}


// Example 2: Control Browser History
function handleHistory() {
    const goBackBtn = document.createElement('button');
    goBackBtn.textContent = 'Go Back';
    goBackBtn.addEventListener('click', () => {
        if (history.length > 1) {
            history.back();
        } else {
            alert('No previous history.');
        }
    });
    document.body.insertBefore(goBackBtn, form);
}


// Example 4: Retrieve Last Score from Local Storage
function retrieveLastScore() {
    const lastScore = localStorage.getItem('lastScore');
    if (lastScore) {
        const scoreDiv = document.createElement('div');
        scoreDiv.textContent = `Your Last Score: ${lastScore}`;
        document.body.insertBefore(scoreDiv, form);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const quizSection = document.getElementById('quiz-section');

    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (loggedInUser) {
        quizSection.classList.remove('hidden');
        document.getElementById('welcomeuser').textContent = 'Welcome ' + loggedInUser;
    } else {
        loginSection.classList.remove('hidden');
    }
});

function logout() {
    sessionStorage.clear();

    window.location.href = 'index.html';
}