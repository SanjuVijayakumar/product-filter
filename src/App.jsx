import { useEffect, useState } from 'react'
import './App.css'
import FilterBar from './components/filter/FilterBar'
import Header from './components/header/Header'
import ProductList from './components/productList/ProductList'
// import products from './data/products'
import { getProducts } from './api/ProductApi'

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // product filter states
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("default");

  console.log(products);
  

  useEffect (() => {
    const fetchProducts = async () => {
      try {

        setLoading(true);
        setError("");

        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log("Failed to fetch products:", error);

        setError("Failed to load products. Please try again..");
        
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <FilterBar 
          category={category}
          setCategory={setCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sort={sort}
          setSort={setSort}
        />

        {/* Loading state */}
        {loading && (
          <div className="flex min-h-60 items-center justify-center">
            <p className="text-lg font-medium text-slate-500">
              Loading products...
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="flex min-h-60 items-center justify-center">
            <p className="rounded-xl bg-red-50 px-6 py-4 text-sm font-medium text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* Products State */}
        {!loading && !error && (
          <ProductList products={products} />
        )}
      </main>
    </>
  )
}

export default App
