import React, {Component, Button} from 'react'
import Modal from './modal'
import PopUp from './PopUp'
import story from './story'
import profile from './profile'
import '../navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class home extends Component {

  state = {
    show: false,
    seen: false,
  };
  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
    
  };


    render() {
        return (   
          <Router> 
            <Switch>
              <Route path='/story' component={story} />
              <Route path='/profile' component={profile} />

            <div>

            <div className="container bg-light p-3">
                <div className="jumbotron bg-success">
                    <h1>
                        Welcome to Storyboard where you can create your own story and read the stories of others!
                    </h1>

                    <p>Simply click on the create tab to create your story, then click on the profile tab to view all of the stories that you created!</p>         
                </div>

                <div className="jumbotron bg-light text-center">
                  <h1>Featured stories</h1>
                </div>
                
                <div className="row">
                    <div className="card col-md-6 bg-secondary">
                        <div className="card-body">
                            <h4 className="card-title">My Journey to 4th year</h4>
                            <p className="card-text">Overcoming obstacles, Ive made it to 4th and final year of my McMaster programme.</p>
                            {/* <a href="#" onClick={e => {
                this.showModal();
              }} className="card-link btn btn-info">Read More</a> */}
                  <NavLink className="mr-3 btn btn-info" to="/story">Read More</NavLink>
                  <NavLink className="btn btn-info" to="/profile">View Profile</NavLink>



                        </div>
                    </div>
                    <div className="card col-md-6 bg-danger">
                        <div className="card-body">
                            <h4 className="card-title">How I became MSU president</h4>
                            <p className="card-text">I wanted to be MSU president ever since I started by studies at McMaster University.</p>
                            {/* <a href="#" onClick={e => {
                              this.showModal();
                            }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                            <NavLink className="mr-3 btn btn-info" to="/story">Read More</NavLink>
                  <NavLink className="btn btn-info" to="/profile">View Profile</NavLink>
                        </div>
                    </div>
                    <div className="card col-md-4 bg-warning">
                        <div className="card-body">
                            <h4 className="card-title">I just published my own game on the play store and its a huge success!</h4>
                            <p className="card-text">Portrait or landscape, you can play this game both ways. 100k+ downloads in the first week!</p>
                            {/* <a href="#" onClick={e => {
                              this.showModal();
                            }} className="card-link btn btn-info">Read More</a>
                            <a href="#" className="card-link btn btn-info">View Profile</a> */}
                            <NavLink className="mr-3 btn btn-info" to="/story">Read More</NavLink>
                  <NavLink className="btn btn-info" to="/profile">View Profile</NavLink>
                        </div>
                    </div>
                    <div className="card col-md-8 bg-light">
                        <div className="card-body">
                            <h4 className="card-title">How I secured a residency at Oxford Medical School in London</h4>
                            <p className="card-text">I might say it was hardwork, perserverance, and dedication that led me to where I am now. However, support and love from family and friends was equally as important you might say, and I would agree with you. Studying the materials for my exams helped me in writing my exams, however emotional support helped me too.</p>
                            {/* <a href="#" onClick={e => {
                this.showModal();
              }} className="card-link btn btn-primary">Read More</a>
                            <a href="#" className="card-link btn btn-primary">View Profile</a> */}
                            <NavLink className="mr-3 btn btn-info" to="/story">Read More</NavLink>
                  <NavLink className="btn btn-info" to="/profile">View Profile</NavLink>
                        </div>
                    </div>
                </div>
                

            </div>
              </div>
              </Switch>  
            </Router>
        )
    }


}