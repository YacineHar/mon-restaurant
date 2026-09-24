import { categories, tags } from '../data/filtres'
import Bouton from './Bouton'
import { useFiltres } from '../context/FiltresContext'

function Sidebar() {

  const { categorie, setCategorie, tag, setTag, prixMax, setPrixMax } = useFiltres()

  return (
    <aside>
      <div className="border mb-4">
        <p className="bg-dark text-white m-0 p-2">Catégorie</p>
        <ul className="list-group list-group-flush">
          {categories.map((nom) => (
            <li
              className={categorie === nom ? "list-group-item active" : "list-group-item"}
              key={nom}
              onClick={() => setCategorie(categorie === nom ? "" : nom)}
            >
              {nom}
            </li>
          ))}
        </ul>
      </div>

      <div className="border p-3 mb-4">
        <div className="input-group">
          <span className="input-group-text">€</span>
          <input
            type="number"
            className="form-control"
            placeholder="Filtrer par prix"
            value={prixMax}
            onChange={(e) => setPrixMax(e.target.value)}
          />
        </div>
      </div>

      <div className="border p-3">
        {tags.map((nom) => (
          <Bouton
            texte={nom}
            classe={tag === nom ? "btn btn-sm btn-dark me-2 mb-2" : "btn btn-sm btn-outline-dark me-2 mb-2"}
            onClick={() => setTag(tag === nom ? "" : nom)}
            key={nom}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
