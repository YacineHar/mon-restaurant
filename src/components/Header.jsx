import bgHeader from '../assets/bg_header.jpg'
import Panier from './Panier'

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${bgHeader})` }}>
      <Panier />
      <h1 className="titre">Mon Restaurant</h1>
    </header>
  )
}

export default Header
