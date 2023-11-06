import logoImg from '../assets/logo.jpg'

export default function Header(){
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alf="food"/>
            <h1>Food Order App</h1>
        </div>
        <nav>
            <button>CART (0)</button>
        </nav>
    </header>
}