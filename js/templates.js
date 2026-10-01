export function renderHome() {
  return `
    <section class="home-page">
      <h1>Página Inicial</h1>
      <p>Bem-vindo à aplicação SPA!</p>
    </section>
  `;
}

export function renderFormulario(){
    return `
    <section class="form-page">
      <h1>Cadastro</h1>
      <form id="meuFormulario">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
        
        <button type="submit">Enviar</button>
      </form>
    </section>
  `;
}

export function renderNotFound() {
  return `
    <section class="not-found">
      <h1>404</h1>
      <p>Página não encontrada.</p>
    </section>
  `;
}

export function renderListaItens(dados) {
  const container = document.getElementById('app');
  const cartoesHTML = dados.map(item => `
    <article class="card">
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    </article>
  `).join('');
  container.innerHTML = `
    <section class="listagem">
      <h2>Itens Cadastrados</h2>
      <div class="grid-cards">
        ${cartoesHTML}
      </div>
    </section>
  `;
}