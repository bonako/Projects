import React, { Component, Button } from "react";
import Modal from "./modal";
import PopUp from "./PopUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../navbar.css";
import story from "./story";
import profile from "./profile";
// import ScriptTag from 'react-script-tag';

// const Demo = props => (
//     <ScriptTag type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />,
//     <ScriptTag type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />,
//     <ScriptTag type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
//     )

export default class view extends Component {
  state = {
    show: false,
    seen: false,
    first: true,
    second: true,
    third: true,
    fourth: true,
    likes: {
      first: 5,
      second: 4,
      third: 7,
      fourth: 9,
    },
  };
  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  stories = {
    first: true,
    second: true,
    third: true,
    fourth: true,
  };

  first = () => {
    this.setState({
      first: !this.state.first,
    });

    // if (document.getElementById("stories").className == "d-none") {
    //   document.getElementById("stories").className = "container bg-light p-3";
    //   document.getElementById("most-likes").className = "d-none";
    // } else {
        document.getElementById("stories").className = "table";
        document.getElementById("date-modified").className = "d-none";
        document.getElementById("success").className = "d-none";
        document.getElementById("failed").className = "d-none";
        document.getElementById("most-likes").className = "d-none";
        document.getElementById("mcmaster").className = "d-none";
        document.getElementById("toronto").className = "d-none";


        //     }
    };
    
    second = () => {
        this.setState({
            
        });
        document.getElementById("stories").className = "d-none";
        document.getElementById("date-modified").className = "table";
        document.getElementById("success").className = "d-none";
        document.getElementById("failed").className = "d-none";
        document.getElementById("most-likes").className = "d-none";
        document.getElementById("mcmaster").className = "d-none";
        document.getElementById("toronto").className = "d-none";



  }
  third = () => {
    this.setState({
        
    });
    document.getElementById("stories").className = "d-none";
    document.getElementById("date-modified").className = "d-none";
    document.getElementById("success").className = "table";
    document.getElementById("failed").className = "d-none";
    document.getElementById("most-likes").className = "d-none";
    document.getElementById("mcmaster").className = "d-none";
    document.getElementById("toronto").className = "d-none";


}
fourth = () => {
    this.setState({
        
    });
    document.getElementById("stories").className = "d-none";
    document.getElementById("date-modified").className = "d-none";
    document.getElementById("success").className = "d-none";
    document.getElementById("failed").className = "table";
    document.getElementById("most-likes").className = "d-none";
    document.getElementById("mcmaster").className = "d-none";
    document.getElementById("toronto").className = "d-none";

}
fifth = () => {
    this.setState({
        
    });
    document.getElementById("stories").className = "d-none";
    document.getElementById("date-modified").className = "d-none";
    document.getElementById("success").className = "d-none";
    document.getElementById("failed").className = "d-none";
    document.getElementById("most-likes").className = "table";
    document.getElementById("mcmaster").className = "d-none";
    document.getElementById("toronto").className = "d-none";


}
sixth = () => {
    this.setState({
        
    });
    document.getElementById("stories").className = "d-none";
    document.getElementById("date-modified").className = "d-none";
    document.getElementById("success").className = "d-none";
    document.getElementById("failed").className = "d-none";
    document.getElementById("most-likes").className = "d-none";
    document.getElementById("mcmaster").className = "table";
    document.getElementById("toronto").className = "d-none";

}

seventh = () => {
    this.setState({
        
    });
    document.getElementById("stories").className = "d-none";
    document.getElementById("date-modified").className = "d-none";
    document.getElementById("success").className = "d-none";
    document.getElementById("failed").className = "d-none";
    document.getElementById("most-likes").className = "d-none";
    document.getElementById("mcmaster").className = "d-none";
    document.getElementById("toronto").className = "table";
}

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/story" component={story} />
          <Route path="/profile" component={profile} />
          <div>
            <div className="container bg-light p-3">
              <div className="form-group">
                <h2>View stories</h2>
                <div className="m-3">
                  <div class="btn-group">
                    {/* <label for="first">Most likes</label>
                    <input className="btn btn-primary"
                      id="first"
                      type="checkbox"
                      checked={this.state.first}
                      onChange={this.first}
                    ></input> */}

                    <button type="button" onClick={this.first} class="btn mr-3 btn-primary">
                      All
                    </button>
                    {/* <button
                      type="button"
                      class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                    ></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                    </div> */}
                  </div>

                  <div class="btn-group">
                    <button type="button" onClick={this.second} class="btn mr-3 btn-secondary">
                      Newest first
                    </button>
                    {/* <button
                      type="button"
                      class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                    ></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Newest
                      </a>
                      <a class="dropdown-item" href="#">
                        Oldest
                      </a>
                    </div> */}
                  </div>

