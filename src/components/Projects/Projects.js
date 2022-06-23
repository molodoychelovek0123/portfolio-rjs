// Блок проекты

import React from 'react'
import config from "../../AppConfig";
import ProjectItem from "./ProjectItem";

export default class Projects extends React.Component {
    projects = [];
    state = {loaded: false}

    constructor(props) {
        super(props);
        this.state={loaded: false}

    }
    componentDidMount() {
        if(!this.state.loaded)
        fetch('projects.json').then(response => response.json()).then(data => {this.projects = data;this.setState({loaded: true})});
    }
    componentDidUpdate() {
        if(!this.state.loaded)
        fetch('projects.json').then(response => response.json()).then(data => {this.projects = data;this.setState({loaded: true})});
    }
    render() {
        return (
            <section className="projects" id="projects">
                <div className="container">
                    <h3>{config.name} / projects</h3>
                    {this.state.loaded ?
                        (
                            <ul className="projects-wrapper">
                                {this.projects.map((project, index) => {
                                    return <ProjectItem name={project.name} url={project.url} image={project.image}
                                                        key={index}/>
                                })}
                            </ul>
                        )
                        :
                        (
                            <div> Loading... </div>
                        )
                    }

                </div>
            </section>
        )
    }
}