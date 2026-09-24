import bgFooter from '../assets/bg_footer.jpg'

function Footer() {
  return (
    <footer className="footer text-white text-center p-5 mt-5" style={{ backgroundImage: `url(${bgFooter})` }}>
      <p className="m-0">Mon Restaurant</p>
      <p className="m-0">15 rue de la Monnaie, 59000 Lille</p>
      <p className="m-0 mt-3">Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
