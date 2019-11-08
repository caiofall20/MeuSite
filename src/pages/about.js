import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Caio Mateus Oliveira Martins de Sousa, nasci em Recipe/PE e
        atualmente sou  Developer no {' '}
        <a href="http://gcti.parnamirim.rn.gov.br/" target="_blank" rel="noopener noreferrer">
          GCTI
        </a>
      </p>

      <p>
        Cursei Tecnologia em <strong>Sistemas para Internet</strong> no IFRN no
        ano de 2014, Atualmente estou cursando <strong>Ciência da Computação</strong>. Estudar tecnologia é algo que 
        realmente me deixa bastante entusiasmado porque sempre gostei de jogos e aparelhos eletrônicos desde criança e 
        acredito que com a tecnologia serão solucionados muitos problemas que temos no mundo.
      </p>

      <p>
      
      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML e Template Languages</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>CSS (Stylus, Sass, Less, PostCSS)</li>
        <li>Css Frameworks (Bootstrap, Materialize)</li>
        <li>Javascript (Design Patterns, ES6/7)</li>
        <li>Angular</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>Automatizadores (Grunt, Gulp, Webpack, Parcel)</li>
        <li>Rest</li>
        <li>Git</li>
        <li>Python</li>
        <li>Django</li>
        <li>MySQL - MongoDB - postgresql</li>
        <li>Scrum</li>
      </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage