import { useEffect, useState } from 'react'
import './App.css'
import FilterBar from './components/filter/FilterBar'
import Header from './components/header/Header'
import ProductList from './components/productList/ProductList'
// import products from './data/products'
import { getProducts } from './api/ProductApi'
import Footer from './components/footer/Footer'

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

  // const filteredProducts = products.filter((product) => {
    
  //   if (category === "all") {
  //     return true;
  //   }

  //   return product.category === category;
  // });

  const filteredProducts = products.filter((product) => {

  if (category !== "all" && product.category !== category) {
    return false;
  }

  if (minPrice && product.price < Number(minPrice)) {
    return false;
  }

  if (maxPrice && product.price > Number(maxPrice)) {
    return false;
  }

  return true;
})
.sort((a, b) => {
    // Price: Low to High
    if (sort === "price-low") {
      return a.price - b.price;
    }

    // Price: High to Low
    if (sort === "price-high") {
      return b.price - a.price;
    }

    // Name: A to Z
    if (sort === "name-az") {
      return a.title.localeCompare(b.title);
    }

    // Name: Z to A
    if (sort === "name-za") {
      return b.title.localeCompare(a.title);
    }

    // Default
    return 0;
  });


    console.log("Filtered Products:", filteredProducts);

    const categories = [
      "all",
      ...new Set(products.map((product) => product.category)),
    ];

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <FilterBar 
        categories={categories}
          category={category}
          setCategory={setCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sort={sort}
          setSort={setSort}
          onReset={() => {
            setCategory("all");
            setMinPrice("");
            setMaxPrice("");
            setSort("default");
          }}
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
          <ProductList products={filteredProducts} />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
