import { useState } from "react";
import { Binary, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
              <Binary className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg">ByteLab</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Módulos
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/capitulo/1" className="block px-4 py-2 rounded-lg text-sm hover:bg-muted transition-colors">
                  <span className="text-accent">●</span> Fundamentos (Cap 1-3)
                </Link>
                <Link to="/capitulo/4" className="block px-4 py-2 rounded-lg text-sm hover:bg-muted transition-colors">
                  <span className="text-primary">●</span> Intermediário (Cap 4-8)
                </Link>
                <Link to="/capitulo/9" className="block px-4 py-2 rounded-lg text-sm hover:bg-muted transition-colors">
                  <span className="text-secondary">●</span> Avançado (Cap 9-11)
                </Link>
              </div>
            </div>
            
            <Link to="/diagramas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Diagramas
            </Link>
            <Link to="/ebook" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              eBook
            </Link>
            <Link to="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
          </div>

          {/* Progress indicator */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Progresso salvo</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in">
            <div className="space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors">Módulos</Link>
              <Link to="/diagramas" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors">Diagramas</Link>
              <Link to="/ebook" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors">eBook</Link>
              <Link to="/sobre" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors">Sobre</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
