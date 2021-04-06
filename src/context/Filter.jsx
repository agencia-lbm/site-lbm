/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [services, setServices] = useState('');
  const [clientes, setClientes] = useState('');

  return (
    <FilterContext.Provider
      value={{
        services,
        setServices,
        clientes,
        setClientes
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  const { services, setServices, clientes, setClientes } = context;

  return { services, setServices, clientes, setClientes };
}
