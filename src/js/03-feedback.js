import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


const storageKey = 'feedback-form-state';


const saveFormState = () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
};


const handleInputChange = throttle(saveFormState, 500);


emailInput.addEventListener('input', handleInputChange);
messageInput.addEventListener('input', handleInputChange);


const loadFormState = () => {
  const stateJSON = localStorage.getItem(storageKey);
  if (stateJSON) {
    const state = JSON.parse(stateJSON);
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};


window.addEventListener('load', loadFormState);

form.addEventListener('submit', (event) => {
  event.preventDefault();

 
  const state = {
    email: emailInput.value,
    message: messageInput.value
  };

  
  emailInput.value = '';
  messageInput.value = '';

 
  localStorage.removeItem(storageKey);


  console.log(state);
});