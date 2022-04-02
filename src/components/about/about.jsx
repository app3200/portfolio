import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import "./about.css";

const About = () => {
  const { photo, name, role, description1, resume, social,description2 } = about;
  return (
    <div className="about center">
      {photo && (
        <div className="about__img">
          <img id="profile" alt="Profile" src={photo.photo} />
        </div>
      )}
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}

      <h2 className='section__title' id="about" >About</h2>

      <p className="about__desc">{description1}</p>
      <p className="about__desc">{description2}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume} target="_blank" rel="noreferrer">
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
