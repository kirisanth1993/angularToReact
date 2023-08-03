import React from 'react';

interface Show {
  // Define the properties of a show
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface PremieresControllerProps {
  shows: Show[];
}

const PremieresController: React.FC<PremieresControllerProps> = ({ shows }) => {
  // Set page title and description
  document.title = "PREMIERES";
  const description = "Brand new shows showing this month.";

  return (
    <div>
      <h1>{document.title}</h1>
      <p>{description}</p>
      <ul className="list-of-shows">
        {shows.map((show) => (
          <li key={show.id} className="col-xs-6 col-md-4">
            <Show show={show} />
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ShowProps {
  show: Show;
}

const Show: React.FC<ShowProps> = ({ show }) => {
  return (
    <div>
      <h2>{show.title}</h2>
      <p>{show.description}</p>
      <img src={show.imageUrl} alt={show.title} />
    </div>
  );
};

export default PremieresController;
