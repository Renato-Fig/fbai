import './index.scss'

export function Features() {
    return(
        <section id='features'>
            <div className='text-content'>
                <h3>Título de seção 2</h3>
                <h2>O que você pode fazer com o <em>FBAI</em></h2>
                <p>Descubra algumas das tarefas que você pode realizar de maneira rápida e simples usando o nosso chatbot.</p>
            </div>
            <div className="features-list">
                
                <div className="item">
                    <div className="icon">icon</div>
                    <h4>Lorem Ipsum</h4>
                    <p>Sit aliquam eget luctus tincidunt velit id nunc lorem arcu. Metus sit dui.</p>
                </div>
                <div className="item">
                    <div className="icon">icon</div>
                    <h4>Lorem Ipsum</h4>
                    <p>Sit aliquam eget luctus tincidunt velit id nunc lorem arcu. Metus sit dui.</p>
                </div>
            </div>
        </section>
    )
}