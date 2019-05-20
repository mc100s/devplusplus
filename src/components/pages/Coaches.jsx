import React from 'react'
import ThugPicture from '../ThugPicture'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faLinkedin)


export default function Coaches() {
  return (
    <div>
      <h1>The Coach</h1>
      <div className="coach-card">
        <h3 className="coach-card__title">Maxence Bouret</h3>
        <ThugPicture className="coach-card__img" name="maxence" />
        <p className="coach-card__content">He fell in love with coding when he was 14 he never stopped since. He worked as a web developer in 4 different countries in Europe and he is currently a Lead Teacher in Web Developement at Ironhack.</p>
        <div className="coach-card__links">
          <a className="coach-card__link" href="https://www.linkedin.com/in/bouretm/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a className="coach-card__link" href="https://github.com/mc100s" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </div>
      </div>
    </div>
  )
}
