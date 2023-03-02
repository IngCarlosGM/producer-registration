import { useContext } from 'react';
import { SortingContext } from '../context/filters';
import { type Producer } from '../interfaces/Producer';

export function useFilters(): unknown {
  const { filters, setFilters } = useContext(SortingContext);

  const filterProducts = (producers: Producer[]): Producer[] => {
    console.log('TIPO DE ORDENAMIENTO', filters.personalData);

    switch (filters.personalData) {
      case 'none':
        return producers;
      case 'docNumber':
        return producers.sort((a, b) => a.docNumber.localeCompare(b.docNumber));
      case 'name':
        return producers.sort((a, b) => a.name.localeCompare(b.name));
      case 'phoneNumber':
        return producers.sort((a, b) =>
          a.phoneNumber.localeCompare(b.phoneNumber),
        );
      default:
        return producers;
    }
  };

  return { filters, filterProducts, setFilters };
}
