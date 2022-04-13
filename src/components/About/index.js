import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  })
  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
          </h1>
          <p>My name is Đàm Tiến Nam, and my portfolio is a representation of all that I've learned and accomplished as a science and engineering student.</p>
          <p>I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
          <p>If I need to define myself in the one sentence that would be an active person, a gud boiz, a sports fanatic, a photography enthusiast, and tech-obsessed! :3</p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#dd0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#f06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#F1502F' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />

    </>
  )
}

export default About