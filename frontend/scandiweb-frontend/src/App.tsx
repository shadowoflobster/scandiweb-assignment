import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header/>
      </Router>
    </>
  )
}

export default App
