import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.copyrightFooter}>
                <p>©2021 AGÊNCIA LBM | TODOS OS DIREITOS RESERVADOS</p>
            </div>
            <div className={styles.socialFooter}>
                <div className={styles.facebook}>
                    <a href="#">
                        <img src="/assets/images/facebook.png" alt="" />
                    </a>
                </div>
                <div className={styles.instagram}>
                    <a href="#">
                        <img src="/assets/images/instagram.png" alt="" />
                    </a>
                </div>
                <div className={styles.linkedin}>
                    <a href="#">
                        <img src="/assets/images/linkedin.png" alt="" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
