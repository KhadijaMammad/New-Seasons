export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 text-sm text-muted-foreground">
        
        {/* Copyright */}
        <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>

        {/* Links */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Terms</a>
        </div>

      </div>
    </footer>
  );
}
