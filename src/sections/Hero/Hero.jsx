import styles from './HeroStyles.module.css';
import heroImg from "../../assets/rajatpp.png";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from "../../assets/Rajat_Resume_CompEngDev.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
    const {theme,toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
    <section id="hero" className={styles.container}>
     <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture of Rajat" />
        <img className={styles.colorMode} src={themeIcon} alt="Color Mode icon" onClick={toggleTheme} />
     </div>
     <div className={styles.info}>
        <h1>
            Rajat
        </h1>
        <h2>Software developer</h2>
        <span>
            <a href="https://www.twitter.com/" target="_blank">
            <img src={twitterIcon} alt="twitterIcon" />
            </a>
            <a href="https://www.linkedin.com/in/rajat-rajat12/" target="_blank">
            <img src={linkedinIcon} alt="LinkedinIcon" />
            </a>
            <a href="https://github.com/rajatrajat0210" target="_blank">
            <img src={githubIcon} alt="githubIcon" />
            </a>
        </span>
        <p className={styles.description}>A Software Developer & DevOps Enthusiast with experience in automation, cloud computing, and system administration. Builds scalable applications using Python, Java, Docker, Kubernetes, and AWS. Check out the projects! 🚀</p>
        <a href={CV} download>
            <button className="hover" >
                Resume
            </button>
        </a>
     </div>
    </section>
  );
}

export default Hero;
