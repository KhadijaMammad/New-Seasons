"use client";

import { products as mockProducts } from "@/lib/products";
import { useQuery } from "@tanstack/react-query";

export default function ProductsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return new Promise<typeof mockProducts>((resolve) =>
        setTimeout(() => resolve(mockProducts), 500),
      );
    },
  });
  if (isLoading)
    return <p className="p-6">Loading products...</p>;
  if (isError)
    return <p className="p-6 text-red-500">Failed to load products</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cosmetic Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data!.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="font-medium">{product.title}</h2>
            <p className="text-sm text-muted-foreground">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
