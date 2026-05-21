import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie-consent';

export function CookieNotice() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setTimeout(() => setShowNotice(true), 1000);
    } else if (consent === 'accepted') {
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    // Google Analytics initialization
    // Replace 'G-XXXXXXXXXX' with your actual Google Analytics ID
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  };

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    initializeAnalytics();
    setShowNotice(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-4xl mx-auto bg-card border-2 border-accent rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-2">🍪 Aviso de Cookies</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Utilizamos cookies y Google Analytics para mejorar tu experiencia y entender cómo usas nuestro sitio.
              Al aceptar, nos ayudas a mejorar nuestro contenido de recetas.{' '}
              <button
                onClick={() => window.open('/privacy', '_blank')}
                className="text-primary hover:underline font-medium"
              >
                Ver política de privacidad
              </button>
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-initial px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-muted transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-initial px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium"
            >
              Aceptar
            </button>
          </div>

          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 p-1 hover:bg-secondary rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}
