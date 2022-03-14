# Guia para iniciantes sobre Node.js Streams - Pré #SemanaJSExpert

- Arquivo Server.js

  - [x] criamos um function que e um generator que entrega dados sob demanda
  - [x] leu os dados sob demanda de dentro do generator e passamos para o push(null) conforme terminou o processo

- Arquivo Client.js

  - [x] consumimos os dados com o axios
  - [x] e conforme os dados foram chegando foi consumido linha a linha
  - [x] então usamos o transforme para mapearmos e processarmos conforme desejo
  - [x] e com whritable enviamos finalizado
