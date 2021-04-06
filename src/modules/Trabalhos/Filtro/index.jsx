import React from 'react';

import { useFilter } from '../../../context/Filter.jsx';

import styles from '../../../../styles/modules/Trabalhos/Filtro/Filtro.module.scss';

export default function Filtro() {
  const { setServices, setClientes } = useFilter();

  function mudService(event) {
    setServices(event.target.value);
  }
  function mudClientes(event) {
    setClientes(event.target.value);
  }

  return (
    <section className={styles.filtroWrapper}>
      <div className={styles.itemSelect}>
        <select name="servicos" id="servicos" onChange={mudService}>
          <option value="">serviço</option>
          <option value="site">Site</option>
          <option value="aplicativo">Aplicativo</option>
          <option value="seo">SEO</option>
          <option value="social midia">Social Midia</option>
        </select>
      </div>
      <div className={styles.itemSelect}>
        <select name="clientes" id="clientes" onChange={mudClientes}>
          <option value="">clientes</option>
          <option value="longevidade">longevidade</option>
          <option value="sedafio">sedafio</option>
          <option value="gradiente">grupo gradiente</option>
          <option value="galvão">galvão</option>
        </select>
      </div>
    </section>
  );
}
