import './index.scss'
import LogoNavigation from '../../assets/logo-navigation.png'

export function Navigation() {
    return(
        <header>
            <img src={LogoNavigation} alt="" />
            <ul>
                <li><a href="#">Seção 1</a></li>
                <li><a href="#">Seção 2</a></li>
                <li><a href="#">Seção 3</a></li>
                <li><a href="#">Seção 4</a></li>
            </ul>
            <button>Assina agora</button>
        </header>
    )
}