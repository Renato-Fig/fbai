import './index.scss'

import introImage from '../../assets/intro-image.png'

export function Intro() {
    return(
        <section id='intro'>
            <div className='image-content'>
                <img src={introImage} alt="" />
            </div>
            <div className='text-content'>
                <h3>Título de seção 1</h3>
                <h2>Já pensou estudar para o <em>Enem no Whatsapp?</em></h2>
                <p>Usando o FBAI você pode transformar seu WhatsApp em uma poderosa ferramenta de estudo através de um chatbot preparado para responder todas suas dúvidas na preparação para a prova do ENEM.</p>
            </div>
        </section>
    )
}