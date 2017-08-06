import React from 'react'
import ShowCard from './ShowCard'
import preload from './data.json'

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: 'this is a debug statement'
        };

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }

    handleSearchTermChange(event) {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <div className='search'>
                <header>
                    <h1>{this.state.searchTerm}</h1>
                    <input
                        onChange={this.handleSearchTermChange}
                        value={this.state.searchTerm}
                        type="text"
                        placeholder="Search"
                    />
                </header>
                <div>
                    {preload.shows.map((show) => {
                        return (
                            <ShowCard {...show} key={show.imdbID} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Search