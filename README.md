<h1 align="center">Planej.ai — Educador Financeiro com IA</h1> <p align="center"> Aplicação web de planejamento financeiro pessoal que utiliza Inteligência Artificial para gerar diagnósticos, sugestões e um plano de ação personalizado com base nos dados do usuário. </p> <p align="center"> <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-implementações">Implementações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-aprendizados">Aprendizados</a> </p> <br> <p align="center"> <img alt="Preview 1 do site" src="./public/previews/preview-1.png" width="100%"> <img alt="Preview 2 do site" src="./public/previews/preview-2.png" width="100%"> <img alt="Preview 3 do site" src="./public/previews/preview-3.png" width="100%"> </p> <p align="center"> 🔗 Acesse o projeto em produção: <a href="https://planejandoai.vercel.app/">planejandoai.vercel.app</a> </p>
🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

TypeScript
React 19
React Router
Tailwind CSS (v4) + tailwind-merge
Lucide React (ícones)
React Loading Skeleton
Google Gemini API (IA generativa)
Git e GitHub
Vercel (deploy)
💻 Projeto

O Planej.ai ajuda o usuário a organizar suas finanças pessoais em direção a uma meta específica — como uma viagem, a compra de um bem ou qualquer outro objetivo financeiro.

O fluxo funciona da seguinte forma:

O usuário preenche um formulário informando sua renda mensal, custos fixos, dívidas/parcelas, e detalhes da sua meta financeira (nome, valor e prazo desejado).
Com base nesses dados, a aplicação calcula a economia mensal necessária para atingir o objetivo dentro do prazo.
Um educador financeiro baseado em IA analisa o cenário e gera um diagnóstico personalizado, com:
Diagnóstico geral da situação financeira
Viabilidade da meta dentro do prazo definido
Ideias de renda extra
Sugestões de investimento
Mensagem de motivação
O usuário pode conversar diretamente com a IA para tirar dúvidas específicas sobre o planejamento gerado (veja mais em Implementações).

Toda a aplicação roda inteiramente no navegador: não há backend próprio nem banco de dados remoto. Os dados de cada simulação e as conversas com a IA são persistidos localmente via localStorage, e as análises são geradas em tempo real através da API do Google Gemini.

⚙️ Como executar localmente

bash

# Clone o repositório

git clone https://github.com/seu-usuario/planejamento-ai.git

# Acesse a pasta do projeto

cd planejamento-ai

# Instale as dependências

npm install

# Crie um arquivo .env na raiz do projeto com sua chave da API do Gemini

echo "VITE_GEMINI_API_KEY=sua_chave_aqui" > .env

# Rode o projeto em ambiente de desenvolvimento

npm run dev

⚠️ É necessário ter uma chave de API válida do Google AI Studio para que a geração de insights e o chat com a IA funcionem.

Build de produção
bash
npm run build

Os arquivos gerados na pasta dist/ podem ser hospedados em qualquer serviço de arquivos estáticos.

✨ Implementações
Simulação financeira personalizada

O usuário informa seus dados financeiros e sua meta através de um formulário em etapas (multi-step form), e a aplicação calcula automaticamente a economia mensal necessária para atingir o objetivo dentro do prazo estabelecido.

Diagnóstico gerado por IA

Com base nos dados da simulação, a API do Google Gemini gera um diagnóstico completo — incluindo viabilidade da meta, sugestões de investimento, ideias de renda extra e uma mensagem de motivação personalizada.

Conversando com o Educador Financeiro (Chatbot com IA)

Permite que o usuário tire dúvidas adicionais diretamente relacionadas à sua simulação, conversando em formato de chat com um educador financeiro simulado por IA. O contexto da simulação é enviado junto de cada pergunta, garantindo respostas coerentes com o cenário do usuário.

As conversas são salvas automaticamente no localStorage, associadas ao ID de cada simulação — permitindo que o histórico seja consultado novamente mesmo após atualizar a página.

Persistência local de dados

Todas as simulações realizadas (e suas respectivas conversas) ficam salvas no localStorage do navegador, permitindo consultar resultados anteriores sem a necessidade de um banco de dados externo.

📚 Aprendizados

Durante o desenvolvimento desse projeto, pude praticar e aprofundar diversos conceitos, entre eles:

Uso avançado de Hooks do React (useState, useEffect, useRef, hooks customizados)
Integração de aplicações front-end com APIs de Inteligência Artificial
Construção de um chatbot funcional, incluindo formatação de prompts, tratamento de estado assíncrono e feedback de carregamento
Estratégias de persistência de dados no cliente usando localStorage, sem depender de backend
Boas práticas de organização de componentes, hooks e tipagem em um projeto TypeScript + React

<p align="center">Feito por Gabriel Pinheiro</p>
