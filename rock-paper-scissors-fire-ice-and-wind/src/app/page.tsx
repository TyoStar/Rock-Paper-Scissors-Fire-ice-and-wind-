'use client'
import Background from './components/Fondo/page';
import 'src/app/pageindex.css';
import Link from 'next/link';
import PageTransition from './components/transition/page';
const Inicio = () => {
  return (
    <PageTransition>
    <div>
    <Background />
        <div className='linea1'></div>
        <div className='linea2'></div>
        <div className='linea3'></div>
        <div className='linea4'></div>
        <img className='scissorsinit' alt="scissors" src="image 6.png" />
        <img className='waterinit' alt="water" src="image 9.png" />
        <img className='paperinit' alt="paper" src="image 8.png" />
        <img className='fireinit' alt="fire" src="image 10.png" />
        <img className='rockinit' alt="rock" src="image 7.png" />
        <img className='iceinit' alt="ice" src="image 11.png" />
        <img className='windinit' alt="wind" src="image 12.png" />
        <div className='tittle'>
        Rock, Paper, Scissors, Fire, ice, water, and wind???
        <Link href={'/Vista'}>
        <button className='playbutton'>
        PLAY
        </button>
        </Link>
        </div>
    </div>
    </PageTransition>
  );
};


export default Inicio;