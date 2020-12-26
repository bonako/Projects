import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../navbar.css'
import story from './story'
import edit from './edit'
import john from '../imgs/john.jpg'
import dave from '../imgs/dave.jpg'
import emily from '../imgs/emily.jpg'
import andy from '../imgs/andy.jpg'


export default class profile extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/story' component={story} />
                    <Route path='/edit' component={edit} />

            <div className="container bg-light p-3">
                <div className="row">
                    <div className="col-md-6">
                        <img className="rounded mx-auto d-block" src={john} alt="Johnathon"/>
                    </div>
                    <div className="col-md-6">
                        <div class="card bg-info text-white">
                            <div class="card-body"><h1>Johnathon Clearwater</h1></div>
                        </div>
                        <div className="jumbotron">
                            <h4>"To be or not to be, that is the question."</h4>
                            <p>-Albert Einstein</p>
                        </div>
                    </div>
                </div>

                <div className="jumbotron">
                    <h3>21 year old male from Hamilton, Ontario.</h3>
                    <header>4th year Computer Science student at McMaster University.</header>
                </div>
                <div className="jumbotron">
                    <h2>Stories posted</h2>
                    <hr />
                    <div className="card-columns">
                        <div className="card bg-primary">
                            <div className="card-body text-center">
                                <h4 className="card-title">My Journey to 4th year</h4>
                                <p className="card-text">Overcoming obstacles, Ive made it to 4th and final year of my McMaster programme.</p>
                                {/* <a href="#" className="btn btn-primary stretched-link">Edit</a> */}
                                <NavLink className="btn btn-primary stretched-link" to="/edit">Edit</NavLink>

                            </div>
                        </div>
                        <div className="card bg-success">
                            <div className="card-body text-center">
                                <h4 className="card-title">I just published my own game on the play store and its a huge success!</h4>
                                <p className="card-text">Portrait or landscape, you can play this game both ways. 100k+ downloads in the first week!</p>
                                {/* <a href="#" className="btn btn-primary stretched-link">Edit</a> */}
                                <NavLink className="btn btn-primary stretched-link" to="/edit">Edit</NavLink>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="jumbotron">
                    <h2>Stories liked</h2>
                    <hr />
                    <div className="card-columns">
                        <div className="card bg-info">
                            <div className="card-body text-center">
                                <h4 className="card-title">How I secured a residency at Oxford Medical School in London</h4>
                                <p className="card-text">I might say it was hardwork, perserverance, and dedication that led me to where I am now.</p>
                                {/* <a href="#" className="btn btn-success stretched-link">View</a> */}
                                <NavLink className="btn btn-success stretched-link" to="/story">Read More</NavLink>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="jumbotron">
                    <h2>Following</h2>
                    <hr />
                    <div className="row">
                        <div className="card col-md-6">
                            <img className="card-img-top" src={dave} alt="Card image"/>
                            <div className="card-body">
                                <h4 className="card-title">Dave Ma</h4>
                                <p className="card-text">4th year life science student at University of Toronto.</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                        <div className="card col-md-6">
                            <img className="card-img-top" src={emily} alt="Card image"/>
                            <div className="card-body">
                                <h4 className="card-title">Emily O'Hara</h4>
                                <p className="card-text">4th year life Business student at University of Toronto.</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jumbotron">
                    <h2>Followers</h2>
                    <hr />
                    <div className="row">
                        <div className="card col-md-6">
                            <img className="card-img-top" src={andy} alt="Card image"/>
                            <div className="card-body">
                                <h4 className="card-title">Andy Grey</h4>
                                <p className="card-text">3rd year life Mechanical Engineering student at Waterloo.</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
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