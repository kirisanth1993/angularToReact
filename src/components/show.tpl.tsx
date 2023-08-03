import React from 'react';

type Genre = {
  name: string;
};

type Show = {
  backdrop_path: string;
  first_air_date: string;
  original_name: string;
  vote_average: number;
  origin_country: string[];
  id: string;
};

type Props = {
  show: Show;
  genres: Genre[];
};

const ShowFrame: React.FC<Props> = ({ show, genres }) => {
  return (
    <div className="show-frame">
      <ul className="genres">
        {genres.map((genre, index) => (
          <li
            key={index}
            className="animate-repeat"
            style={{
              backgroundColor: `rgba(59, 185, 187, ${genres.length / (index + 1) / 5})`,
            }}
          >
            {genre.name}
          </li>
        ))}
      </ul>
      <img
        preload-image
        default-image="assets/images/loading.jpg"
        fallback-image="assets/images/fallback.jpg"
        src={`http://image.tmdb.org/t/p/w780/${show.backdrop_path}`}
      />
      <div className="date label label-dark">
        <span className="icon icon-calendar"></span> {show.first_air_date}
      </div>
      <h2>{show.original_name}</h2>
      <div className="inner">
        <ul className="info">
          <li className="col-xs-6 rating">
            <span className="icon icon-heart3"></span> {show.vote_average}
          </li>
          <li className="col-xs-6 country">
            <span className="icon icon-earth"></span>{' '}
            {show.origin_country.map((country, index) => (
              <span key={index}>
                {country}
                {index === show.origin_country.length - 1 ? '' : ', '}
              </span>
            ))}
            {show.origin_country.length === 0 && <span>--</span>}
          </li>
          <div className="clearfix"></div>
        </ul>
        <div className="buttons">
          <a href={`#/view/${show.id}`} className="btn btn-info">
            <span className="icon icon-arrow-right7"></span> View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowFrame;
