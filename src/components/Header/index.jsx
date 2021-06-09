import Link from 'next/link';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoHeader}>
        <img src="/assets/images/logo.svg" alt="" />
      </div>
      <div className={styles.menuHeader}>
        <nav>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <a href="/sobre-nos">SOBRE</a>
            </li>
            <li>
              <Link href="/trabalhos">TRABALHOS</Link>
            </li>
            <li>
              <Link href="/contato">CONTATO</Link>
            </li>
            {/* <li>
              <img src="/assets/images/search.png" alt="" />
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
