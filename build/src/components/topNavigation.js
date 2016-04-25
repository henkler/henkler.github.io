import React from 'react';
import { Link } from 'react-router';

const TopNavigation = () => (
  <nav className="navbar navbar-fixed-top navbar-dark bg-inverse" id="top-nav">
    <button
      className="navbar-toggler hidden-sm-up"
      type="button"
      data-toggle="collapse"
      data-target="#bs-example-navbar-collapse-1"
    >&#9776;
    </button>
    <div className="collapse navbar-toggleable-xs" id="bs-example-navbar-collapse-1">
      <a className="navbar-brand" href="#">Matthew Henkler</a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClassName="active"
            to="/intro"
          >Intro
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClassName="active"
            to="/about"
          >About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClassName="active"
            to="/portfolio"
          >Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClassName="active"
            to="/contact"
          >Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default TopNavigation;
