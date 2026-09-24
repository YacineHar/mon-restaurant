function Bouton({ texte, classe, onClick }) {
  return (
    <button type="button" className={classe} onClick={onClick}>
      {texte}
    </button>
  )
}

export default Bouton
