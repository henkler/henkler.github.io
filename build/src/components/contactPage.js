import React from 'react';

const ContactPage = () => (
    <div className="app-page" id="contact-page">
      <div className="jumbotron text-xs-center">
        <h1 className="text-center v-center">Contact</h1>
        <i className="fa fa-compass fa-5x"></i>
      </div>
      <div classNam="card-deck-wrapper">
        <div className="card-deck text-xs-center">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Github</h4>
            </div>
            <div className="card-block">
              <span>
                <a
                  href="https://github.com/henkler/"
                  role="button"
                  target="_blank"
                  className="btn btn-primary"
                >Visit</a>
              </span>
            </div>
            <div className="card-footer">
              <i className="fa fa-github fa-3x"></i>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Twitter</h4>
            </div>
            <div className="card-block">
              <span>
                <a
                  href="https://twitter.com/henkler/"
                  role="button"
                  target="_blank"
                  className="btn btn-primary"
                >Visit</a>
              </span>
            </div>
            <div className="card-footer">
              <i className="fa fa-twitter fa-3x"></i>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Facebook</h4>
            </div>
            <div className="card-block">
              <span>
                <a
                  href="https://www.facebook.com/henkler"
                  role="button"
                  target="_blank"
                  className="btn btn-primary"
                >Visit</a>
              </span>
            </div>
            <div className="card-footer">
              <i className="fa fa-facebook fa-3x"></i>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">LinkedIn</h4>
            </div>
            <div className="card-block">
              <span>
                <a
                  href="https://www.linkedin.com/in/henkler/"
                  role="button"
                  target="_blank"
                  className="btn btn-primary"
                >Visit</a>
              </span>
            </div>
            <div className="card-footer">
              <i className="fa fa-linkedin fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default ContactPage;
