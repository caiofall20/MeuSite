---
title: Porque usar Docker?
description: >-
  Conheça um pouco mais sobre essa plataforma que vem ajudando no dia a dia dos
  desenvolvedores.
date: '2020-05-28 03:54:23'
thumbnail: /assets/img/mountains.jpg
category: docker
background: '#00BFFF'
---
<<<<<<< HEAD
<<<<<<< HEAD
Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, [bibendum](http://google.com) eu pulvinar vel, sodales vitae dui.

Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

```jsx
import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"
import * as S from "./styled"
const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)
export default Sidebar
```

Fusce a metus eu diam varius congue nec nec sapien. Vestibulum orci tortor, sollicitudin ac euismod non, placerat ac augue. Nunc convallis accumsan justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec malesuada vehicula lectus, viverra sodales ipsum gravida nec.

> Proin ornare ligula eu tellus tempus elementum. Aenean bibendum iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Ut vel arcu ac tortor adipiscing hendrerit vel sed massa. Fusce sem libero, lacinia vulputate interdum non, porttitor non quam. Aliquam sed felis ligula. Duis non nulla magna.
Nullam eros mi, mollis in sollicitudin non, tincidunt sed enim. Sed et felis metus, rhoncus ornare nibh. Ut at magna leo. Suspendisse egestas est ac dolor imperdiet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, erat sit amet venenatis luctus, augue libero ultrices quam, ut congue nisi risus eu purus. Cras semper consectetur elementum.
### Cras semper consectetur elementum
Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.
Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, bibendum eu pulvinar vel, sodales vitae dui. Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.
=======
**O que é Docker?**

- - -
=======
\*\*O que é Docker?\*\*

\- - -
>>>>>>> master

O Docker é nada mais que uma plataforma aberta para criação, execução e publicação (deploy) de containers. Um Container é a forma de empacotar sua aplicação e suas dependências (bibliotecas) de forma padronizada. 

Podemos dizer que as palavras chaves para o Docker são: construir, entregar e rodar em qualquer ambiente (develop, ship and run anywhere).

<<<<<<< HEAD
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
=======
\*\*Quais são os benefícios do Docker?\*\*

\* Ele reduz tempo de build e deploy.\* Ele oferece uma maneira segura de rodar aplicações isoladas em containers, empacotadas com todas as suas dependências e bibliotecas.\* É permitido rodar vários containers simultaneamente em qualquer host.\* Uma aplicação dockerizada pode ser transportada e executada em qualquer plataforma sem nenhuma modificação.

\*\*Abaixo, alguns dos principais conceitos sobre Docker:\*\*

\* Imagem - São tecnologias que podemos colocar dentro de containers dentro do Docker, como por exemplo: postgres, mongodb, mysql.\* Containers - É uma instância de uma imagem, por exemplo, podemos ter 3 bancos de dados rodando com a mesma imagem do postgres.\* Docker Registry ( Docker Hub) - É o servidor onde nós achamos as imagens do Docker.\* Dockerfile - Receita para montar a imagem.

\*\*Como instalar o Docker?\*\*
>>>>>>> master

Se o seu sistema operacional for linux, Ubuntu, por exemplo, você deve seguir os seguintes passos:

1. Abra o terminal com o atalho Ctrl + Alt + T. Baixe as últimas atualizações do sistema.

<<<<<<< HEAD
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
>>>>>>> parent of fbbf9a6... Update Posts “2018-02-02-what-makes-a-man”
=======
\`$ sudo apt update && sudo apt upgrade\`

\*\*2. Instale utilizando o repositório do Ubuntu\*\* 

\- - -

\`$ sudo apt install docker.io\`

\*\*3. Inicie o Docker\*\*

\- - -

\`$ sudo systemctl start docker\`

\*\*4. Entretanto, garanta que ele seja iniciado após a reinicialização\*\*

\- - -

\`$ sudo systemctl enable docker\`

\*\*5. Caso queira verificar a versão instalada\*\*

\`$ docker -v\`
>>>>>>> master
