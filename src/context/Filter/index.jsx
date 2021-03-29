import React, { createContext, useState } from 'react'

export const FilterContext = createContext();

export default function FilterProvider({ children }) {
    const [services, setServices] = useState('')
    const [clientes, setClientes] = useState('')

    return (
        <FilterContext.Provider value={{
            services,
            setServices,
            clientes,
            setClientes
        }}>
            {children}
        </FilterContext.Provider>
    )
}