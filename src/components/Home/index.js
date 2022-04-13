import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-2.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['D', 'a', 'm', ' ', 'T', 'i', 'e', 'n', ' ', 'N', 'a', 'm']
  const hiArray = ['X', 'i', 'n', ' ', 'C', 'h', 'a', 'o,']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
  
  useEffect(()=>{
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000);
  })
  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={11} />
          <br />
          <span className={`${letterClass} _19`}>I</span>
          <span className={`${letterClass} _20`}>'m</span>
          <span className={`${letterClass} _21`}> </span>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={22} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={35} />
        </h1>
        <h2>Frontend Developer / JavaScript Expert / Fresher</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo/>
    </div>
    {/* <Loader type='pacman'/> */}
    </>
  )
}
export default Home