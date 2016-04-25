import React from 'react';
import TopNavigation from './topNavigation';

const MainLayout = (props) => (
  <div className="container-fluid">
    <TopNavigation />
    { props.children }
  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.object
};

export default MainLayout;
