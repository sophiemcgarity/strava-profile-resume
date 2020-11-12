import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faGit, faJs, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.educationData = props.educationData;
        this.socialData = props.socialData;
        this.projectsData = props.projectsData;
    }
    render() {
        return (
            <section className="page">
                <div className="main">
                    <ul className="tabs">
                        <li className="selected" eventKey="home" title="Skills">
                            <a class="tab">Overview</a>
                        </li>
                    </ul>
                
                    <div className="skills">
                        <h2>Skills</h2>
                        <div className="icons">
                            <ul>
                                <li>
                                    <FontAwesomeIcon className="fa-4x" icon={faHtml5}/>
                                    <div className="skillInfo">
                                        <p>HTML5</p>
                                    </div>
                                    
                                </li>
                                <li>
                                    <FontAwesomeIcon className="fa-4x" icon={faCss3Alt} />
                                    <div className="skillInfo">
                                        <p>CSS3</p>
                                    </div>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="fa-4x" icon={faJs} />
                                    <div className="skillInfo">
                                        <p>JavaScript</p>
                                    </div>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="fa-4x" icon={faReact} />
                                    <div className="skillInfo">
                                        <p>React</p>
                                    </div>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="fa-4x" icon={faGit} />
                                    <div className="skillInfo">
                                        <p>Git</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="projects">
                        <h2 id="projects">Projects</h2>
                        {
                            this.projectsData.map((project, index) => (
                                <div key={index}>
                                    <h3>{project.project}</h3>
                                    <p>{project.description}</p>
                                    <p><a href={project.link}>Github repo</a></p>
                                </div>
                            ))
                        }
                        <a id="jungleWebsiteLink" href="https://sophiemcgarity.github.io/junglegame-react/home">Website</a>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="education">
                        <h3 id="education">Education</h3>
                        {
                            this.educationData.map((edu, index) => (
                                <div className="education" key={index}>
                                    <h4>{edu.school}</h4>
                                    <p>
                                        {edu.degree}<br />
                                        {edu.location}<br />
                                        {edu.dates}<br />
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="social">
                        <h3 id="social">Social</h3>
                        <div id="socialIcons">
                            <a href={this.socialData.linkedin}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href={this.socialData.github}>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>  
            </section>
        );
    }
}

export default Skills;