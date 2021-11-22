import React from 'react';

class VideoSearchBar extends React.Component {
    state = { term: '' };

    searchBarSubmit = (event) => {
        event.preventDefault();
        this.props.whenSearchSubmit(this.state.term)
    }
    onSearchValueChange(event) {
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            // <form onSubmit={this.searchBarSubmit} autoComplete='off'>
            //     <lable htmlFor="search">Search</lable>
            //     <input
            //         type="text"
            //         name="search"
            //         value={this.state.term}
            //         onChange={(e) => this.onSearchValueChange(e)}
            //     />
            // </form>

            <div className="ui segment">
                {/* <form className="ui form" onSubmit={(event) => this.onSearchSubmit(event)}> */}
                <form className="ui form" onSubmit={this.searchBarSubmit} autoComplete='off'>
                    <div className="field">
                        <label>Search Images</label>
                        {/* this will also work as exactly same as below */}
                        {/* <input type="text" placeholder="Search Images" onChange={this.onInputChange} /> */}
                        <input type="text"
                            placeholder="Search Images"
                            value={this.state.term}
                            onChange={(e) => this.onSearchValueChange(e)} />
                    </div>
                </form>
            </div>
        )
    }
}
export default VideoSearchBar;