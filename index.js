import drill from './data.js';

const body = document.querySelector('main');
const buttonPrimary = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ';

/**
 * @param {number} themeNum
 * @returns {import('./data.js').Drill}
 */
function getTheme(themeNum) {
    return drill.find((theme) => theme.section === themeNum);
}

/**
 * @returns {Array.<import('./data.js').Drill>}
 */
function getAllThemes() {
    return drill.reduce((acc, { correct, incorrect }) => {
        acc.correct.push(...correct);
        acc.incorrect.push(...incorrect);
        return acc;
    }, { correct: [], incorrect: [] });
}

/**
 * @param {Array.<string>} array
 * @returns {Array.<string>}
 * @description Shuffle an array
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * @param {number} themeNum
 * @param {boolean} testAll
 */
function renderPartPage(themeNum, testAll = false) {
    const theme = testAll ? getAllThemes() : getTheme(themeNum);
    if (theme == null) {
        throw new Error(`Theme ${themeNum} not found`);
    }

    const backBtn = document.createElement('button');
    backBtn.innerText = '⬅️Back';
    backBtn.className = buttonPrimary + 'max-w-fit';
    backBtn.onclick = () => {
        renderPickPartPage();
    };
    const title = document.createElement('h1');
    title.innerText = `Part ${testAll ? "all" : `${theme.section}: ${theme.name}`}`;
    title.className = 'text-2xl font-semibold';

    body.innerHTML = '';
    body.className = 'flex flex-col gap-4';
    body.appendChild(backBtn);
    body.appendChild(title);

    const correctNum = 2;
    const incorrectNum = 3;
    const mixed = [];

    /** type {Array.<string>} */
    const correct = []
    do {
        const index = Math.floor(Math.random() * theme.correct.length);
        if (correct.includes(theme.correct[index])) {
            continue;
        }
        correct.push(theme.correct[index]);
        mixed.push(theme.correct[index]);
    } while (correct.length < correctNum);

    /** type {Array.<string>} */
    const incorrect = []
    /** type {Array.<string>} */
    const incorrect_correct = []
    do {
        const index = Math.floor(Math.random() * theme.incorrect.length);
        if (incorrect.includes(theme.incorrect[index])) {
            continue;
        }
        for (let i = 0; i < correctNum; i++) {
            if (theme.correct.includes(theme.incorrect[index])) {
                continue;
            }
        }
        incorrect.push(theme.incorrect[index]);
        incorrect_correct.push(theme.correct[index]);
        mixed.push(theme.incorrect[index]);
    } while (incorrect.length < incorrectNum);

    shuffle(mixed);

    const form = document.createElement('form');
    form.className = 'flex flex-col gap-2';
    mixed.forEach((question, index) => {
        const div = document.createElement('div');
        div.id = `question-${index}-wrapper`;
        div.className = 'flex flex-row gap-2 hover:bg-gray-100 p-2 border rounded items-center';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = question;
        checkbox.id = `question-${index}`;
        checkbox.className = 'w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2';

        const label = document.createElement('label');
        label.className = 'flex-1 cursor-pointer';
        label.id = `question-${index}-label`;
        label.htmlFor = `question-${index}`;
        label.innerHTML = question;

        div.appendChild(checkbox);
        div.appendChild(label);
        form.appendChild(div);
    });
    form.onsubmit = (event) => {
        event.preventDefault();
        const checkboxes = Array.from(form.querySelectorAll('input[type="checkbox"]'));
        for (const checkbox of checkboxes) {
            checkbox.disabled = true;

            const wrapper = document.getElementById(`${checkbox.id}-wrapper`);
            wrapper.classList.remove('hover:bg-gray-100');
            if (correct.includes(checkbox.value)) {
                wrapper.classList.add('bg-green-200');
            } else {
                wrapper.classList.add('bg-red-200');
                const label = document.getElementById(`${checkbox.id}-label`);
                const toggleCorrectBtn = document.createElement('button');
                const toggleIncorrectBtn = document.createElement('button');

                toggleCorrectBtn.innerText = 'Show correct';
                toggleCorrectBtn.className = 'px-2 py-1 italic underline font-semibold';
                toggleCorrectBtn.onclick = () => {
                    const correct_value = incorrect_correct[incorrect.indexOf(checkbox.value)];
                    label.innerHTML = correct_value + '<br/><br/>';
                    label.appendChild(toggleIncorrectBtn);
                };

                toggleIncorrectBtn.innerText = 'Show incorrect';
                toggleIncorrectBtn.className = 'px-2 py-1 italic underline font-semibold';
                toggleIncorrectBtn.onclick = () => {
                    const incorrect_value = checkbox.value;
                    label.innerHTML = incorrect_value + '<br/><br/>';
                    label.appendChild(toggleCorrectBtn);
                };

                label.innerHTML = checkbox.value + '<br/><br/>';
                label.appendChild(toggleCorrectBtn);
            }

            if (checkbox.checked && correct.includes(checkbox.value)) {
                const correctIcon = document.createElement('span');
                correctIcon.innerText = '✅';
                correctIcon.className = 'text-green-500 text-3xl';
                wrapper.appendChild(correctIcon);
            } else if (checkbox.checked && incorrect.includes(checkbox.value)) {
                const incorrectIcon = document.createElement('span');
                incorrectIcon.innerText = '❌';
                incorrectIcon.className = 'text-red-500 text-3xl';
                wrapper.appendChild(incorrectIcon);
            }
        }
    };

    const reload = document.createElement('button');
    reload.innerText = 'Reload';
    reload.className = buttonPrimary;
    reload.onclick = () => {
        renderPartPage(themeNum, testAll);
    };

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerText = 'Submit';
    submit.className = buttonPrimary;
    submit.onclick = () => {
        form.onsubmit(new Event('submit'));
        form.appendChild(reload);
        form.removeChild(submit);
    };
    form.appendChild(submit);

    body.appendChild(form);
}

function renderPickPartPage() {
    body.innerHTML = '<h1 class="text-2xl font-semibold">Pick a part</h1>';
    body.className = 'flex flex-col gap-4';

    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'flex flex-wrap gap-2';
    drill.forEach(({ section, name }) => {
        const button = document.createElement('button');
        button.className = buttonPrimary + 'grow';
        button.innerText = `Part ${section}: ${name}`;
        button.onclick = () => renderPartPage(section);
        buttonWrapper.appendChild(button);
    });

    const button = document.createElement('button');
    button.className = buttonPrimary;
    button.innerText = `All parts`;
    button.onclick = () => renderPartPage(null, true);

    body.appendChild(button);
    body.appendChild(buttonWrapper);

    const explanation = document.createElement('a');
    explanation.innerText = 'How to use';
    explanation.className = 'underline text-gray-400 px-4 py-2 border rounded max-w-fit hover:text-gray-600';
    explanation.href = 'https://github.com/tomz197/os-drill';
    explanation.target = '_blank';
    body.appendChild(explanation);
}

renderPickPartPage();
