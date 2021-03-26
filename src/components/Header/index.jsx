import styles from '../../../styles/components/Header/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoHeader}>
        <img src="/assets/images/logo.svg" alt="" />
      </div>
      <div className={styles.menuHeader}>
        <nav>
          <ul>
            <li>HOME</li>
            <li>SOBRE</li>
            <li>TRABALHOS</li>
            <li>CONTATO</li>
            <li><img src="/assets/images/search.png" alt="" /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
