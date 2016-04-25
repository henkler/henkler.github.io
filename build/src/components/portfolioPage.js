import React from 'react';
import PortfolioProjects from './portfolioProjects';
import { Projects } from '../data/projectData';

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0
    };
  }
  _getButtonClasses(index) {
    let classes = 'btn btn-lg ';
    if (this.state.activeTabIndex === index) {
      classes += 'btn-primary';
    } else {
      classes += 'btn-secondary';
    }

    return classes;
  }
  _renderProjectGroupButtons() {
    return (
      Projects.map((projectGroup, index) => (
        <button
          type="button"
          key={`projectGroupButton${index}`}
          className={this._getButtonClasses(index)}
          onClick={() => this.setState({ activeTabIndex: index })}
        >
          {projectGroup.title}
        </button>
      ))
    );
  }
  render() {
    return (
      <div className="app-page" id="portfolio-page">
        <div className="jumbotron text-xs-center">
          {this._renderProjectGroupButtons()}
          <br />
          <h2>{Projects[this.state.activeTabIndex].description}</h2>
        </div>

        <PortfolioProjects projects={Projects[this.state.activeTabIndex].projects} />
      </div>
    );
  }
}

export default PortfolioPage;
