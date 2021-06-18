import styles from './Banner.module.scss'

export default function Banner() {
    return (
        <section className={styles.bannerWrapper}>
            <img src='./assets/images/bgSobreNos.png' alt="" />
        </section>
    );
}
