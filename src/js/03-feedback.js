import { throttle } from 'lodash';
const LOCAL_FORM_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
// console.log(formEl);

feedbackForm();

formEl.addEventListener('submit', onFormSubmit);

formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  const formData = {
    email,
    message,
  };
  email === '' || message === ''
    ? alert('Відсутні дані')
    : console.log(formData),
    e.currentTarget.reset();

  localStorage.removeItem(LOCAL_FORM_KEY);
}

function onFormInput(e) {
  let savedValues = localStorage.getItem(LOCAL_FORM_KEY);
  savedValues = savedValues ? JSON.parse(savedValues) : {};
  savedValues[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_FORM_KEY, JSON.stringify(savedValues));
}

function feedbackForm() {
  let savedValue = localStorage.getItem(LOCAL_FORM_KEY);
  if (savedValue) {
    savedValue = JSON.parse(savedValue);
    Object.entries(savedValue).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
