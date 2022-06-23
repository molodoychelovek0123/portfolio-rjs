// Карточка проекта

import React from "react";
import PropTypes from "prop-types";
import handleViewport from 'react-in-viewport';

class ProjectItemBlock extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string.isRequired,
  };
  baseClasses = ['project-item', 'card']
  getClasses() {
    const {inViewport} = this.props;
    if (inViewport) {
      return this.baseClasses.concat(['active']);
    } else {
      return this.baseClasses;
    }
  }

  render() {
      return (
      <React.Fragment>
          <li className={this.getClasses().join(" ")}>
            <a href={this.props.url}>
              <div className="card__overlay">
                <div className="card__text">
                  <h4>{this.props.name}</h4>
                </div>
              </div>

              <div className="card__image">
                <img src={this.props.image} alt={this.props.name} className="responsive-img" />
              </div>
            </a>
          </li>
      </React.Fragment>
    );
  }
}

const ProjectItem = handleViewport(ProjectItemBlock)

export default ProjectItem;