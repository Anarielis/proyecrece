import { Heart, Clock } from 'lucide-react';
import type { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onViewRecipe: (id: number) => void;
}

export function RecipeCard({ recipe, isFavorite, onToggleFavorite, onViewRecipe }: RecipeCardProps) {
  return (
    <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border">
      <div className="relative h-56 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-md"
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'
            }`}
          />
        </button>
        <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs text-white font-medium">
            {recipe.category === 'galletas' ? '🍪 Galletas' : '🍫 Brownies'}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-foreground mb-2 line-clamp-2">{recipe.title}</h3>

        {recipe.subcategory && (
          <span className="inline-block bg-secondary px-3 py-1 rounded-full text-xs text-secondary-foreground mb-3">
            {recipe.subcategory}
          </span>
        )}

        <p className="text-sm text-muted-foreground mb-2">{recipe.flavor}</p>
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{recipe.occasion}</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="w-4 h-4" />
          <span>{recipe.totalTime}</span>
        </div>

        <button
          onClick={() => onViewRecipe(recipe.id)}
          className="w-full bg-primary text-white py-2.5 px-4 rounded-full hover:bg-primary/90 transition-colors font-medium"
        >
          Ver receta completa
        </button>
      </div>
    </div>
  );
}
