---
title: Porque usar Docker?
description: >-
  Conheça um pouco mais sobre essa plataforma que vem ajudando no dia a dia dos
  desenvolvedores.
date: '2020-05-28 03:54:23'
thumbnail: /assets/img/docker.png
category: docker
background: '#00BFFF'
---
**O que é Docker?**

- - -

![containers.](/assets/img/container.jpg)

O Docker é nada mais que uma plataforma aberta para criação, execução e publicação (deploy) de containers. Um Container é a forma de empacotar sua aplicação e suas dependências (bibliotecas) de forma padronizada. 

Podemos dizer que as palavras chaves para o Docker são: construir, entregar e rodar em qualquer ambiente (develop, ship and run anywhere).

**Quais são os benefícios do Docker?**

* Ele reduz tempo de build e deploy.
* Ele oferece uma maneira segura de rodar aplicações isoladas em containers, empacotadas com todas as suas dependências e bibliotecas.
* É permitido rodar vários containers simultaneamente em qualquer host.
* Uma aplicação dockerizada pode ser transportada e executada em qualquer plataforma sem nenhuma modificação.

**Abaixo, alguns dos principais conceitos sobre Docker:**

* Imagem - São tecnologias que podemos colocar dentro de containers dentro do Docker, como por exemplo: postgres, mongodb, mysql.
* Containers - É uma instância de uma imagem, por exemplo, podemos ter 3 bancos de dados rodando com a mesma imagem do postgres.
* Docker Registry ( Docker Hub) - É o servidor onde nós achamos as imagens do Docker.
* Dockerfile - Receita para montar a imagem.

**Como instalar o Docker?**

Se o seu sistema operacional for linux, Ubuntu, por exemplo, você deve seguir os seguintes passos:

1. Abra o terminal com o atalho Ctrl + Alt + T. Baixe as últimas atualizações do sistema.

`$ sudo apt update && sudo apt upgrade`

**2. Instale utilizando o repositório do Ubuntu** 

- - -

`$ sudo apt install docker.io`

**3. Inicie o Docker**

- - -

`$ sudo systemctl start docker`

**4. Entretanto, garanta que ele seja iniciado após a reinicialização**

- - -

`$ sudo systemctl enable docker`

**5. Caso queira verificar a versão instalada**

`$ docker -v`
