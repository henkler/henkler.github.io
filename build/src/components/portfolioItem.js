import React from 'react';

const colorClasses = [
  { cardClass: 'card-primary', btnClass: 'btn-success' },
  { cardClass: 'card-success', btnClass: 'btn-danger' },
  { cardClass: 'card-info', btnClass: 'btn-primary' },
  { cardClass: 'card-warning', btnClass: 'btn-info' },
  { cardClass: 'card-danger', btnClass: 'btn-warning' }
];

function getCardColorClass(index) {
  return colorClasses[index % colorClasses.length].cardClass;
}

function getBtnColorClass(index) {
  return colorClasses[index % colorClasses.length].btnClass;
}

const PortfolioItem = (props) => (
  <div
    className={`card card-inverse text-xs-center ${getCardColorClass(props.index)}`}
    style={{ height: '250px' }}
  >
    <div className="card-block">
      <h4 className="card-title text-uppercase">{props.item.title}</h4>
      <h6 className="card-subtitle text-muted">{props.item.subtitle}</h6>
    </div>

    <div className="card-block pull-bottom">
      <a href={props.item.viewURL}
        className={`btn ${getBtnColorClass(props.index)}`}
        role="button"
        target="_blank"
      >View
      </a>
      <a href={props.item.sourceURL}
        className={`btn ${getBtnColorClass(props.index)}`}
        role="button"
        target="_blank"
      >Source
      </a>
    </div>
  </div>
);

PortfolioItem.defaultProps = {
  index: 0
};

PortfolioItem.propTypes = {
  item: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    viewURL: React.PropTypes.string.isRequired,
    sourceURL: React.PropTypes.string.isRequired
  }),
  index: React.PropTypes.number
};

export default PortfolioItem;
