import React, { useContext } from 'react'

import { FilterContext } from '../../../context/Filter'

import styles from '../../../../styles/modules/Trabalhos/Filtro/Filtro.module.scss'

export default function Filtro() {
    const { services, setServices } = useContext(FilterContext)

    function mudService(event) {
        setServices(event.value)

        console.log(services)
    }


    return (
        <section className={styles.filtroWrapper}>
            <div className={styles.itemSelect}>
                <select name="servicos" id="servicos" onChange={mudService}>
                    <option value="servicos">serviços</option>
                    <option value="teste">serviços</option>
                    <option value="teste">serviços</option>
                </select>
            </div>
            <div className={styles.itemSelect}>
                <select name="clientes" id="clientes">
                    <option value="">clientes</option>
                    <option value="">clientes</option>
                    <option value="">clientes</option>
                </select>
            </div>
        </section>
    );
}
