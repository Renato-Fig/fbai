import '../styles/landing-page.scss'
import { useState } from 'react'

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

export function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <div id='landing-page'>
            <header id='navigation'>
                <img src={LogoNavigation} alt="FB" />
                <nav className='page-navigation'>
                    <ul>
                        <li><a href="#unique-selling-proposition">O que é?</a></li>
                        <li><a href="#features">O que faz?</a></li>
                        <li><a href="#closing-argument">Por que usar?</a></li>
                        <li><a href="#call-to-action">Como usar?</a></li>
                    </ul>
                </nav>
                <button className='primary-button'>Experimente agora</button>

                <i className='menu-burger-button' onClick={toggleMenu}><FaBars /></i>


            </header>
            {isMenuOpen ? (
                <div className="menu-burger-component">
                    <div className="container">

                        <nav>
                            <ul className="hamburger-menu-list">
                                <li><a href="#unique-selling-proposition">O que é?</a></li>
                                <li><a href="#features">O que faz?</a></li>
                                <li><a href="#closing-argument">Por que usar?</a></li>
                                <li><a href="#call-to-action">Como usar?</a></li>
                                <li><button className='primary-btn'>Experimente agora</button></li>

                            </ul>
                        </nav>
                    </div>
                </div>
            ) : null
            }

            <section id='hero'>
                <div className="content">
                    <h1>Sua nova assistente<br />pessoal de IA para<br /><em>a prova do Enem</em></h1>
                    <p>A FBAI é uma inteligência artificial treinada exclusivamente para responder a perguntas sobre o Enem, escrever resumos, fornecer questões e dar dicas de estudos, tudo diretamente no seu WhatsApp. É fácil e simples de usar.</p>
                    <button>Experimente agora</button>
                </div>
                <div className="image">
                    <img src={HeroImage} alt="" />
                </div>
            </section>

            <section id="unique-selling-proposition">
                <div className="image">
                    <img src={USPImage} alt="" />
                </div>
                <div className="content">
                    <h3>O que é?</h3>
                    <h2>Já pensou estudar para o <em>Enem no Whatsapp?</em></h2>
                    <p>Agora é possível com A FBAI. A preparação para o Enem nunca foi tão conveniente quanto enviar uma mensagem e receber de forma instantânea tudo o que você precisa para seus estudos.</p>
                </div>
            </section>

            <section id="features">
                <div className="content">
                    <h3>O que faz?</h3>
                    <h2>O que você pode fazer com a <em>FBAI</em></h2>
                    <p>Confira algumas das funcionalidades disponíveis para você.</p>
                </div>
                <div className="list">
                    <div className="item">
                        {/*<i className="icon">Icon</i>*/}
                        <h4>Resumos Instantâneos</h4>
                        <p>FBAI produz resumos detalhados e precisos de tópicos específicos em questão de segundos.</p>
                    </div>
                    <div className="item">
                        {/*<i className="icon">Icon</i>*/}
                        <h4>Respostas Comentadas</h4>
                        <p>Com a FBAI, obtenha respostas comentadas que enriquecem sua compreensão do assunto.</p>
                    </div>
                    <div className="item">
                        {/*<i className="icon">Icon</i>*/}
                        <h4>Geração de Quiz</h4>
                        <p>FBAI é capaz de produzir quizzes para você testar seus conhecimentos.</p>
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
                    <h2>Além disso, a assistente possui uma linguagem acessível e de <em>fácil compreensão</em></h2>
                    <p>Isso significa que, independentemente do seu nível de conhecimento, você poderá aprender de forma eficaz, sem complicações.</p>
                </div>
                <div className="image">
                    <img src={CAImage} alt="" />
                </div>
            </section>

            <section id='call-to-action'>
                <div className="content">
                    <h3>Como usar?</h3>
                    <h2>Descubra a facilidade de usar a FBAI para sua preparação do Enem</h2>
                    <p>Inicie a conversa agora mesmo com a nossa assistente de IA e potencialize sua preparação para o Enem. O futuro do seu sucesso acadêmico está a apenas uma mensagem de distância.</p>
                    <div className="cta-btns">
                        <button className="primary-btn">Experimente agora</button>
                        <button className="secondary-btn">Entre em contato</button>
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
                    <p>Copyright &copy; 2023 Sistema Farias Brito </p>
                    <nav className="social">
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/fariasbrito" target='_blank'>
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}