import React from "react";

// class based component
class SearchBar extends React.Component {
  // we initialize the state object with epmty
  state = { term: "" };
  // onInputChange = (event) => {
  //   // if some type in this input this onInputChange callback function will be called
  //   // this call back has one parameter automatically
  //   console.log(event.target.value);
  // };
  //I am going to define new call back
  //   onInputClick = () => {
  //     console.log("input was clicked");
  //   };

  // second way to solve the problem
  // used arrow function insted anonymous function
  //the features of arrow function is that automatially bind the value of this for all code inside of this function

  onFormSubmit(event) {
    event.preventDefault();
    // console.log(this.state.term);

    // one little issue here everytime we have made to props
    //it always been a functional component so here is a class based component

    // one little difference between class based component and function based component that is
    //we this.props in class component that means we use this before props but in functional we use pros.

    // takes the props object and call the function and pass data
    this.props.onSubmitData(this.state.term);
  }

  //making like this another ways
  // {/* <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}> */}

  render() {
    return (
      <div className="ui segment">
        {/* we just passed arr function directly */}
        {/* <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}> */}
        {/* here arrow function class at time */}
        {/* <form className="ui form" onSubmit={event => this.onFormSubmit(event)}> */}
        <form
          className="ui form"
          onSubmit={(event) => this.onFormSubmit(event)}
        >
          <div className="field">
            <label>Image Search</label>

            {/* this is uncontrolled form element so u and i as a react developer prefer to work with control component
             */}
            {/* <input type="text" onChange={this.onInputChange} /> */}
            {/* rather than passing an reference to onInputChange */}
            {/* alternative way to replacing with arrow function*/}
            {/* <input type="text" onChange={(e)=>console.log(e.target.value)} /> */}

            {/* value={this.state.term} is equal to */}
            {/* this is control element */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
