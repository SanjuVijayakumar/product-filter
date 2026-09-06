import React from "react";

const FilterBar = (
    category,
    setCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    sort,
    setSort,
    onReset,
) => {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

        <div className="flex-1">
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          >
            <option value="all">All Categories</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="flex-1">
          <label
            htmlFor="minPrice"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Min Price
          </label>

          <input
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            type="number"
            placeholder="₹ Minimum"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="maxPrice"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Max Price
          </label>

          <input
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            type="number"
            placeholder="₹ Maximum"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="sort"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Sort By
          </label>

          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-az">Name: A to Z</option>
            <option value="name-za">Name: Z to A</option>
          </select>
        </div>


        <button
          type="button"
          onClick={onReset}
          className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default FilterBar;