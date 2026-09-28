
import { initRouter } from './modules/router.js';

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
});

import { initFormValidation } from './validation.js';
import { saveFormData } from './storage.js';

// Quando a rota /formulario é carregada no DOM
const form = document.getElementById('meuFormulario');

initFormValidation(form, (formElement) => {
  // Lógica de sucesso acionada apenas quando o formulário é 100% válido
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData.entries());
  
  saveFormData(data); // Salva no localStorage via módulo storage.js
  alert('Dados cadastrados com sucesso!');
  formElement.reset();
});