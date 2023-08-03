import React from 'react';

type Show = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

type PopularControllerProps = {
  shows: Show[];
};

const PopularController: React.FC<PopularControllerProps> = ({ shows }) => {
  return (
    <div className="trending-results">
      <div className="no-data" style={{ display: shows.length === 0 ? 'block' : 'none' }}>
        There are no popular shows available to display
      </div>
      <ul className="list-of-shows">
        {shows.map((show) => (
          <li key={show.id} className="col-xs-6 col-md-4 repeat-animation">
            <ShowComponent show={show} />
          </li>
        ))}
      </ul>
    </div>
  );
};

type ShowComponentProps = {
  show: Show;
};

const ShowComponent: React.FC<ShowComponentProps> = ({ show }) => {
  return (
    <div>
      <h3>{show.title}</h3>
      <p>{show.description}</p>
      <img src={show.imageUrl} alt={show.title} />
    </div>
  );
};

export default PopularController;
