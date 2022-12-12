const btnAll = document.querySelectorAll('.btn');
const inputDisplay = document.querySelector('#inputDisplay');
const hiddenInput = document.querySelector('#hiddenInput');
const submitBtn = document.querySelector('#submitBtn');

btnAll.forEach((el, i) => {
    const number = i + 1;
    el.setAttribute('id', 'btn' + number)
    // el.children[1].innerText -> Gets text input inside div, like "ABC" for each button. i + 1 is the number of the btn
    el.addEventListener('click', () => {
        if (inputDisplay.innerText.length > 30) {
            alert('Max characters: 30')
            return
        }
        if (el.id === 'btn10') {
            inputDisplay.innerText += '0';
            hiddenInput.value += '0';
        } else {
            inputDisplay.innerText += number;
            hiddenInput.value += number;
        }
    })
})

submitBtn.addEventListener('click', async () => {
    const userInput = inputDisplay.innerText;
    try {
        const f = await fetch('/submitInput', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: userInput,
            })
        })
        const data = await f.json()
        if (data.message === 'ok') {
            console.log(data)
        }
    } catch (err) {
        console.error(err)
    }
})


 