import styles from './SliderHome.module.scss'

export default function SliderHome() {
    return (
        <section className={styles.sliderHomeWrapper}>
            <div className={styles.textSlider}>
                <p>TRANSFORME O <br />
                PROPÓSITO DA <br />
                SUA MARCA!</p>
                <a href="">CONHEÇA NOSSOS TRABALHOS</a>
            </div>
        </section>
    );
}
