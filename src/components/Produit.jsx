import Bouton from './Bouton'
import { useFiltres } from '../context/FiltresContext'

function Produit({ nom, prix, image, tags }) {

  const { setTag } = useFiltres()

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="produit border h-100 d-flex flex-column">
        <img src={image} alt={nom} />
        <div className="p-3 d-flex flex-column flex-grow-1">
          <div className="d-flex justify-content-between mb-3">
            <span className="fw-medium">{nom}</span>
            <span className="fw-medium">{prix} €</span>
          </div>
          <div className="mb-3">
            {tags.map((tag) => (
              <Bouton
                texte={tag}
                classe="btn btn-sm btn-outline-dark me-2 mb-2"
                onClick={() => setTag(tag)}
                key={tag}
              />
            ))}
          </div>
          <div className="mt-auto">
            <Bouton texte="Ajouter au panier" classe="btn btn-sm btn-outline-primary w-100" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produit
