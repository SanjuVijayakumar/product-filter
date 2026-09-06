import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      <div className="h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          {product.name}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {product.category}
        </p>

        <p className="mt-4 text-xl font-bold text-cyan-600">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  )
}

export default ProductCard