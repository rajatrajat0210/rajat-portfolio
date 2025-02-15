import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/gitlab.png';
import hipsster from '../../assets/ollama.png';
import fitLift from '../../assets/docker1.png';
import freshBurger from '../../assets/terraform.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return ( 
  <section id="projects" className={styles.container}> 
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard src={Viberr} link="https://github.com/rajatrajat0210/CI-CD_Gitlab_AWS_Deployement"
       h3="Gitlab-CI/CD"
       p="Deployment App"
       />
      <ProjectCard src={hipsster} link="https://github.com/rajatrajat0210/AI-Portfolio-Chatbot"
       h3="Portfolio Chatbot"
       p="AI App"
       />
      <ProjectCard src={fitLift} link="https://github.com/rajatrajat0210/Devops_Proj"
       h3="Jenkins/AWS"
       p="Docker Project"
       />
       <ProjectCard src={freshBurger} link="https://github.com/rajatrajat0210/Staticwebsite-Terraform-Deployed"
       h3="Terraform-SW3"
       p="Static-Website Project"
       />


      </div>

    </section>
  );
}

export default Projects;
