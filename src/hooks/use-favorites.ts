'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'casacoffee-favorites';

const getFavorites = (): string[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const favorites = window.localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error reading favorites from localStorage', error);
    return [];
  }
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const toggleFavorite = useCallback((recipeId: string) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.includes(recipeId)
        ? prevFavorites.filter(id => id !== recipeId)
        : [...prevFavorites, recipeId];
      
      try {
        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      } catch (error) {
        console.error('Error saving favorites to localStorage', error);
      }
      
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback(
    (recipeId: string) => {
      return favorites.includes(recipeId);
    },
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite };
};
