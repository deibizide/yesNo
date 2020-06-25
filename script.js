const endPoint = 'https://yesno.wtf/api';
const textbox = document.getElementsByClassName('textbox');
const button = document.getElementsByClassName('button');
const shake = document.getElementsByClassName('magic-ball');
const input = document.getElementsByTagName('input');
const errorMsg = document.getElementsByClassName('error-msg');

function getAnswer() {
    //Prevent fetching data when inputfield is empty
    if (!input[0].value) {
        errorMsg[0].innerHTML = `<p class='err-txt'>The input field is empty</p>`;
        setTimeout(() => {
            errorMsg[0].innerHTML = '';
        }, 3000);
        return;
    }

    shake[0].classList.add('face');
    // Fetch data
    fetch(endPoint)
        .then(data => data.json())
        .then(data => {
            shake[0].classList.remove('face');
            textbox[0].innerHTML = `<p class="front">${data.answer}</p>`;
        })
        .catch(error => {
            errorMsg[0].innerHTML = `<p>${error}</p>`;
        });

    // Clear input field
    setTimeout(() => {
        textbox[0].innerHTML = '';
        input[0].value = '';
    }, 3000);
}

function handleKeyEnter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        input.innerHTML === '';
        textbox[0].innerHTML = '';
        getAnswer();
    }
}

button[0].addEventListener('click', getAnswer);
