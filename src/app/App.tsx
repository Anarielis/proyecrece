import { useState } from 'react';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';
import { CookieNotice } from './components/CookieNotice';
import { useFavorites } from './hooks/useFavorites';
import { recipes } from './data/recipes';
import { Mail, MapPin, Phone, Cookie } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('inicio');
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const { favorites, toggleFavorite, isFavorite, favoritesCount } = useFavorites();

  const selectedRecipe = selectedRecipeId
    ? recipes.find((r) => r.id === selectedRecipeId)
    : null;

  const getFilteredRecipes = () => {
    if (currentSection === 'favoritos') {
      return recipes.filter((recipe) => favorites.includes(recipe.id));
    }
    if (currentSection === 'galletas') {
      return recipes.filter((recipe) => recipe.category === 'galletas');
    }
    if (currentSection === 'brownies') {
      return recipes.filter((recipe) => recipe.category === 'brownies');
    }
    return recipes;
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="min-h-screen bg-background">
      <Header
        currentSection={currentSection}
        onNavigate={setCurrentSection}
        favoritesCount={favoritesCount}
      />

      {currentSection === 'inicio' && (
        <>
          <Banner />
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-bold text-foreground mb-8 text-center">
              Explora Nuestras Recetas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={isFavorite(recipe.id)}
                  onToggleFavorite={toggleFavorite}
                  onViewRecipe={setSelectedRecipeId}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {(currentSection === 'recetas' ||
        currentSection === 'galletas' ||
        currentSection === 'brownies' ||
        currentSection === 'favoritos') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 text-center">
            <h2 className="font-bold text-foreground mb-2">
              {currentSection === 'recetas' && 'Todas las Recetas'}
              {currentSection === 'galletas' && '🍪 Tipos de Galletas'}
              {currentSection === 'brownies' && '🍫 Brownies Deliciosos'}
              {currentSection === 'favoritos' && '❤️ Tus Recetas Favoritas'}
            </h2>
            <p className="text-muted-foreground">
              {currentSection === 'favoritos' && filteredRecipes.length === 0
                ? 'Aún no has guardado ninguna receta favorita'
                : `${filteredRecipes.length} receta${filteredRecipes.length !== 1 ? 's' : ''} disponible${filteredRecipes.length !== 1 ? 's' : ''}`}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={isFavorite(recipe.id)}
                onToggleFavorite={toggleFavorite}
                onViewRecipe={setSelectedRecipeId}
              />
            ))}
          </div>
        </section>
      )}

      {currentSection === 'acerca' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                <Cookie className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h2 className="font-bold text-foreground text-center mb-6">
              Acerca de Dulce Mundo
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 mb-4">
                Bienvenido a <span className="font-medium text-primary">Dulce Mundo</span>, tu
                destino favorito para descubrir las mejores recetas de galletas y brownies.
              </p>
              <p className="text-foreground/80 mb-4">
                Nuestra misión es compartir recetas deliciosas, probadas y fáciles de seguir que
                cualquier persona pueda hacer en casa. Desde las clásicas galletas de chispas de
                chocolate hasta los brownies más decadentes, cada receta ha sido cuidadosamente
                seleccionada para garantizar resultados perfectos.
              </p>
              <p className="text-foreground/80 mb-6">
                No necesitas registrarte para disfrutar de nuestras recetas. Simplemente explora,
                cocina y comparte. Si encuentras una receta que te encanta, agrégala a tus
                favoritos para encontrarla fácilmente después.
              </p>
              <div className="bg-accent/30 rounded-xl p-6 mt-8">
                <h3 className="font-bold text-foreground mb-4">¿Por qué Dulce Mundo?</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Recetas probadas y aprobadas por nuestra comunidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Instrucciones paso a paso con consejos de chef</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Sin registro necesario, totalmente público y gratuito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Guarda tus recetas favoritas localmente en tu navegador</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'contacto' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
            <h2 className="font-bold text-foreground text-center mb-8">Contáctanos</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-foreground mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">info@dulcemundo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="text-foreground font-medium">+34 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="text-foreground font-medium">Madrid, España</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4">Envíanos un Mensaje</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm text-foreground mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-foreground mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-4 rounded-full hover:bg-primary/90 transition-colors font-medium"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-accent/30 rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-3">¿Tienes una receta para compartir?</h3>
              <p className="text-foreground/80">
                Nos encantaría conocer tus recetas favoritas de galletas y brownies. Envíanos un
                correo con tu receta y la consideraremos para incluirla en nuestro sitio.
              </p>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-card border-t-2 border-accent mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Cookie className="w-6 h-6 text-primary" />
              <div>
                <p className="font-bold text-foreground">Dulce Mundo</p>
                <p className="text-xs text-muted-foreground">Galletas & Brownies</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2026 Dulce Mundo. Todos los derechos reservados.
              </p>
              <button
                onClick={() => setCurrentSection('contacto')}
                className="text-sm text-primary hover:underline"
              >
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </footer>

      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          isFavorite={isFavorite(selectedRecipe.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedRecipeId(null)}
        />
      )}

      <CookieNotice />
    </div>
  );
}