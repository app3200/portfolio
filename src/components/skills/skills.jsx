import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './skills.css'


const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <div className='section__title'>Skills</div>
      <div className='skills__list'>
        {skills.map((skill) => (
          <div className='skills__list-item btn btn--plain' id="skillIcon" key={uniqid()}> 
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
