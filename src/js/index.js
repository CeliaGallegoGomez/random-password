// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

const passwordElement = document.getElementById('password');
const rangeElement = document.getElementById('range');
const textLengthElement = document.getElementById('characters');
const buttonElement = document.getElementById('button--password');

const lengthValue = event => {
  textLengthElement.textContent = passwordGeneratorElement.value;
};
rangeElement.addEventListener('range', lengthValue);

const randomPassword = () => {
  let newPassword = '';
  for (let i = 0; i < rangeElement.value; i++) {
    newPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return newPassword;
};

const createButton = () => {
  passwordElement.value = randomPassword();
};

buttonElement.addEventListener('click', createButton);
