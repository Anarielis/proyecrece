export function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-secondary via-accent to-secondary py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
          Bienvenido al dulce mundo de galletas y brownies
        </h2>
        <p className="text-xl md:text-2xl text-foreground/80 mb-6">
          Descubre recetas deliciosas, fáciles de hacer y perfectas para compartir
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <p className="text-sm text-muted-foreground">🍪 Sin registro necesario</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <p className="text-sm text-muted-foreground">❤️ Guarda tus favoritas</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <p className="text-sm text-muted-foreground">👨‍🍳 Recetas paso a paso</p>
          </div>
        </div>
      </div>
    </div>
  );
}
