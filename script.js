let modeBtn = document.querySelector('#mode');
let body = document.querySelector('body');
let currentMode = 'light';

modeBtn.addEventListener('click', () => {
    if (currentMode === 'light') {
        currentMode = 'dark';

        body.classList.add('dark');
        body.classList.remove('light');

   
    } else {
        currentMode = 'light';

        body.classList.add('light');
        body.classList.remove('dark');
    }

    console.log(currentMode);
})