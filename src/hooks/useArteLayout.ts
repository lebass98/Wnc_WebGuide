import { useState, useEffect } from 'react';

export const useArteLayout = (defaultCols: 1 | 2 = 1) => {
  const [layoutColumns, setLayoutColumnsState] = useState<1 | 2>(() => {
    try {
      const saved = localStorage.getItem('arte_layout_columns');
      if (saved === '1' || saved === '2') {
        return Number(saved) as 1 | 2;
      }
    } catch (e) {
      // Ignore localStorage errors if restricted
    }
    return defaultCols;
  });

  const setLayoutColumns = (cols: 1 | 2) => {
    setLayoutColumnsState(cols);
    try {
      localStorage.setItem('arte_layout_columns', String(cols));
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'arte_layout_columns' && (e.newValue === '1' || e.newValue === '2')) {
        setLayoutColumnsState(Number(e.newValue) as 1 | 2);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return [layoutColumns, setLayoutColumns] as const;
};
