import { useState } from 'react'
import Header from './Components/Header'
import ArticleList from './Components/ArticleList'
import Footer from './Components/footer'


function App() {

  return (
    <div className="app">
      <Header />
      <ArticleList />
      <Footer />
    </div>
  )
}

export default App
