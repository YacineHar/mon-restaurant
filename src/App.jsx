import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Produit from './components/Produit'
import Footer from './components/Footer'
import produits from './data/produits'

function App() {
  return (
    <>
      <Header />
      <Nav />

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <Sidebar />
          </div>

          <div className="col-lg-9">
            <div className="row">
              {produits.map((produit) => (
                <Produit
                  key={produit.id}
                  nom={produit.nom}
                  prix={produit.prix}
                  image={produit.image}
                  tags={produit.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
