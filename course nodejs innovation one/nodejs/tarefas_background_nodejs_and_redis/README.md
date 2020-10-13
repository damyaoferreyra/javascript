Sistema de cadastro e com envio de e-mail de confirmação em background utilizando Node.js. Prática de processos assíncronos de tarefas com Node.js e Redis.

Utilizamos o Docker para disponibilizar o Redis.

Install Redis Docker.

sudo docker pull redis
sudo docker run --name redis -p 6379:6379 -d -t redis:alpine
