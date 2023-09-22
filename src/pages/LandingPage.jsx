import '../styles/landing-page.scss'

import LogoNavigation from '../assets/logo-navigation.png'
import LogoFooter from '../assets/logo-footer.png'
import USPImage from '../assets/usp-image.png'
import HeroImage from '../assets/hero-image.png'

export function LandingPage() {
    return (
        <div id='landing-page'>
            <header id='navigation'>
                <img src={LogoNavigation} alt="FB" />
                <nav className='page-navigation'>
                    <ul>
                        <li><a href="#unique-selling-proposition">O que é?</a></li>
                        <li><a href="#features">O que faz?</a></li>
                        <li><a href="#closing-argument">Por que usar?</a></li>
                        <li><a href="call-to-action">Como usar?</a></li>
                    </ul>
                </nav>
                <button>Experimente agora</button>
            </header>

            <section id='hero'>
                <div className="content">
                    <h1>Seu novo assistente<br />pessoal de IA para<br /><em>a prova do Enem</em></h1>
                    <p>O FBAI é uma inteligência artificial treinada exclusivamente para responder a perguntas sobre o Enem, escrever resumos, fornecer questões e dar dicas de estudos, tudo diretamente no seu WhatsApp. É fácil e simples de usar.</p>
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
                    <p>Agora é possível com o FBAI. A preparação para o Enem nunca foi tão conveniente quanto enviar uma mensagem e receber de forma instantânea tudo o que você precisa para seus estudos.</p>
                </div>
            </section>

            <section id="features">
                <div className="content">
                    <h3>O que faz?</h3>
                    <h2>O que você pode fazer com o <em>FBAI</em></h2>
                    <p>Confira algumas das funcionalidades disponíveis para você.</p>
                </div>
                <div className="list">
                    <div className="item">
                        <i className="icon">Icon</i>
                        <h4>Resumos Instantâneos</h4>
                        <p>Sit aliquam eget luctus tincidunt velit id nunc lorem arcu. Metus sit dui.</p>
                    </div>
                    <div className="item">
                        <i className="icon">Icon</i>
                        <h4>Personalidade de Tsundere</h4>
                        <p>Sit aliquam eget luctus tincidunt velit id nunc lorem arcu. Metus sit dui.</p>
                    </div>
                    <div className="item">
                        <i className="icon">Icon</i>
                        <h4>Lorem Ipsum</h4>
                        <p>Sit aliquam eget luctus tincidunt velit id nunc lorem arcu. Metus sit dui.</p>
                    </div>
                    <div className="item">
                        <i className="icon">Icon</i>
                        <h4>Lorem Ipsum</h4>
                        <p>Sit aliquam eget luctus tincidunt velit id nunc lorem arcu. Metus sit dui.</p>
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

                </div>
            </section>

            <section id='call-to-action'>
                <div className="content">
                    <h3>Como usar?</h3>
                    <h2>Descubra a facilidade de usar o FBAI para sua preparação do Enem</h2>
                    <p>Inicie a conversa agora mesmo com o nosso assistente de IA e potencialize sua preparação para o Enem. O futuro do seu sucesso acadêmico está a apenas uma mensagem de distância.</p>
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
                                    i
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    i
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    i
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    i
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    i
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}