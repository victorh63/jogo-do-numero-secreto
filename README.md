# 🎯 Jogo do Número Secreto

Um jogo divertido feito em **JavaScript**, com **geração aleatória de números** e **narrativa por voz**. A ideia é adivinhar o número secreto gerado aleatoriamente pelo `Math.random()`, com feedback sonoro via **ResponsiveVoice**.

---

## 🧩 Recursos Principais

- 🎲 **Número aleatório**: o jogo gera um número secreto com base em um índice, usando `Math.random()`.
- 🗣️ **Leitura por voz**: com o plugin **ResponsiveVoice**, o jogo anuncia mensagens como dicas ou vitória.
- ✅ **Validação de input**: o jogo verifica se o usuário inseriu um número válido e informa se é necessário tentar novamente.
- 🔁 **Reinício**: após acertar, o usuário pode recomeçar com um novo número e voz animada.
- 🖥️ **Interface simples e responsiva**: construída com HTML e CSS, com design leve e agradável.

---

## 🚀 Como Jogar

1. Abra o `index.html` no navegador.
2. Observe que um número secreto é gerado automaticamente.
3. Digite seu palpite no campo disponível e clique em **"Chutar"**.
4. Ouça a resposta por voz saber se:
   - O chute está **errado** (o jogo diz se é maior ou menor).
   - O chute está **certo**, parabeniza e oferece para jogar de novo.
5. Para reiniciar, clique no botão **"Novo Jogo"** após acertar.

---

## 🛠️ Tecnologias Usadas

- **JavaScript (ES6+)** – lógica de jogo, geração aleatória, validação e manipulação do DOM.
- **ResponsiveVoice.js** – plugin para transformar texto em áudio.
- **HTML5 e CSS3** – interface do usuário, responsiva e visualmente limpa.

---

## 📂 Estrutura do Projeto
├─ index.html ← Estrutura do jogo<br>
├─ style.css ← Estilo básico e responsivo<br>
└─ app.js ← Lógica do jogo e integração com voz<br>

## 🙋 Autor

Victor H.  
Criação pessoal com foco em praticar **JS básico**, manipulação do DOM e **tecnologia de voz em navegadores** com `ResponsiveVoice`.

---

Divirta-se adivinhando! 😄
