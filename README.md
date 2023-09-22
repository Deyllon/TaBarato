# API REST usando nestjs

## Essa é uma API REST e também um websocket para um forum de troca de informações sobre computadores

Para rodar o projeto você pode usar o comando npm run start
e fazer suas requisições para a API no localhost:3000
ou entrando na documentação do swager: localhost:3000/api

## Web Socket

Ainda foi implementado um socket para comunicação em tempo real os eventos são:

receive_message -> escuta todas as mensagens enviadas

send_message -> envia mensagem para todos os usuarios ou para apenas 1

get_all_messages -> pega todas as mensagens enviadas pelos usuarios

receive_all_messages -> escuta todas as mensagens enviadas

get_message_from_user -> pega todas as mensagens enviadas pro seu usuario usuaario

receive_message_usuario -> recebe as mensagens para o seu usuario

## DTO CHAT

{
  "conteudo": "escreva a mensagem",
  "destinatarioEmail: "email destinatario"
}

lembrando que  destinatarioEmail é opcional.