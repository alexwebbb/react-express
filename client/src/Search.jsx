import React from 'react';
import preload from './data.json';


const Search = () => (
    <div className="search">
        <div>
            {preload.shows.map(show => (
                <div className="show-card">
                    {/* wow look at this hideous comment type
                        at least it is multi line
                        public url variable uses the "unsafe" public folder
                        react hq would prefer you import images individually
                        need to figure out how to import images as a bundle
                    */}
                    <img alt={`${show.title} Show Poster`} src={`./img/posters/${show.poster}`} />
                    <div>
                        <h3>{show.title}</h3>
                        <h4>({show.year})</h4>
                        <p>{show.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Search;