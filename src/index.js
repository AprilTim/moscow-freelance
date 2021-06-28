import './style.scss';

const header = document.querySelector('header');

document.addEventListener("scroll", () => {
if (window.pageYOffset > 126) {
  header.classList.add('active');
} else {
  header.classList.remove('active');
}
})

/*const validObj = {};

const formRegister = document.querySelector('.form-register');
const inputs = formRegister.querySelectorAll('input');
const btnRegisterSubmit = formRegister.querySelector('button');

formRegister.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Регистрация успешна!")
});*/

/*const validationSchema = {
  name: {
    min: 2,
    max: 20,
  },
  email: {
    regular: /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm
  },
  inn: {
    min: 12,
    max: 12,
    regular: /^[0-9]$/
  },
  site: {
    regular: /(\.)[a-z]{1,4}$/
  },
  solution: {
    min: 2,
    max: 20,
  },
  description: {
    min: 2,
    max: 20,
  }
}

btnRegisterSubmit.addEventListener('click', () => {



  inputs.forEach(input => {
    console.log(input.name, input.value)
    if (!validationSchema[input.name]?.regular?.test(input.value) && input.value.length < 1) {
      validObj[input.name] = false;
    } else {
      delete validObj[input.name]
    }
  })

  console.log(validObj)
})*/


