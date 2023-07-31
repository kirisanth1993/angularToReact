import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <header id="site-header">
        <div className="container">
          <div className="pull-left logo">ANGULARJS <span className="alt">BY</span> EXAMPLE</div>
          <ul className="pull-right menu">
            <li><a href="#/">HOME</a></li>
            <li><a href="#/premieres">PREMIERES</a></li>
            <li><a href="#/popular">POPULAR</a></li>
            <li><a href="#/search">SEARCH</a></li>
          </ul>
        </div>
      </header>

      <section id="site-bar">
        <div className="container">
          <h1>{bar.data.title}</h1>
          <p>{bar.data.description}</p>
        </div>
        <div className="page-loader" style={{ display: bar.data.loading ? 'block' : 'none' }}>
          <div className="throbber"></div>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <ng-view></ng-view>
        </div>
      </section>
    </div>
  );
};

export default App;
