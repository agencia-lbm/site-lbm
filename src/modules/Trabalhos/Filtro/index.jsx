import React from 'react';

import { useFilter } from '../../../context/Filter.jsx';

import filter from '../Jobs/jobs.json';

import styles from './Filtro.module.scss';

export default function Filtro() {
  const { setServices } = useFilter();

  function mudService(event) {
    setServices(event.target.value);
  }
  // function mudClientes(event) {
  //   setClientes(event.target.value);
  //   console.log('Cliente', event.target.value)
  // }

  return (
    <section className={styles.filtroWrapper}>
      <div className={styles.itemSelect}>
        <select name="servicos" id="servicos" onChange={mudService}>
          <option value=''>Serviços</option>
          {filter.filtro[0].servicosNome.map((filter) =>
            <option value={filter.value}>{filter.nome}</option>
          )}
        </select>
      </div>
      {/* <div className={styles.itemSelect}>
        <select name="clientes" id="clientes" onChange={mudClientes}>
          <option value=''>Clientes</option>
          {filter.filtro[1].clientesNome.map((filter) =>
            <option value={filter.value}>{filter.nome}</option>
          )}
        </select>
      </div> */}
    </section>
  );
}
