function Panier({ nombre }) {
  return (
    <button type="button" className="panier btn btn-light">
      🛒
      {nombre > 0 && <span className="badge bg-danger ms-1">{nombre}</span>}
    </button>
  )
}

export default Panier
