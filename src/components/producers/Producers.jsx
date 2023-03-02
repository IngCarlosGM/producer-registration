import { useEffect, useId, useState } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { getProducers } from '../../services/getProducers';
import { TextTitle } from '../widgets/TextTitle';
import { ItemDataCard } from './ItemDataCard';

export const Producers = () => {
  const [data, setData] = useState([]);
  const categoryFilterId = useId();
  const { filters, setFilters } = useFilters();
  console.log(filters);

  const fetchProducers = async () => {
    const result = await getProducers();
    if (result?.responseRepAuthPro) {
      setData(result.responseRepAuthPro.responseBody.repProList);
    }
  };

  useEffect(() => {
    if (data.length === 0) fetchProducers();
  }, [data]);

  const handleSorting = event => {
    setFilters(prevState => ({
      ...prevState,
      personalData: event.target.value,
    }));
  };

  return (
    <div className='p-4'>
      <TextTitle text='Producers list' />

      <div className='flex justify-end mb-4'>
        <label htmlFor={categoryFilterId} className='mr-4'>
          Ordenar por:
        </label>
        <select
          className='outline-none bg-white rounded-md'
          id={categoryFilterId}
          onChange={handleSorting}>
          <option value='none'>Ninguno</option>
          <option value='name'>Nombre</option>
          <option value='docNumber'>Documento</option>
          <option value='phoneNumber'>Teléfono</option>
        </select>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-4"'>
        {data.map(producer => (
          <ItemDataCard
            key={producer.docNumber}
            docNumber={producer.docNumber}
            name={producer.name}
            phoneNumber={producer.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
};
