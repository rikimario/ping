let emailText = document.getElementById('emailText');
let textWrongEmail = document.querySelector('.emailTitleCaution');
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g

let notifyBtn = document.getElementById('notify');
notifyBtn.addEventListener('click', () => {
  let emailValue = emailText.value;

  if (emailValue === '') {
    return;
  }

  if (!emailRegex.test(emailValue)) {
    emailText.classList.add('Caution'); // Add 'Caution' class to the input
    textWrongEmail.classList.add('Active');
    emailText.classList.add('emailWrong');
  } else {
    emailText.classList.remove('Caution'); // Remove 'Caution' class from the input
    textWrongEmail.classList.remove('Active');
    window.open('https://github.com/rikimario', '_blank');
  }

  emailText.value = '';
});