import React from "react";
// use third party packages
import axios from "axios";
import SearchBar from "./components/SearchBar";
// step 1 refactoring functional component to class based component

class App extends React.Component {
  // define callback function on app

  // after using promise we use asyn wait - which is alternative way 
  async onSearchSubmit(term) {
    // console.log(term);

    // inorder to make a get rquest with axios
    //WE will call axios.get
    // get() takes two separate argument
    // first argument is address we want to make a get request to
    // second argument is obeject

    //https://api.unsplash.com/search/photos?query=myterm
    // when we make a request with axios and return an object called a promise
    // when request on completed then we chhain on using then() function 
// we pass an call back function arrow function may call in some point of time in future
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID xrl-meyxoQn1LRguAnQ83JHlLFK9CZbPS61GXzoqED8 ",
      },
    }) 
    //using promise and handle using then function
    // .then((response)=>{
    //   console.log(response.data.results);
    // });
    console.log(response.data.results);

  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitData={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
