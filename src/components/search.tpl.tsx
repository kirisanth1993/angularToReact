import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ShowService from './ShowService';

interface Show {
  // Define the properties of a show
  id: number;
  name: string;
  // Add other properties as needed
}

const SearchController: React.FC = () => {
  const history = useHistory();
  const { query } = useParams<{ query: string }>();
  const [searchQuery, setSearchQuery] = useState<string>(query || '');
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    if (query) {
      performSearch(query);
      setSearchQuery(decodeURI(query));
    }
  }, [query]);

  const setSearch = () => {
    const encodedQuery = encodeURI(searchQuery);
    history.push(`/search/${encodedQuery}`);
  };

  const performSearch = (query: string) => {
    setLoading(true);
    ShowService.search(query).then((response: Show[]) => {
      setShows(response);
      setLoading(false);
    });
  };

  return (
    <div>
      <div className="search-top">
        <div className="input-group">
          <input
            type="text"
            className="form-control input-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSearch();
              }
            }}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-info btn-lg search-btn"
              type="button"
              disabled={!searchQuery}
              onClick={setSearch}
            >
              <span className="glyphicon glyphicon-search"></span> Search
            </button>
          </span>
        </div>
      </div>
      <div className="search-results">
        <div className="no-data" style={{ display: loading === null ? 'block' : 'none' }}>
          Use the search box above to find your favorite TV shows
        </div>
        <div className="no-data" style={{ display: shows.length === 0 && loading === false ? 'block' : 'none' }}>
          Your search did not return any results
        </div>
        <div className="throbber" style={{ display: loading ? 'block' : 'none' }}></div>
        <ul className="list-of-shows" style={{ display: loading === false ? 'block' : 'none' }}>
          {shows.map((show) => (
            <li key={show.id} className="col-xs-6 col-md-4 repeat-animation">
              <Show show={show} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchController;
