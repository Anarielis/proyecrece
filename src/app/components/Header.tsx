import { Heart, Cookie } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  favoritesCount: number;
}

export function Header({ currentSection, onNavigate, favoritesCount }: HeaderProps) {
  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'recetas', label: 'Recetas' },
    { id: 'galletas', label: 'Tipos de Galletas' },
    { id: 'brownies', label: 'Brownies' },
    { id: 'acerca', label: 'Acerca de' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header className="bg-card shadow-md sticky top-0 z-50 border-b-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('inicio')}>
            <Cookie className="w-8 h-8 text-primary" />
            <div>
              <h1 className="font-bold text-primary">Dulce Mundo</h1>
              <p className="text-xs text-muted-foreground">Galletas & Brownies</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors hover:text-primary ${
                  currentSection === item.id ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('favoritos')}
              className="relative flex items-center gap-2 px-4 py-2 bg-accent rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Heart className="w-5 h-5" fill={favoritesCount > 0 ? 'currentColor' : 'none'} />
              <span>Favoritos</span>
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-destructive text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => onNavigate('menu')}
          >
            <span className="w-6 h-0.5 bg-primary"></span>
            <span className="w-6 h-0.5 bg-primary"></span>
            <span className="w-6 h-0.5 bg-primary"></span>
          </button>
        </div>

        <nav className="md:hidden pb-4 flex flex-wrap gap-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                currentSection === item.id
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
