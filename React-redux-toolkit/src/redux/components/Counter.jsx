import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slices/CounterSlices";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md w-fit">
      
      <button
        onClick={() => dispatch(decrement())}
        disabled={count === 0}
        className="
          w-10 h-10 flex items-center justify-center
          rounded-full bg-gray-200 text-xl font-bold
          hover:bg-gray-300 transition
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        −
      </button>

      <span className="min-w-8 text-center text-lg font-semibold text-gray-800">
        {count}
      </span>

      <button
        onClick={() => dispatch(increment())}
        className="
          w-10 h-10 flex items-center justify-center
          rounded-full bg-green-500 text-white text-xl font-bold
          hover:bg-green-600 transition
        "
      >
        +
      </button>
    </div>
  );
}
