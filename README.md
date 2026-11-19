# FAQ Poupacred — Página de Perguntas Frequentes

Página de **Perguntas Frequentes (FAQ)** sobre o Crédito do Trabalhador e o Saque-Aniversário do FGTS, feita com **React**, **Vite** e **Tailwind CSS**.

Este é o **meu primeiro projeto de front-end para portfólio**. Peguei um problema real, um FAQ de atendimento com dezenas de perguntas, e transformei numa página organizada, responsiva e fácil de navegar.

<!-- DEPLOY -->

---

## ✨ Funcionalidades

- **Perguntas em acordeão (accordion):** clique na pergunta para abrir a resposta, e só uma fica aberta por vez.
- **Navegação por categorias:** botões no topo levam direto a cada seção (Sobre, Crédito, Taxas, Contratação, Pagamento, FGTS…).
- **Layout responsivo:** a página se adapta a celular, tablet e desktop.
- **Identidade visual própria:** cor da marca, fonte Oswald nos títulos e ícones animados.
- **Rodapé com selos** de certificação e área de contato.

## 🛠️ Tecnologias

| Tecnologia | Para quê |
| --- | --- |
| [React 19](https://react.dev/) | Construção da interface com componentes |
| [Vite](https://vite.dev/) | Ambiente de desenvolvimento e build |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização com classes utilitárias |
| [React Icons](https://react-icons.github.io/react-icons/) | Ícones (seta do acordeão) |
| [Fontsource (Oswald)](https://fontsource.org/) | Fonte dos títulos instalada via npm |
| [Oxlint](https://oxc.rs/) | Verificação de código (lint) |

## 📁 Estrutura do projeto

```
src/
├── assets/            # Logo, imagens e selos
├── components/
│   ├── Cards.jsx      # Componente Modulo: seções e perguntas em acordeão
│   ├── Filtro.jsx     # Componente Pesquisa: botões de navegação por categoria
│   └── Rodape.jsx     # Rodapé com selos
├── pages/
│   └── Faq.jsx        # Página principal + dados das perguntas
├── index.css          # Tailwind, fontes e cor da marca
└── main.jsx           # Ponto de entrada da aplicação
```

## 🚀 Como rodar o projeto

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

```bash
# Clone o repositório
git clone https://github.com/BrunoGardin/faq-frontend.git

# Entre na pasta
cd faq-frontend

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev
```

Depois é só abrir o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Outros comandos:

```bash
npm run build    # Gera a versão de produção na pasta dist/
npm run preview  # Mostra localmente a versão de produção
npm run lint     # Verifica o código com o Oxlint
```

---

## 📚 O que eu aprendi nesse projeto

### React

- **Componentização:** dividir a página em partes reutilizáveis (`Modulo`, `Pesquisa`, `Rodape`), cada uma no seu arquivo, usando `export` e `import`.
- **Props:** passar os mesmos dados (`faqData`) para mais de um componente e deixar cada um decidir como exibir.
- **Renderizar listas com `.map()`:** em vez de escrever cada pergunta à mão no HTML, guardo tudo num array de objetos e o React gera a tela. Para adicionar uma pergunta nova, basta mexer nos dados.
- **A importância da `key`:** ao renderizar listas, cada item precisa de uma chave única para o React saber o que mudou.
- **Estado com `useState`:** o acordeão guarda qual pergunta está aberta. Ao clicar de novo na mesma pergunta, o estado volta para `null` e ela fecha.
- **Chaves compostas:** como existem várias seções com várias perguntas, criei uma chave no formato `` `${index}-${questionIndex}` `` para identificar cada pergunta de forma única.
- **Renderização condicional:** troco classes e estilos com o operador ternário (`isAtivo ? ... : ...`) para abrir ou fechar a resposta e girar a seta.
- **JSX como dado:** as respostas são fragmentos JSX (`<>...</>`), o que me deixou usar negrito e quebras de linha dentro dos dados.

### Tailwind CSS

- **Classes utilitárias:** estilizar direto no JSX, sem escrever arquivos CSS enormes.
- **Responsividade com breakpoints** (`sm:`, `md:`, `lg:`) para mudar largura, grid e espaçamentos conforme a tela.
- **CSS Grid e Flexbox** para organizar os botões de categoria e o rodapé.
- **Cor personalizada no Tailwind v4** com `@theme`, criando a cor `poupa` da marca para usar como `text-poupa` ou `border-poupa`.
- **Valores arbitrários,** como sombras customizadas (`shadow-[-4px_0px_0px_rgba(...)]`).
- **Transições e animações simples** (`duration-200`, `rotate-180`) na seta do acordeão.

### Ferramentas e fluxo de trabalho

- **Criar um projeto com Vite** e entender o papel do `package.json`, dos scripts (`dev`, `build`, `preview`) e da pasta `dist/`.
- **Instalar e usar bibliotecas pelo npm,** como ícones e fontes.
- **Importar imagens** como módulos dentro dos componentes.
- **Navegação com âncoras** (`href="#id"`) para pular para cada seção sem nenhuma biblioteca extra.
- **Git e versionamento:** fiz commits a cada etapa (card → filtro → rodapé) para acompanhar a evolução do projeto.

### Além do código

- **Organizar conteúdo antes de programar:** separar as dúvidas por categorias deixou tanto o código quanto a experiência do usuário mais claros.
- **Pensar no usuário final:** o público é o trabalhador que quer respostas rápidas e confiáveis, então priorizei leitura fácil e navegação direta.

---


## 👤 Autor

Feito por **Bruno Gardin**. Este é o meu primeiro projeto de portfólio, e ainda vem muito mais por aí! 🚀

<!-- Adicione seus links: -->
<!-- [LinkedIn](https://www.linkedin.com/in/seu-perfil) · [GitHub](https://github.com/BrunoGardin) -->
