import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ListingsPage from './pages/ListingsPage/ListingsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header/>
        <ProductPage/>
      </Router>
    </>
  )
}

export default App
