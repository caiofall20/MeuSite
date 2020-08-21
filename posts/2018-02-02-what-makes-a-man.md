---
title: O que é Docker?
description: >-
  Você precisa conhecer essa ferramenta que ajuda muito no dia a dia de um
  desenvolvedor.
date: '2020-04-30 02:54:23'
image: /assets/img/docker.png
category: docker
background: '#00BFFF'
---
**O que é Docker?**

![containers](/assets/img/container.jpg "containers")

O Docker é nada mais que uma plataforma aberta para criação, execução e publicação (deploy) de containers. 

Um Container é a forma de empacotar sua aplicação e suas dependências (bibliotecas) de forma padronizada. 
Podemos dizer que as palavras chaves para o Docker são: construir, entregar e rodar em qualquer ambiente (develop, ship and run anywhere).

**Quais são os benefícios do Docker?**

* Ele reduz tempo de build e deploy. _Ele oferece uma maneira segura de rodar aplicações isoladas em containers, empacotadas com todas as suas dependências e bibliotecas._ É permitido rodar vários containers simultaneamente em qualquer host.
* Uma aplicação dockerizada pode ser transportada e executada em qualquer plataforma sem nenhuma modificação.

**Abaixo, alguns dos principais conceitos sobre Docker:**

* Imagem - São tecnologias que podemos colocar dentro de containers dentro do Docker, como por exemplo: postgres, mongodb, mysql. _Containers - É uma instância de uma imagem, por exemplo, podemos ter 3 bancos de dados rodando com a mesma imagem do postgres._ 
* Docker Registry ( Docker Hub) - É o servidor onde nós achamos as imagens do Docker.
* Dockerfile - Receita para montar a imagem.

**Como instalar o Docker?**

Se o seu sistema operacional for linux, Ubuntu, por exemplo, você deve seguir os seguintes passos:

**1. Abra o terminal com o atalho Ctrl + Alt + T. Baixe as últimas atualizações do sistema.**
`$ sudo apt update && sudo apt upgrade`

**2. Instale utilizando o repositório do Ubuntu**

`$ sudo apt install docker.io`

**3. Inicie o Docker**

`$ sudo systemctl start docker`

**4. Entretanto, garanta que ele seja iniciado após a reinicialização**

`$ sudo systemctl enable docker`

**5. Caso queira verificar a versão instalada**

`$ docker -v`

Bom pessoal, o Docker é uma ferramenta bem completa e que está cada vez mais sendo usadas nos times de desenvolvimento, se você deseja ir a fundo nessa ferramenta você pode dá uma olhada da documentação do Docker: <https://docs.docker.com/> e também tem uma apostila muito boa do Daniel Barreto disponível da Casa do Código.
