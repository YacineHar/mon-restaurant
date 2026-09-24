import { createContext, useContext, useState } from 'react'

const FiltresContext = createContext()

export function FiltresProvider({ children }) {
  const [recherche, setRecherche] = useState("")
  const [categorie, setCategorie] = useState("")
  const [tag, setTag] = useState("")
  const [prixMax, setPrixMax] = useState("")

  function reinitialiser() {
    setRecherche("")
    setCategorie("")
    setTag("")
    setPrixMax("")
  }

  return (
    <FiltresContext.Provider value={{
      recherche,
      setRecherche,
      categorie,
      setCategorie,
      tag,
      setTag,
      prixMax,
      setPrixMax,
      reinitialiser
    }}>
      {children}
    </FiltresContext.Provider>
  )
}

export function useFiltres() {
  return useContext(FiltresContext)
}
