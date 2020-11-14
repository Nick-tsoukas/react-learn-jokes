import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';

const url = 'https://icanhazdadjoke.com/';

class JokeList extends Component {
    constructor(props){
        super(props);
        this.state = {joke : []}
        let name = 'hello'
    }

   componentDidMount(){
      //make api request here
   }


    render(){
        return (
            <section className="JokeList">

                <div className="JokeList_sidebar">
                    <button className="JokeList_button"> New Jokes</button>
                </div>

                <div className="JokeList_jokes">
                    <Joke joke="this is a joke" vote="0"/>
                </div>

            </section>
        )
    }
}

export default JokeList;