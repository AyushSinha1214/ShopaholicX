function ProductCard({ product }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <span className="text-orange-500 text-sm">Just In</span>
          <h3 className="text-lg font-semibold mt-1">{product.title}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;