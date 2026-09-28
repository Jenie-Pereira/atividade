Single Page Application (SPA) — Gerenciador Interativo Web
Aplicação web dinâmica desenvolvida no modelo Single Page Application (SPA) utilizando JavaScript Nativo (Vanilla JS) modularizado com ES6 Modules. O sistema proporciona uma navegação fluida sem recarregamento de página, renderização dinâmica de componentes via Template Literals, validação de formulários em tempo real com feedback visual e persistência de dados local via localStorage.

🚀 Sobre o Projeto
O objetivo principal desta aplicação é transformar uma interface estática em uma plataforma interativa de alta performance e manutenibilidade. O projeto adota princípios de arquitetura limpa, como a Separação de Conceitos (Separation of Concerns) e o Princípio da Responsabilidade Única (Single Responsibility Principle), isolando responsabilidades em módulos autossuficientes.

Principais Destaques
Navegação SPA sem Refresh: Controle total de rotas com History API (pushState e popstate) e delegação de eventos.

Templates Dinâmicos: Renderização declarativa de componentes alimentados por dados em memória ou armazenamento local.

Validação Preventiva de Formulários: Checagem de dados em tempo real (input/blur) e no envio (submit), com injeção de mensagens contextuais no DOM e integração com a biblioteca SweetAlert2.

Persistência de Dados: Armazenamento resiliente de dados via localStorage com tratamento defensivo de exceções (try...catch).

Segurança: Sanitização de entradas para prevenção de vulnerabilidades Cross-Site Scripting (XSS).
