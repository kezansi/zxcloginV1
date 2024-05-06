
function createHearts() {
    const heartCount = 10;
    const container = document.querySelector('.wrap-login100');
    const button = document.querySelector('.login100-form-btn');

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = getRandomInt(container.offsetWidth) + 'px';
        heart.style.top = getRandomInt(container.offsetHeight) + 'px';
        container.appendChild(heart);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
