function FilterSidebar() {
    return (
      <aside className="w-64 p-4 bg-gray-100 hidden md:block">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Pick up Today
          </label>
          <h4 className="font-medium mt-4">Categories</h4>
          <ul className="ml-4 space-y-1">
            <li><a href="#" className="hover:text-blue-500">Shoes</a></li>
            <li><a href="#" className="hover:text-blue-500">Tops & T-Shirts</a></li>
            <li><a href="#" className="hover:text-blue-500">Hoodies & Pullovers</a></li>
            <li><a href="#" className="hover:text-blue-500">Pants</a></li>
            <li><a href="#" className="hover:text-blue-500">Accessories</a></li>
          </ul>
          <h4 className="font-medium mt-4">Sale Offers</h4>
          <p>Extra 25% Off - Select Styles</p>
        </div>
      </aside>
    );
  }
  
  export default FilterSidebar;