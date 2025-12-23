import BasketPage from "./redux/components/BasketPage";
import Navbar from "./redux/components/layouts/Navbar"
import ProductList from "./redux/components/ProductsGrid"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
