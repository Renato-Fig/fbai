import '../styles/landing-page.scss'
import React, { useState, useEffect, useRef } from 'react';

import LogoNavigation from '../assets/logo-navigation.png'
import LogoFooter from '../assets/logo-footer.png'
import USPImage from '../assets/usp-image.png'
import HeroImage from '../assets/hero-image.png'
import CAImage from '../assets/closing-argument-image.png'

import { FaYoutube } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

export function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div id='landing-page'>
            <header id='navigation'>
                <img src={LogoNavigation} alt="Enem Guru" />
                <nav className='page-navigation'>
                    <ul>
                        <li><a href="#unique-selling-proposition">O que é?</a></li>
                        <li><a href="#features">O que faz?</a></li>
                        <li><a href="#closing-argument">Por que usar?</a></li>
                        <li><a href="#call-to-action">Como usar?</a></li>
                    </ul>
                </nav>
                <div className="cta-btns">
                    <a href="https://clkdmg.site/subscribe/enem-guru" target='blank'><button className="secondary-btn">Assine por R$ 19,90</button></a>

                    <a href="https://api.whatsapp.com/send?phone=5585988686378&text=Olá%20Guru!%20Me%20passa%20umas%20dicas%20sobre%20o%20que%20eu%20devo%20estudar%20nessa%20reta%20final%20para%20o%20ENEM!%20" target='blank'><button className='primary-button'>Experimente grátis</button></a>
                </div>

                <i className='menu-burger-button' onClick={toggleMenu}><FaBars /></i>
            </header>
            {isMenuOpen ? (
                <div className="menu-burger-component" >
                    <div className="container">

                        <nav>
                            <ul className="hamburger-menu-list">
                                <li><i onClick={toggleMenu}><FaTimes /></i></li>
                                <li><a href="#unique-selling-proposition" onClick={toggleMenu}>O que é?</a></li>
                                <li><a href="#features" onClick={toggleMenu}>O que faz?</a></li>
                                <li><a href="#closing-argument" onClick={toggleMenu}>Por que usar?</a></li>
                                <li><a href="#call-to-action" onClick={toggleMenu}>Como usar?</a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=5585988686378&text=Olá%20Guru!%20Me%20passa%20umas%20dicas%20sobre%20o%20que%20eu%20devo%20estudar%20nessa%20reta%20final%20para%20o%20ENEM!%20" target='blank'><button className='primary-btn'>Experimente grátis</button></a></li>
                                <li><a href="https://clkdmg.site/subscribe/enem-guru" target='blank'><button className="secondary-btn">Assine por R$ 19,90</button></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            ) : null
            }

            <section id='hero'>
                <div className="content">
                    <h1>Seu novo assistente<br />pessoal de IA para<br /><em>a prova do Enem</em></h1>
                    <p>O Enem Guru é uma inteligência artificial treinada exclusivamente para responder a perguntas sobre o Enem, escrever resumos, fornecer questões e dar dicas de estudos, tudo diretamente no seu WhatsApp. É fácil e simples de usar.</p>
                    <div className="cta-btns">
                        <a href="https://api.whatsapp.com/send?phone=5585988686378&text=Olá%20Guru!%20Me%20passa%20umas%20dicas%20sobre%20o%20que%20eu%20devo%20estudar%20nessa%20reta%20final%20para%20o%20ENEM!%20" target='blank'><button className='primary-btn'>Experimente grátis</button></a>
                        <a href="https://clkdmg.site/subscribe/enem-guru" target='blank'><button className="secondary-btn">Assine já por R$ 19,90</button></a>
                    </div>
                </div>
                <div className="image">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vGtxMCTe5nc?si=bezWuGD3e6MM9Pnq?&autoplay=1&mute=1&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* 
                    <img src={HeroImage} alt="" />
                    */}
                </div>
            </section>

            <section id="unique-selling-proposition">
                <div className="image">
                    <img src={USPImage} alt="" />
                </div>
                <div className="content">
                    <h3>O que é?</h3>
                    <h2>Já pensou estudar para o <em>Enem no Whatsapp?</em></h2>
                    <p>Agora é possível com o Enem Guru. A preparação para o Enem nunca foi tão conveniente quanto enviar uma mensagem e receber de forma instantânea tudo o que você precisa para seus estudos.</p>
                </div>
            </section>

            <section id="features">
                <div className="content">
                    <h3>O que faz?</h3>
                    <h2>O que você pode fazer com o <em>Enem Guru</em></h2>
                    <p>Confira algumas das funcionalidades disponíveis para você.</p>
                </div>
                <div className="list">
                    <div className="item">
                        {/*<i className="icon">Icon</i>*/}
                        <h4>Resumos Instantâneos</h4>
                        <p>Enem Guru produz resumos detalhados e precisos de tópicos específicos em questão de segundos.</p>
                    </div>
                    <div className="item">
                        {/*<i className="icon">Icon</i>*/}
                        <h4>Respostas Comentadas</h4>
                        <p>Com o Enem Guru, obtenha respostas comentadas que enriquecem sua compreensão do assunto.</p>
                    </div>
                    <div className="item">
                        {/*<i className="icon">Icon</i>*/}
                        <h4>Geração de Quiz</h4>
                        <p>Enem Guru é capaz de produzir quizzes para você testar seus conhecimentos.</p>
                    </div>
                    <div className="item">
                        {/*<i className="icon">Icon</i>*/}
                        <h4>Personalidade Customizável</h4>
                        <p>Adapte o estilo da assistente para atender às suas preferências pessoais</p>
                    </div>
                </div>
            </section>

            <section id="closing-argument">
                <div className="content">
                    <h3>Por que usar?</h3>
                    <h2>Além disso, o assistente possui uma linguagem acessível e de <em>fácil compreensão</em></h2>
                    <p>Isso significa que, independentemente do seu nível de conhecimento, você poderá aprender de forma eficaz, sem complicações.</p>
                </div>
                <div className="image">
                    <img src={CAImage} alt="" />
                </div>
            </section>

            <section id='call-to-action'>
                <div className="content">
                    <h3>Como usar?</h3>
                    <h2>Descubra a facilidade de usar o Enem Guru para sua preparação do Enem</h2>
                    <p>Inicie a conversa agora mesmo com o nosso assistente de IA e potencialize sua preparação para o Enem. O futuro do seu sucesso acadêmico está a apenas uma mensagem de distância.</p>
                    <div className="cta-btns">
                        <a href="https://api.whatsapp.com/send?phone=5585988686378&text=Olá%20Guru!%20Me%20passa%20umas%20dicas%20sobre%20o%20que%20eu%20devo%20estudar%20nessa%20reta%20final%20para%20o%20ENEM!%20" target='blank'><button className="primary-btn">Experimente grátis</button></a>
                        <a href="https://clkdmg.site/subscribe/enem-guru" target='blank'><button className="secondary-btn">Assine já por R$ 19,90</button></a>
                        {/*<button className="secondary-btn">Entre em contato</button>*/}
                    </div>
                </div>
                <div className="image">

                </div>
            </section>

            <footer id='footer'>
                <div className="institutional">
                    <img src={LogoFooter} alt="FB" />
                    <nav className='institutional-links'>
                        <ul>
                            <li><a href="#">Termos e condições</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="divisor"></div>
                <div className="copy-and-social">
                    <p>Copyright &copy; 2023. NeoCode Solutions </p>
                    <nav className="social">
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/neocodesolutions/" target='_blank'>
                                    <FaInstagram />
                                </a>
                            </li>
                            {/**<li>
                                <a href="#" target='_blank'>
                                    <FaFacebookF />
                                </a>
                            </li>*/}
                            <li>
                                <a href="https://www.linkedin.com/company/neo-code-solutions/" target='_blank'>
                                    <FaLinkedinIn />
                                </a>
                            </li>{/* 
                            <li>
                                <a href="#" target='_blank'>
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    <FaYoutube />
                                </a>
                            </li>*/}
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}