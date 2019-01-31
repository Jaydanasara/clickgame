import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/wrapper";
import Title from "./components/Title";
import Characters from "./Characters.json";
import Points from "./components/Points"
import TopScore from "./components/TopScore"

class App extends Component {
    state = {
        Characters,
        score: 0,
        topScore: 0,
        clicked: [],
        message: ""
    };


    componentDidMount() {
        this.setState({ Characters: this.arrayShuffle() });
    }


    arrayShuffle = () => {
        let newPos,
            temp;
        const _characters = this.state.Characters;
        for (let i = _characters.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = _characters[i];
            _characters[i] = _characters[newPos];
            _characters[newPos] = temp;
        }
        return _characters;

    };

    handleClick = (id) => {

        let clicked = this.state.clicked;
        let score = this.state.score + 1;
        let topScore = this.state.topScore;
        let message = "";

        const Characters = this.arrayShuffle();

        if (clicked.includes(id)) {
            score = 0;
            message = "you clicked that already";
            clicked=[];
        }
        else  {
            message = "you are correct"
            clicked = [...this.state.clicked, id]
            
        }

        if (score > topScore) {
            topScore = score;
            message = "you are correct"
            clicked = [...this.state.clicked, id]
            
        }

        if (score===12){
            score=0;
            message = "GAME OVER";
            clicked=[];
            
        }

        this.setState({ Characters, score, topScore, clicked , message })







    };


    render() {
        return (
            <Wrapper>
                <Title> Superhero Memory Game</Title>
                <Points>Score: {this.state.score}  <h2>{this.state.message}</h2></Points>
                <TopScore>Top Score: {this.state.topScore}</TopScore>

                {this.state.Characters.map(character => (

                    <CharacterCard
                        handleClick={this.handleClick}
                        id={character.id}
                        name={character.name}
                        image={character.image}

                    />

                ))}
            </Wrapper>

        );
    }


}

export default App;