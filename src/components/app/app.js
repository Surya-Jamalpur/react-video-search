import React from 'react';
import VideoSearchBar from "../searchBar/search"



class App extends React.Component{
    key = 'AIzaSyDuap_736-w7Kwx5o23MOQyhoFPilPQ7zQ';
    searchSubmit = (term) => {
        console.log(term);
    }
render(){
    return (
        <div>
        <h1>Am App component..!</h1>
        <VideoSearchBar whenSearchSubmit={this.searchSubmit} />
        </div>
    )
}
    
}
export default App;