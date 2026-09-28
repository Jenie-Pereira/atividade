import {renderFormulario, renderHome, renderNotFound} from './templates.js';

const routes ={
    '/': renderHome,
    '/formulario': renderFormulario
}
;

const appContainer = document.getElementByid('app');

export function navgateTo(url) {
    window.history.pushState(null, null, url);
    renderRoute(url);
}

function renderRoute(path) {
    const viewFunction = routes[path] || renderNotFound;
    appContainer.innerHTML = viewFunction();
    onRouteLoaded(path);
}

function onRouteLoaded(path) {
    if (path === '/formulario'){
        console.log('Formulário carregado no DOM. Pronto para adicionar validações.')
    }  
}

export function initRouter() {
  document.body.addEventListener('click', (event) => {
    if (event.target.matches('[data-link]')) {
      event.preventDefault();

      const path = event.target.getAttribute('href');
      navigateTo(path);
    }
  });
  window.addEventListener('popstate', () => {
    renderRoute(window.location.pathname);
  });
  renderRoute(window.location.pathname);
}

