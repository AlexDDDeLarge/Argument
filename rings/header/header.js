var button = document.querySelector('.header__btn');
var count = 0;
var buttonCounter = document.querySelector('.like-counter');

button.addEventListener('click', () => {
    if(button.classList.contains('liked')) {
        button.classList.remove('liked');
        count -= 1;
    }
    else {
        count += 1;
        button.classList.add('liked');
    }
    buttonCounter.textContent = count.toString(10);
});
