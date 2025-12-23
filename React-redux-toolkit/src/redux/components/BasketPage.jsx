import { useDispatch, useSelector } from "react-redux";
import {
  removeBasket,
  increaseQuantity,
  decreaseQuantity,
} from "../slices/BasketSlice.js";
import { X } from "lucide-react";


export default function BasketPage() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.basket);

  if (items.length === 0) {
    return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 p-6 text-center">
        <h2 className="text-2xl font-semibold">Your basket is empty</h2>
        <p className="text-gray-500 mt-2">
          Add some products to see them here!
        </p>
      </div>
    </div>
    );
    
  }
   return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Your Basket</h2>

      <div className="flex flex-col gap-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b py-3">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-pink-600 font-bold">${item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="bg-gray-200 px-2 rounded"
              >-</button>

              <span>{item.quantity}</span>

              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="bg-gray-200 px-2 rounded"
              >+</button>
            </div>

            {/* Remove */}
            <button
              onClick={() => dispatch(removeBasket(item.id))}
              className="text-red-500 hover:text-red-700"
            >
              <X size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-end mt-6 text-lg font-semibold">
        Total: <span className="text-pink-600 ml-2">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
