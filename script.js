const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const closeIcon = document.querySelector('.close-icon');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnLoginPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

closeIcon.addEventListener('click', () => {
    alert(1111)
    wrapper.classList.remove('active-popup');
});