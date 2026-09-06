import './App.css'
import Header from './components/header/Header'
import ProductList from './components/productList/ProductList'
import products from './data/products'

function App() {

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <ProductList products={products} />
      </main>
    </>
  )
}

export default App
