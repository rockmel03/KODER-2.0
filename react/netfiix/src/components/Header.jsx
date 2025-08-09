import { Search, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-zinc-900 to-transparent px-4 md:px-16 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-red-500">NETFLIX</div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-muted-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-muted-white transition-colors"
            >
              TV Shows
            </a>
            <a
              href="#"
              className="text-white hover:text-muted-white transition-colors"
            >
              Movies
            </a>
            <a
              href="#"
              className="text-white hover:text-muted-white transition-colors"
            >
              New & Popular
            </a>
            <a
              href="#"
              className="text-white hover:text-muted-white transition-colors"
            >
              My List
            </a>
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-white hover:text-muted-white transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-white hover:text-muted-white transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-white hover:text-muted-white transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
