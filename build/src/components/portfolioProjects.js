import React from 'react';
import PortfolioItem from './portfolioItem';

const PortfolioProjects = (props) => (
  <div>
    {props.projects.map((item, index) => (
      <div className="col-xl-3 col-md-6 col-sm-12" key={`portfolioItem${index}`}>
        <PortfolioItem
          item={item}
          index={index}
        />
      </div>
    )
    )}
  </div>
);

PortfolioProjects.propTypes = {
  projects: React.PropTypes.array.isRequired
};

export default PortfolioProjects;
