import Link from "next/link"; // Next.js routing üçün
import { Button } from "@/components/ui/button"; // shadcn/ui Button komponenti

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <Link href="/" className="text-xl font-bold text-gray-800">
          Cosmetics
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          {/* Products link */}
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>

          {/* Login link */}
          <Link href="/login" className="hover:text-primary">
            Login
          </Link>

          {/* Register link as a button */}
          <Link href="/register">
            <Button size="sm">Register</Button>
          </Link>
        </nav>

      </div>
    </header>
  );
}
