import Link from 'next/link';
import css from './NavBar.module.scss';

const PROJECTS = ['angular', 'react', 'vue3', 'qwik'];

const Navbar = async () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        {PROJECTS.map((item) => (
          <li className={css.item} key={item}>
            <Link href='#' className={css.link}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
