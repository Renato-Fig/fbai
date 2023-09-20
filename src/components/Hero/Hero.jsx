import './index.scss'

export function Hero() {
    return(
        <section id='hero'>
            <div className='text-content'>
                <h1>Seu novo assistente <br/>pessoal de IA para <br/><em>a prova do Enem</em></h1>
                <p>Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. </p>
                <button>Teste agora</button>
            </div>
            <div className='image-content'>
                <p>image</p>
            </div>
        </section>
    )
}