import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'recipe-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }, [favorites]);

  const toggleFavorite = (recipeId: number) => {
    setFavorites(prev =>
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const isFavorite = (recipeId: number) => favorites.includes(recipeId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.length
  };
}
