import React, { useEffect, useState } from 'react';

interface Show {
  id: number;
  original_name: string;
  first_air_date: string;
  backdrop_path: string;
  vote_average: number;
  genres: Genre[];
  status: string;
  overview: string | null;
  poster_path: string;
  seasons: Season[];
  cast: Actor[];
  homepage: string;
}

interface Genre {
  name: string;
}

interface Season {
  season_number: number;
  episode_count: number;
  poster_path: string;
}

interface Actor {
  name: string;
  character: string;
  profile_path: string;
}

interface Props {
  show: Show;
}

const ViewController: React.FC<Props> = ({ show }) => {
  const [cast, setCast] = useState<Actor[]>([]);

  useEffect(() => {
    const fetchCast = async () => {
      const response = await ShowService.getCast(show.id);
      setCast(response.cast);
    };

    fetchCast();
  }, [show.id]);

  const setBannerImage = () => {
    return {
      background: 'url() no-repeat',
      backgroundSize: '100%',
      backgroundPosition: '100% 0%',
    };
  };

  return (
    <>
      <div className="view-banner" preload-bg-image={`http://image.tmdb.org/t/p/original/${show.backdrop_path}`} default-image="assets/images/shattered.png"></div>
      <div className="view-title">
        <div className="container">
          {show.original_name} ({show.first_air_date})
          <ul className="pull-right">
            <li>
              <span className="icon icon-heart3"></span> {show.vote_average}
            </li>
            <li>
              <span className="icon icon-tags"></span>{' '}
              {show.genres.map((genre, index) => (
                <span key={index}>
                  {genre.name}
                  {index === show.genres.length - 1 ? '' : ', '}
                </span>
              ))}
            </li>
            <li>
              <span className="icon icon-info2"></span> {show.status}
            </li>
          </ul>
        </div>
      </div>
      <div className="view-container">
        <h2>Show Summary</h2>
        <div className="view-section view-top" data-ng-switch="view.show.overview != null">
          <div className="poster">
            <img
              preload-image
              default-image="assets/images/loading.jpg"
              fallback-image="assets/images/fallback-thin.jpg"
              src={`http://image.tmdb.org/t/p/w342/${show.poster_path}`}
            />
          </div>
          <p>{show.overview}</p>
          <p className="no-overview">No overview is available for this show</p>
          <div className="buttons">
            <a href={show.homepage} target="_blank" className="btn btn-lg btn-info">
              <span className="icon icon-home"></span> Homepage
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
        <h2>Seasons</h2>
        <div className="view-section" data-ng-switch="view.show.seasons.length > 0">
          <ul className="view-list">
            {show.seasons.length > 0 ? (
              show.seasons.map((season) => (
                <li key={season.season_number} data-ng-if="season.episode_count > 0">
                  <img
                    preload-image
                    default-image="assets/images/loading.jpg"
                    fallback-image="assets/images/fallback-thin.jpg"
                    src={`http://image.tmdb.org/t/p/w185/${season.poster_path}`}
                  />
                  <div className="item-info">
                    <div className="col-md-2">#{season.season_number}</div>
                    <div className="col-md-10">Episode Count: {season.episode_count}</div>
                  </div>
                </li>
              ))
            ) : (
              <p className="no-data">No season information available</p>
            )}
          </ul>
        </div>
        <h2>Cast</h2>
        <div className="view-section cast-container" data-ng-switch="view.show.cast.length > 0">
          <ul className="view-list">
            {cast.length > 0 ? (
              cast.map((actor) => (
                <li key={actor.name}>
                  <img
                    preload-image
                    default-image="assets/images/loading.jpg"
                    fallback-image="assets/images/fallback-thin.jpg"
                    src={`http://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                  />
                  <div className="item-info">
                    {actor.name} as <br />
                    <strong>{actor.character}</strong>
                  </div>
                </li>
              ))
            ) : (
              <p className="no-data">No cast information available</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViewController;
