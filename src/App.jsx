import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Produit from './components/Produit'
import Footer from './components/Footer'
import produits from './data/produits'
import { useFiltres } from './context/FiltresContext'

function App() {

  const { recherche, setRecherche, categorie, tag, prixMax, reinitialiser } = useFiltres()

  const resultats = produits.filter((produit) => {
    const texte = produit.nom + " " + produit.categorie + " " + produit.tags.join(" ")

    const okRecherche = texte.toLowerCase().includes(recherche.toLowerCase())
    const okCategorie = categorie === "" || produit.categorie === categorie
    const okTag = tag === "" || produit.tags.includes(tag)
    const okPrix = prixMax === "" || produit.prix <= Number(prixMax)

    return okRecherche && okCategorie && okTag && okPrix
  })

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
            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Rechercher un produit"
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
              />
              <button type="button" className="btn btn-dark" onClick={reinitialiser}>Tout afficher</button>
            </div>

            {resultats.length === 0 && (
              <p className="text-center py-5">Aucun produit ne correspond à votre recherche.</p>
            )}

            <div className="row">
              {resultats.map((produit) => (
                <Produit key={produit.id} produit={produit} />
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
