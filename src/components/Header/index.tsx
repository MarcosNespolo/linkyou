import Link from 'next/link';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href={`/`}>
        <a><img width="40px" height="40px" src="/chaingreen.png" alt="LinkYou" /><span>Link You</span></a>
      </Link>
      <p>Software e Integração</p>
    </header>
  );
}