                  <div class="btn-group">
                    <button type="button" onClick={this.third} class="mr-3 btn btn-success">
                      Success
                    </button>
                    {/* <button
                      type="button"
                      class="btn btn-success dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                    ></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                    </div> */}
                  </div>

                  <div class="btn-group">
                    <button type="button" onClick={this.fourth} class="btn mr-3 btn-danger">
                      Failed
                    </button>
                    {/* <button
                      type="button"
                      class="btn btn-info dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                    ></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                    </div> */}
                  </div>

                  <div class="btn-group">
                    <button type="button" onClick={this.fifth} class="btn mr-3 btn-warning">
                      Most likes first
                    </button>
                    {/* <button
                      type="button"
                      class="btn btn-warning dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                    ></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Most Likes
                      </a>
                      <a class="dropdown-item" href="#">
                        Most Followers
                      </a>
                    </div> */}
                  </div>

                  <div class="btn-group">
                    <button type="button" onClick={this.sixth} class="btn mr-3 btn-dark">
                      McMaster University
                    </button>
                    {/* <button
                      type="button"
                      class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                    ></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        McMaster University
                      </a>
                      <a class="dropdown-item" href="#">
                        University of Toronto
                      </a>
                    </div> */}
                  </div>


                  <div class="btn-group">
                    <button type="button" onClick={this.seventh} class="btn mr-3 btn-dark">
                    University of Toronto
                    </button>
                    {/* <button
                      type="button"
                      class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                    ></button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        McMaster University
                      </a>
                      <a class="dropdown-item" href="#">
                        University of Toronto
                      </a>
                    </div> */}
                  </div>

                </div>
                <>
                  <input
                    class="form-control"
                    id="myInput"
                    type="text"
                    placeholder="Search.."
                  />
                </>
              </div>

              <div id="stories" className="table">
                <div className="card mb-3 col-md-12 bg-secondary">
                  <div className="card-body">
                    <h4 className="card-title">My Journey to 4th year</h4>
                    <p className="card-text">
                      Overcoming obstacles, Ive made it to 4th and final year of
                      my McMaster programme.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-danger">
                  <div className="card-body">
                    <h4 className="card-title">How I became MSU president</h4>
                    <p className="card-text">
                      I wanted to be MSU president ever since I started by
                      studies at McMaster University.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-warning">
                  <div className="card-body">
                    <h4 className="card-title">
                      I just published my own game on the play store and its a
                      huge success!
                    </h4>
                    <p className="card-text">
                      Portrait or landscape, you can play this game both ways.
                      100k+ downloads in the first week!
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-light">
                  <div className="card-body">
                    <h4 className="card-title">
                      How I secured a residency at Oxford Medical School in
                      London
                    </h4>
                    <p className="card-text">
                      I might say it was hardwork, perserverance, and dedication
                      that led me to where I am now. However, support and love
                      from family and friends was equally as important you might
                      say, and I would agree with you. Studying the materials
                      for my exams helped me in writing my exams, however
                      emotional support helped me too.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-primary">Read More</a>
                            <a href="#" className="card-link btn btn-primary">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
              </div>

              <div id="date-modified" className="table">
                <div className="card mb-3 col-md-12 bg-light">
                  <div className="card-body">
                    <h4 className="card-title">
                      How I secured a residency at Oxford Medical School in
                      London
                    </h4>
                    <p className="card-text">
                      I might say it was hardwork, perserverance, and dedication
                      that led me to where I am now. However, support and love
                      from family and friends was equally as important you might
                      say, and I would agree with you. Studying the materials
                      for my exams helped me in writing my exams, however
                      emotional support helped me too.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-primary">Read More</a>
                            <a href="#" className="card-link btn btn-primary">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink> 
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-warning">
                  <div className="card-body">
                    <h4 className="card-title">
                      I just published my own game on the play store and its a
                      huge success!
                    </h4>
                    <p className="card-text">
                      Portrait or landscape, you can play this game both ways.
                      100k+ downloads in the first week!
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-secondary">
                  <div className="card-body">
                    <h4 className="card-title">My Journey to 4th year</h4>
                    <p className="card-text">
                      Overcoming obstacles, Ive made it to 4th and final year of
                      my McMaster programme.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-danger">
                  <div className="card-body">
                    <h4 className="card-title">How I became MSU president</h4>
                    <p className="card-text">
                      I wanted to be MSU president ever since I started by
                      studies at McMaster University.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
              </div>




