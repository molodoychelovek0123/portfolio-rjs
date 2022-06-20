import React from "react";
import PropTypes from "prop-types";

export default class ProjectItem extends React.Component {
  state = {
    loaded: false,
  };
  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string.isRequired,
  };

  render() {
    return (
      <React.Fragment>
          <li className="project-item card">
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
