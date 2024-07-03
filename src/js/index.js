// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

const passwordElement = document.getElementById('password');
const inputElement = document.getElementById('input');
const passwordLengthElement = document.getElementById('characters');
const buttonElement = document.getElementById('button');

const lengthValue = event => {
  passwordLengthElement.textContent = passwordGeneratorElement.value;
};
inputElement.addEventListener('input', lengthValue);

const randomPassword = () => {
  let newPassword = '';
  for (let i = 0; i < inputElement.value; i++) {
    newPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return newPassword;
};

const createButton = () => {
  passwordElement.value = randomPassword();
};

buttonElement.addEventListener('click', createButton);