              <div id="success" className="table">
                <div className="card mb-3 col-md-12 bg-success">
                  <div className="card-body">
                    <h4 className="card-title">
                      I just published my own game on the play store and its a
                      huge success!
                    </h4>
                    <p className="card-text">
                      Portrait or landscape, you can play this game both ways.
                      100k+ downloads in the first week!
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-success">
                  <div className="card-body">
                    <h4 className="card-title">
                      How I secured a residency at Oxford Medical School in
                      London
                    </h4>
                    <p className="card-text">
                      I might say it was hardwork, perserverance, and dedication
                      that led me to where I am now. However, support and love
                      from family and friends was equally as important you might
                      say, and I would agree with you. Studying the materials
                      for my exams helped me in writing my exams, however
                      emotional support helped me too.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-primary">Read More</a>
                            <a href="#" className="card-link btn btn-primary">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink> 
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-success">
                  <div className="card-body">
                    <h4 className="card-title">How I became MSU president</h4>
                    <p className="card-text">
                      I wanted to be MSU president ever since I started by
                      studies at McMaster University.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-success">
                  <div className="card-body">
                    <h4 className="card-title">My Journey to 4th year</h4>
                    <p className="card-text">
                      Overcoming obstacles, Ive made it to 4th and final year of
                      my McMaster programme.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
              </div>







              <div id="failed" className="table">
                <div className="card mb-3 col-md-12 bg-danger">
                  <div className="card-body">
                    <h4 className="card-title">My Journey to 4th year</h4>
                    <p className="card-text">
                      Overcoming obstacles, Ive made it to 4th and final year of
                      my McMaster programme.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-danger">
                  <div className="card-body">
                    <h4 className="card-title">
                      I just published my own game on the play store and its a
                      huge success!
                    </h4>
                    <p className="card-text">
                      Portrait or landscape, you can play this game both ways.
                      100k+ downloads in the first week!
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-danger">
                  <div className="card-body">
                    <h4 className="card-title">
                      How I secured a residency at Oxford Medical School in
                      London
                    </h4>
                    <p className="card-text">
                      I might say it was hardwork, perserverance, and dedication
                      that led me to where I am now. However, support and love
                      from family and friends was equally as important you might
                      say, and I would agree with you. Studying the materials
                      for my exams helped me in writing my exams, however
                      emotional support helped me too.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-primary">Read More</a>
                            <a href="#" className="card-link btn btn-primary">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink> 
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-danger">
                  <div className="card-body">
                    <h4 className="card-title">How I became MSU president</h4>
                    <p className="card-text">
                      I wanted to be MSU president ever since I started by
                      studies at McMaster University.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
              </div>






              <div id="most-likes" className="table">
                <div className="card mb-3 col-md-12 bg-danger">
                  <div className="card-body">
                    <h4 className="card-title">My Journey to 4th year</h4>
                    <p className="card-text">
                      Overcoming obstacles, Ive made it to 4th and final year of
                      my McMaster programme.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-light">
                  <div className="card-body">
                    <h4 className="card-title">
                      I just published my own game on the play store and its a
                      huge success!
                    </h4>
                    <p className="card-text">
                      Portrait or landscape, you can play this game both ways.
                      100k+ downloads in the first week!
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-success">
                  <div className="card-body">
                    <h4 className="card-title">
                      How I secured a residency at Oxford Medical School in
                      London
                    </h4>
                    <p className="card-text">
                      I might say it was hardwork, perserverance, and dedication
                      that led me to where I am now. However, support and love
                      from family and friends was equally as important you might
                      say, and I would agree with you. Studying the materials
                      for my exams helped me in writing my exams, however
                      emotional support helped me too.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-primary">Read More</a>
                            <a href="#" className="card-link btn btn-primary">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink> 
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                <div className="card mb-3 col-md-12 bg-secondary">
                  <div className="card-body">
                    <h4 className="card-title">How I became MSU president</h4>
                    <p className="card-text">
                      I wanted to be MSU president ever since I started by
                      studies at McMaster University.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
              </div>







              <div id="mcmaster" className="table">
              <div className="card mb-3 col-md-12 bg-success">
                  <div className="card-body">
                    <h4 className="card-title">How I became MSU president</h4>
                    <p className="card-text">
                      I wanted to be MSU president ever since I started by
                      studies at McMaster University.
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                
            
              </div>


              <div id="toronto" className="table">
              <div className="card mb-3 col-md-12 bg-light">
                  <div className="card-body">
                    <h4 className="card-title">
                      I just published my own game on the play store and its a
                      huge success!
                    </h4>
                    <p className="card-text">
                      Portrait or landscape, you can play this game both ways.
                      100k+ downloads in the first week!
                    </p>
                    {/* <a href="#" onClick={e => {
                this.showModal();
                }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                    <NavLink className="btn mr-3 btn-info" exact to="/story">
                      Read more
                    </NavLink>
                    <NavLink className="btn btn-info" exact to="/profile">
                      View Profile
                    </NavLink>
                  </div>
                </div>
                
            
              </div>






            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
