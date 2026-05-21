import { X, Heart, Clock, ChefHat, Users, Lightbulb } from 'lucide-react';
import type { Recipe } from '../data/recipes';

interface RecipeDetailProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onClose: () => void;
}

export function RecipeDetail({ recipe, isFavorite, onToggleFavorite, onClose }: RecipeDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative h-80 overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-md"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={() => onToggleFavorite(recipe.id)}
              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-md"
              aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  isFavorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'
                }`}
              />
            </button>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {recipe.category === 'galletas' ? '🍪 Galletas' : '🍫 Brownies'}
                </span>
                {recipe.subcategory && (
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm text-secondary-foreground">
                    {recipe.subcategory}
                  </span>
                )}
              </div>
              <h2 className="font-bold text-foreground mb-3">{recipe.title}</h2>
              <p className="text-muted-foreground mb-2">{recipe.description}</p>
              <p className="text-foreground/70">{recipe.occasion}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-secondary/30 rounded-xl">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Preparación</p>
                  <p className="text-sm font-medium">{recipe.prepTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Cocción</p>
                  <p className="text-sm font-medium">{recipe.cookTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="text-sm font-medium">{recipe.totalTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Porciones</p>
                  <p className="text-sm font-medium">{recipe.servings}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">📝</span>
                  </div>
                  Ingredientes
                </h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-primary" />
                  </div>
                  Preparación
                </h3>
                <ol className="space-y-3">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-foreground/80 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="bg-accent/30 rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Consejos de chef
              </h3>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">💡</span>
                    <span className="text-foreground/80">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
