import styles from './Mapa.module.scss'

export default function MapaContato() {
    return (
        <section className={styles.mapaWrapper}>

            <div className={styles.tittleContato}>
                <h3>Entre em contato conosco</h3>
            </div>
            
            <div className={styles.headerContato}>
                <div className={styles.itemContato}>
                    <h3>Institucional</h3>
                    <p>contato@agencialbm.com.br</p>
                </div>
                <div className={styles.itemContato}>
                    <h3>Novos Negócios</h3>
                    <p>novosnegocios@agencialbm.com.br</p>
                </div>
                <div className={styles.itemContato}>
                    <h3>BANCO DE VAGAS</h3>
                    <p>rh@agencialbm.com.br</p>

                    <div className={styles.innerContato}>
                        <div className={styles.innerItemContato}>
                            <h5>NOSSO ESCRITÓRIO</h5>
                            <p>Av. Brigadeiro Faria Lima, 1597 Conjunto 701 - 7° andar <br />
                                Jardim Paulistano, São Paulo - SP, 01452-917</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mapaContato}>
                <img src="/assets/images/bgContato.png" alt="" />
            </div>
            
            <div className={styles.footerContato}>
                    <div className={styles.itemFooter}>
                        <p>
                            Contato
                        </p>
                    </div>
                    <div className={styles.itemFooterContato}>
                        <p>
                            +55 11 2639-8060
                        </p>
                    </div>
                    <div className={styles.itemFooterContato}>
                        <p>
                            +55 11 96862-2020
                        </p>
                    </div>
            </div>
        </section>
    );
}
