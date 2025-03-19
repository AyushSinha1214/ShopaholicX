import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold">
        <a href="/" className="hover:text-gray-300">E-Shop</a>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-gray-300">Men</a>
        <a href="#" className="hover:text-gray-300">Women</a>
        <a href="#" className="hover:text-gray-300">Kids</a>
        <a href="#" className="hover:text-gray-300">Sale</a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-md text-black focus:outline-none"
          />
          <FaSearch className="absolute right-2 top-2 text-gray-500" />
        </div>
        <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-300" />
        <FaUser className="text-xl cursor-pointer hover:text-gray-300" />
      </div>
    </nav>
  );
}

export default Navbar;