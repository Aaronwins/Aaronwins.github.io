
let btnClear = document.querySelector('button'); //query selector button
let inputs = document.querySelectorAll('input'); //selects all input and on the click changes it to empty
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});