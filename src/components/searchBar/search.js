import React from 'react';

class VideoSearchBar extends React.Component {
    state = { term: '' };

    searchBarSubmit = (event) => {
        event.preventDefault();
        this.props.whenSearchSubmit(this.state.term)
    }
    onSearchValueChange(event) {
        this.setState({ term: event.target.value })
        console.log(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.searchBarSubmit} autoComplete='off'>
                <lable htmlFor="search">Search</lable>
                <input
                    type="text"
                    name="search"
                    value={this.state.term}
                    onChange={(e) => this.onSearchValueChange(e)}
                />
            </form>
        )
    }
}
export default VideoSearchBar;