import React from 'react';

const AboutPage = () => (
  <div className="app-page" id="about-page">
    <div className="jumbotron text-xs-center">
      <h1 className="text-center">About Matthew Henkler</h1>
      <img
        className="avatar"
        src="https://avatars1.githubusercontent.com/u/10156666?v=3&s=460"
        role="presentation"
      />
      <blockquote className="blockquote blockquote-reverse text-xs-right">
        <h1>Just this guy, you know?</h1>
        <footer className="blockquote-footer">Zaphod Beeblebrox</footer>
      </blockquote>
    </div>
    <div className="card card-inverse card-dark">
      <div className="card-block">
        <h3 className="card-title">More</h3>
        <p className="card-text">
          If you really want to know more, check out LinkedIn, or visit the Contact Page
        </p>
        <a
          href="https://www.linkedin.com/in/henkler/"
          className="btn btn-primary"
          target="_blank"
          role="button"
        >Profile</a>
      </div>
    </div>
  </div>
);

export default AboutPage;
