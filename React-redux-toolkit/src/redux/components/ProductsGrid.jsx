import { useSelector } from "react-redux";
import ProductCard from "./Products";

function ProductList() {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      <div className="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
      ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
