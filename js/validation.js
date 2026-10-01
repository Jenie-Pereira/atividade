
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 @param {HTMLInputElement} input
 @returns {boolean}
 */
export function validateField(input) {
  const value = input.value.trim();
  let errorMessage = '';

  if (input.hasAttribute('required') && value === '') {
    errorMessage = 'Este campo é de preenchimento obrigatório.';
  } 

  else if (input.type === 'email' && value !== '' && !EMAIL_REGEX.test(value)) {
    errorMessage = 'Por favor, insira um e-mail válido (ex: usuario@dominio.com).';
  } 

  else if (input.hasAttribute('minlength') && value.length < Number(input.getAttribute('minlength'))) {
    const min = input.getAttribute('minlength');
    errorMessage = `O campo deve ter no mínimo ${min} caracteres.`;
  }

  if (errorMessage) {
    showFieldError(input, errorMessage);
    return false;
  } else {
    showFieldSuccess(input);
    return true;
  }
}

/**
 */
function showFieldError(input, message) {
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');

  let errorElement = input.parentNode.querySelector('.error-message');
  if (!errorElement) {
    errorElement = document.createElement('small');
    errorElement.className = 'error-message';
    input.parentNode.appendChild(errorElement);
  }
  errorElement.textContent = message;
}

/**
 */
function showFieldSuccess(input) {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');

  const errorElement = input.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
}

/**
 * @param {HTMLFormElement} form 
 */
export function clearValidation(form) {
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.classList.remove('is-invalid', 'is-valid');
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  });
}

/**
 * @param {HTMLFormElement} form
 * @param {Function} onSuccess
 */
export function initFormValidation(form, onSuccess) {
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea, select');

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        validateField(input);
      }
    });

    input.addEventListener('blur', () => {
      if (input.value.trim() !== '' || input.hasAttribute('required')) {
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isFormValid = true;
    inputs.forEach(input => {
      const isValid = validateField(input);
      if (!isValid) {
        isFormValid = false;
      }
    });

    if (isFormValid && typeof onSuccess === 'function') {
      onSuccess(form);
    }
  });
}