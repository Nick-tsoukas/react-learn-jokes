import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
    render(){
        return(
            <div className="Joke">
                <section className="Joke_vote">
                    <h1>{this.props.vote}</h1>
                </section>
                <section className="Joke_joke">
                    <p>{this.props.joke}</p>
                </section>
                <section className="Joke_emoji">
                    <h1>Emoji</h1>
                </section>
            </div>
        )
    }
}

export default Joke