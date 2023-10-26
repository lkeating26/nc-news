import React from 'react'
import Header from './Components/Header'
import ArticleList from './Components/ArticleList'
import { Route, Routes } from  'react-router-dom'
import SingleArticle from './Components/SingleArticle'
import Welcome from './Components/Welcome'
import { useContext } from 'react'
import { UserContext } from './contexts/User'
import NavBar from './Components/NavBar'


function App() {

  const { user } = useContext(UserContext)

  return (
    <div className="app">
      <Header />
      { user && <NavBar />}
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  )
}

export default App
