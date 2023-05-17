import React from "react";
import SearchBar from "./components/SearchBar";

// step 1 refactoring functional component to class based component

class App extends React.Component {
  // define callback function on app 
  onSearchSubmit(term){
    console.log(term);

  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitData={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
