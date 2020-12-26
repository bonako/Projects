import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../navbar.css'
import home from './home'
import create from './create'
import profile from './profile'
import view from './view'
import john from '../imgs/john.jpg'




export default class edit extends Component {


    delete = () =>
    {
        document.getElementById("comment").innerHTML = ''
    }

    render() {
        return (
            <div className="container bg-light p-3">
                <div className="jumbotron bg-success text-center">
                    <img className="rounded mx-auto d-block" src={john} alt="Johnathon"/>
                    <input type="text" defaultValue="Johnathon Clearwater" />
                    <br />
                    <textarea rows="5" cols="75" type="text" defaultValue="4th year Computer Science Student at McMaster University" />
                    <br />
                    <NavLink className="btn btn-secondary" exact to="/profile">View Profile</NavLink>
                </div>
                <textarea rows="5" cols="75" type="text" defaultValue="I started making my game using the Unity game engine. I learned about Unity from a friend and I began watching tutorials on youtube about how to create a 2d game and how to create a 3d game. I started learning about how to create different components of a game like enemies, player models, minimaps, objects, interactivity, animations, and much more. Over the course of my university life I began building my knowledge of these subject areas and started making small and simple games and simultions. I learned how to make player and emeny animations using Blender from a friend. I really enjoyed making these games and simulations and I began spending most of my free time doing these activities after studying and doing required work. I got better and better and I started getting offers from game companies and websites on the internet where I posted my games. I took these offers and began learning how other people made their games, the ins and outs of game development and animations, the good and the bad of successful and failed games and I began planning to make my own game." />
                {/* <p>I started making my game using the Unity game engine. I learned about Unity from a friend and I began watching tutorials on youtube about how to create a 2d game and how to create a 3d game. I started learning about how to create different components of a game like enemies, player models, minimaps, objects, interactivity, animations, and much more. Over the course of my university life I began building my knowledge of these subject areas and started making small and simple games and simultions. I learned how to make player and emeny animations using Blender from a friend. I really enjoyed making these games and simulations and I began spending most of my free time doing these activities after studying and doing required work. I got better and better and I started getting offers from game companies and websites on the internet where I posted my games. I took these offers and began learning how other people made their games, the ins and outs of game development and animations, the good and the bad of successful and failed games and I began planning to make my own game.</p> */}
                <br />
                {/* <NavLink exact to="/">Home</NavLink> */}
                <textarea rows="5" cols="75" type="text" defaultValue="Using all of my knowledge that I learned, I began creating a game that I know people will love to play. Over the course of months, my gane started coming together and I could try out the game world for myself and interact with all the game objects. After another few months of testing and tweaking I decided that this was the final game I want to publish. I started building my game for both Apple and Google app stores and began testing it with closed testing and a group of a few friends." />
                {/* <p>Using all of my knowledge that I learned, I began creating a game that I know people will love to play. Over the course of months, my gane started coming together and I could try out the game world for myself and interact with all the game objects. After another few months of testing and tweaking I decided that this was the final game I want to publish. I started building my game for both Apple and Google app stores and began testing it with closed testing and a group of a few friends. </p> */}
                <br />
                <textarea rows="5" cols="75" type="text" defaultValue="A few more weeks of testing passed, I made adjustments, I made tweaks and improvements, fixed bugs, and added more fun into the game. Now, I decided I will rollout the game for production. One week after my rollout to production I couldn't believe I had over 100,000 downloads on my game. This was with some advertisement campaigns I ran on facebook, Apple Store, Google Play Store, and youtube." />

                {/* <p>A few more weeks of testing passed, I made adjustments, I made tweaks and improvements, fixed bugs, and added more fun into the game. Now, I decided I will rollout the game for production. One week after my rollout to production I couldn't believe I had over 100,000 downloads on my game. This was with some advertisement campaigns I ran on facebook, Apple Store, Google Play Store, and youtube.</p> */}
                
                <div className="row p-3">
                    <button className="btn btn-primary">Save</button>
                    {/* <button className="btn btn-primary">Follow</button> */}
                </div>

                <div className="jumbotron p-3">
                    <h2>Comments</h2>
                    {/* <textarea id="textarea" rows="2" cols="75" placeholder="Write your comment here..."></textarea> */}
                    <br />
                    {/* <button className="btn btn-primary" onClick={this.comment}>Submit</button> */}
                    <div id="comments">
                        <p id="comment" >Awesome story ! Cant wait to read whats next!
                        <button onClick={this.delete} className="btn btn-danger">Delete comment</button></p>
                    </div>
                </div>
            </div>
        )
    }


}