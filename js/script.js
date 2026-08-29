const digits = document.querySelector('.count-digits');
const increaseBtn = document.querySelector('.count-up');
const decreaseBtn = document.querySelector('.count-down');
const resetBtn = document.querySelector('.count-reset');
const stepsInput = document.querySelector('#steps');
const themeButton = document.querySelector('.dark-button');
const body = document.body;


// ================================
// State
// ================================

let count = Number(localStorage.getItem('countNum')) || 0;
const savedStep = Number(localStorage.getItem('locstp')) || 1;


// ================================
// Storage
// ================================

function saveCount() {
    localStorage.setItem('countNum', count);
}

function saveStep(step) {
    localStorage.setItem('locstp', step);
}


// ================================
// Render
// ================================

function renderCount() {
    digits.textContent = count;
    saveCount();
}


// ================================
// Counter
// ================================

function getStep() {
    return Math.max(1, Number(stepsInput.value) || 1);
}

function countUp() {
    count += getStep();
    renderCount();
}

function countDown() {
    count = Math.max(0, count - getStep());
    renderCount();
}

function resetCount() {
    count = 0;
    renderCount();
}


// ================================
// Step Input
// ================================

function handleStepInput() {
    const step = Number(stepsInput.value);

    if (step >= 1) {
        saveStep(step);
    }
}


// ================================
// Theme
// ================================

function updateThemeButton() {
    const isDark = body.classList.contains('dark');

    themeButton.textContent = isDark ? '☀' : '🌙';

    themeButton.setAttribute(
        'aria-label',
        isDark
            ? 'Switch to light mode'
            : 'Switch to dark mode'
    );
}

function toggleTheme() {
    const isDark = body.classList.toggle('dark');

    localStorage.setItem(
        'theme',
        isDark ? 'dark' : 'light'
    );

    updateThemeButton();
}


// ================================
// Initialization
// ================================

function initialize() {
    stepsInput.value = savedStep;

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark');
    }

    renderCount();
    updateThemeButton();
}


// ================================
// Events
// ================================

increaseBtn.addEventListener('click', countUp);
decreaseBtn.addEventListener('click', countDown);
resetBtn.addEventListener('click', resetCount);

stepsInput.addEventListener('input', handleStepInput);

themeButton.addEventListener('click', toggleTheme);

initialize();