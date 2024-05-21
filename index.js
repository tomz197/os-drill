import drill from './data.js';

const body = document.querySelector('body');

/*
 * @param {number} themeNum
 */
function renderTheme(themeNum, testAll = false) {
    const backBtn = document.createElement('button');
    backBtn.innerText = '⬅️Back';
    backBtn.className = 'px-4 py-2 bg-blue-500 text-white rounded';
    backBtn.onclick = () => {
        renderPickTheme();
    };
    const title = document.createElement('h1');
    title.innerText = `Part ${testAll ? "all" : themeNum}`;
    title.className = 'text-2xl font-semibold';

    body.innerHTML = '';
    body.appendChild(backBtn);
    body.appendChild(title);

    const theme = (() => {
        if (testAll) {
            return drill.reduce((acc, { correct, incorrect }) => {
                acc.correct.push(...correct);
                acc.incorrect.push(...incorrect);
                return acc;
            }, { correct: [], incorrect: [] });
        }
        return drill.find((theme) => theme.section === themeNum);
    })();
    if (theme == null) {
        alert('theme is null');
        console.error('theme is null');
        renderPickTheme();
        return;
    }
    if (!testAll) {
        title.innerText = `Part ${themeNum} ${theme.name}`;
    }

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

    //shuffle
    for (let i = mixed.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
    }

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
        checkbox.className = 'w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';

        const label = document.createElement('label');
        label.className = 'flex-1';
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
    reload.className = 'px-6 py-4 bg-blue-500 text-white rounded';
    reload.onclick = () => {
        renderTheme(themeNum, testAll);
    };

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerText = 'Submit';
    submit.className = 'px-2 py-4 bg-blue-500 text-white rounded';
    submit.onclick = () => {
        form.onsubmit(new Event('submit'));
        form.appendChild(reload);
        form.removeChild(submit);
    };
    form.appendChild(submit);

    body.appendChild(form);
}

function renderPickTheme() {
    body.innerHTML = '<h1 class="text-2xl font-semibold">Pick a part</h1>';
    drill.forEach(({ section, correct, incorrect, name }) => {
        if (section == null) {
            alert('section is null');
            console.error('section is null');
            return;
        }
        if (correct == null) {
            alert('correct is null');
            console.error('correct is null');
            return;
        }
        if (incorrect == null) {
            alert('incorrect is null');
            console.error('incorrect is null');
            return;
        }
        if (name == null) {
            alert('name is null');
            console.error('name is null');
            return;
        }

        const button = document.createElement('button');
        button.className = 'py-2 px-4 m-2 bg-blue-500 text-white rounded';
        button.innerText = `Part ${section}: ${name}`;
        button.onclick = () => renderTheme(section);
        body.appendChild(button);
    });
    const button = document.createElement('button');
    button.className = 'py-2 px-4 m-2 bg-blue-500 text-white rounded';
    button.innerText = `All parts`;
    button.onclick = () => renderTheme(null, true);
    body.appendChild(button);
}

renderPickTheme();
