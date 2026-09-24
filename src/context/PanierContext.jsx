import { createContext, useContext, useState } from 'react'

const PanierContext = createContext()

export function PanierProvider({ children }) {
  const [articles, setArticles] = useState([])

  function ajouterAuPanier(produit) {
    const dejaPresent = articles.find((article) => article.id === produit.id)

    if (dejaPresent) {
      setArticles(articles.map((article) => (
        article.id === produit.id
          ? { ...article, quantite: article.quantite + 1 }
          : article
      )))
    } else {
      setArticles([...articles, { ...produit, quantite: 1 }])
    }
  }

  const nombreArticles = articles.reduce((total, article) => total + article.quantite, 0)
  const prixTotal = articles.reduce((total, article) => total + article.prix * article.quantite, 0)

  return (
    <PanierContext.Provider value={{ articles, ajouterAuPanier, nombreArticles, prixTotal }}>
      {children}
    </PanierContext.Provider>
  )
}

export function usePanier() {
  return useContext(PanierContext)
}
