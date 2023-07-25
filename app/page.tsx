import Image from 'next/image';
import css from './page.module.scss';
import NavBar from '@/src/components/layout/NavBar/NavBar';

export default function Home() {
  return (
    <main className={css.main}>
      <h1 className='visually-hidden'>my site</h1>
      <NavBar />
    </main>
  );
}
