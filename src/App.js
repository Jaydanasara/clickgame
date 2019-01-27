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
        topScore: 0

    };
  





    handleClick = (id,clicked) => {
        
        if (clicked===false){
            alert("you are correct");
            this.setState({clicked: this.clicked = !this.clicked
             });
        }
         let score = this.state.score + 1;
        let topScore = this.state.topScore;  
        if (score > topScore) {
            topScore = score;
            this.setState({ score, topScore,});  
        }
       
        else{
            alert("you have clicked that already")
            
        }
       
    
       
        
    };
        

    render() {
        return (
            <Wrapper>
                <Title> Superhero Memory Game</Title>
                <Points>Score: {this.state.score}</Points>
                <TopScore>Top Score: {this.state.topScore}</TopScore>
                
                {this.state.Characters.map(character => (

                    <CharacterCard
                        handleClick={this.handleClick}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        clicked={character.clicked}
                    />

                ))}
            </Wrapper>

        );
    }


}

export default App;