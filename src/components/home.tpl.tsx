import React from 'react';

type Tutorial = {
  title: string;
  description: string;
  link: string;
};

const tutorials: Tutorial[] = [
  {
    title: "INTRODUCTION",
    description: "An introduction to the AngularJS by example application and the tutorial series. All about why this project exists, what the tutorial series is likely to include and who the tutorials are for.",
    link: "http://www.revillweb.com/angularjs-by-example/1-introduction/"
  },
  {
    title: "PROJECT STRUCTURE & MODULARITY",
    description: "Looking at project structure in terms of AngularJS modularity and also how best to lay out your directories to make development a breeze.",
    link: "http://www.revillweb.com/angularjs-by-example/2-project-structure/"
  },
  {
    title: "CONTROLLERS",
    description: "Investigating the different ways you can write AngularJS controllers along with recommended best practices.",
    link: "http://www.revillweb.com/angularjs-by-example/3-controllers/"
  },
  {
    title: "SHARING DATA WITH ANGULARJS SERVICES",
    description: "The fourth part in the AngularJS by Example series showing how to use AngularJS services to consume a third-party API and share data throughout your entire application.",
    link: "http://www.revillweb.com/angularjs-by-example/4-sharing-data-with-angularjs-services/"
  },
  {
    title: "WRITING DIRECTIVES",
    description: "Theories behind directive design and how to best implement them within your application.",
    link: "#"
  },
  {
    title: "BUILD PROCESS",
    description: "So you have an awesome AngularJS app, how do you get it ready for production and deployment? Using Gulp & GitFlow to get the job done.",
    link: "#"
  }
];

const HomeController: React.FC = () => {
  return (
    <div className="home-frame">
      <div className="home-banner">
        <div className="container inner">
          <img className="hidden-sm hidden-xs" src="assets/images/angular.png" width="400" height="400" />
          <h1>LEARN ANGULARJS <span>THE EASY WAY</span>.</h1>
          <h2>Learn how to build superb AngularJS web applications using real world best practice examples coupled with in-depth tutorials from <a href="#">revillweb.com</a>.</h2>
          <p>This website is a living and breathing AngularJS web application built using recommended best practices. <strong>AngularJS by example</strong> provides you with a complete application demonstrating recommended best practices from app structure all the way through to production deployment.</p>
          <div className="home-buttons">
            <a href="https://github.com/RevillWeb/angularjs-by-example" target="_blank" className="btn btn-lg btn-primary"><span className="icon icon-github2"></span> GitHub</a>
            <a href="http://www.revillweb.com" target="_blank" className="btn btn-lg btn-default"><span className="icon icon-home"></span> RevillWeb</a>
          </div>
        </div>
      </div>
      <div className="clearbanner"></div>
      <div className="tutorials-title">
        <div className="container">
          ARTICLES & TUTORIALS
          <div className="hidden-xs share-buttons">
            <div className='shareaholic-canvas' data-app='share_buttons' data-app-id='15135403'></div>
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="tutorials">
          {tutorials.map((tutorial, index) => (
            <li key={index} className={tutorial.link === '#' ? 'offline' : ''}>
              <div className="number">#{index + 1}</div>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <a href={tutorial.link} className={tutorial.link === '#' ? 'disabled' : ''} className="btn btn-lg btn-primary"><span className="icon icon-arrow-up-right5"></span> View</a>
              <div className="clearfix"></div>
            </li>
          ))}
        </ul>
        <p className="no-data tuts">More tutorials coming soon...</p>
      </div>
    </div>
  );
};

export default HomeController;
