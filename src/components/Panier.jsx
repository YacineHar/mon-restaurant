import { usePanier } from '../context/PanierContext'

function Panier() {

  const { nombreArticles } = usePanier()

  return (
    <button type="button" className="panier btn btn-light">
      🛒
      {nombreArticles > 0 && <span className="badge bg-danger ms-1">{nombreArticles}</span>}
    </button>
  )
}

export default Panier
