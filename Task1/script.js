const [mainElement] = document.getElementsByClassName('main');
const [formElement] = document.getElementsByClassName('form');
const formFields = document.querySelectorAll('.form__field > input');
const errorElements = document.querySelectorAll('.form__field > div');
const [div] = document.getElementsByClassName('div');
const [lightButtonElement, darkButtonElement] = document.getElementsByClassName('theme-buttom');

const [nameElement, passwordElement] = formFields;
const [nameErrorElement, passwordErrorElement] = errorElements;

const ERRORS = {
    REQUIRED: 'Should not be empty',
}

function clickHandler(){
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const password = document.getElementById('password').value;
  
      let isValid = true;
  
      formFields.forEach(e => e.classList.remove('form__field_error'));
      errorElements.forEach(e => e.innerHTML = '');
    
      const user = {
        password : password,
        name : name,
      };
    
      let json = JSON.stringify(user);
   
      if (!requiredValidator(nameElement.value)) {
          nameElement.classList.add('form__field_error');
          nameErrorElement.innerHTML = ERRORS.REQUIRED;
          isValid = false;
      }
  
      if (!requiredValidator(passwordElement.value)) {
          passwordElement.classList.add('form__field_error');
          passwordErrorElement.innerHTML = ERRORS.REQUIRED;
          isValid = false;
      }
  
      if (isValid) {
        localStorage.setItem(user, json)

        state = div.style.display;
        if (state == ''){
          div.style.display='none';
        }else div.style.display='';

        message.innerHTML = `Welcome, ${name}`
      }
    });
  
}

function changeTheme(){
  lightButtonElement.addEventListener('click', () => {
    mainElement.classList.remove('main_dark');
    mainElement.classList.add('main_light'); 
  });

  darkButtonElement.addEventListener('click', () => {
      mainElement.classList.remove('main_light');
      mainElement.classList.add('main_dark'); 
  });
}

function requiredValidator(value) {
    return Boolean(value.trim());
}

clickHandler()