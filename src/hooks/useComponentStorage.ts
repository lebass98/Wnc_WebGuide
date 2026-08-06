import { useState } from 'react';

const FAVORITES_KEY = 'wnc_favorite_components';
const RECENTLY_VIEWED_KEY = 'wnc_recently_viewed_components';

export function useComponentStorage() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      return saved ? JSON.parse(saved) : ['btn-gradient', 'input-floating'];
    } catch {
      return ['btn-gradient', 'input-floating'];
    }
  });

  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(RECENTLY_VIEWED_KEY);
      return saved ? JSON.parse(saved) : ['btn-gradient', 'input-floating', 'modal-glass'];
    } catch {
      return ['btn-gradient', 'input-floating', 'modal-glass'];
    }
  });

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const addRecentlyViewed = (id: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((item) => item !== id);
      const next = [id, ...filtered].slice(0, 8);
      try {
        localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  return {
    favorites,
    toggleFavorite,
    recentlyViewed,
    addRecentlyViewed,
  };
}
