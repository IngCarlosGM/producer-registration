import { createContext, useState } from 'react';

export const SortingContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    personalData: 'none',
  });

  return (
    <SortingContext.Provider
      value={{
        filters,
        setFilters,
      }}>
      {children}
    </SortingContext.Provider>
  );
}
