# Guia para iniciantes sobre Node.js Streams - Pré #SemanaJSExpert

Arquivo Server.js
criamos um function que e um generator que entrega dados sob demanda

leu os dados sob demanda de dentro do generator e passamos para o push(null) conforme terminou o processo

Arquivo Client.js
consumimos os dados com o axios

e conforme os dados foram chegando foi consumido linha a linha

então usamos o transforme para mapearmos e processarmos conforme desejo

e com whritable enviamos finalizado
