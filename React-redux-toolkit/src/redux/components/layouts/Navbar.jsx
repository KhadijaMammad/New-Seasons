import { ShoppingBag, Heart, User } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const basketQuantity = useSelector(state => state.basket.totalQuantity);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-bold tracking-wide text-black">
          Beauty<span className="text-pink-500">Store</span>
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-black transition">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-black transition">Shop</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-black transition">About</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button className="relative hover:text-pink-500 transition">
            <Heart size={22} />
          </button>

          <Link to="/basket" className="relative hover:text-green-600 transition">
            <ShoppingBag size={22} />

            {basketQuantity > 0 && (
              <span className="
                absolute -top-2 -right-2
                bg-green-500 text-white text-xs
                w-5 h-5 rounded-full
                flex items-center justify-center
              ">
                {basketQuantity}
              </span>
            )}
          </Link>

          <button className="hover:text-gray-600 transition">
            <User size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
}
