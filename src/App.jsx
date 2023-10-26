import { useState } from 'react'
import Header from './Components/Header'
import ArticleList from './Components/ArticleList'
import { Route, Routes } from  'react-router-dom'
import SingleArticle from './Components/SingleArticle'


function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  )
}

export default App
