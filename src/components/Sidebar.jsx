import { categories, tags } from '../data/filtres'
import Bouton from './Bouton'

function Sidebar() {
  return (
    <aside>
      <div className="border mb-4">
        <p className="bg-dark text-white m-0 p-2">Catégorie</p>
        <ul className="list-group list-group-flush">
          {categories.map((categorie) => (
            <li className="list-group-item" key={categorie}>{categorie}</li>
          ))}
        </ul>
      </div>

      <div className="border p-3 mb-4">
        <div className="input-group">
          <span className="input-group-text">€</span>
          <input type="number" className="form-control" placeholder="Filtrer par prix" />
        </div>
      </div>

      <div className="border p-3">
        {tags.map((tag) => (
          <Bouton texte={tag} classe="btn btn-sm btn-outline-dark me-2 mb-2" key={tag} />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
