import { Heart, ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/BasketSlice.js";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="
      bg-white rounded-xl shadow-sm overflow-hidden
      hover:shadow-md transition
      group
    ">
      <div className="relative h-44 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="
            w-full h-full object-cover
            group-hover:scale-105 transition
          "
        />

        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <button className="
            bg-white p-1.5 rounded-full shadow
            hover:bg-pink-100 transition
          ">
            <Heart size={14} className="text-pink-500" />
          </button>

          <button className="
            bg-white p-1.5 rounded-full shadow
            hover:bg-green-100 transition
          ">
            <ShoppingBag size={14} className="text-green-600" />
          </button>
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {product.title}
        </h3>

        <p className="text-pink-600 font-semibold text-sm mt-0.5">
          ${product.price}
        </p>

        <button className="
          mt-3 w-full bg-black text-white py-1.5 rounded-lg
          text-sm hover:bg-gray-800 transition
        "
        onClick={() => dispatch(addToBasket(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
