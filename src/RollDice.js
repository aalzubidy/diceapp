import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice1: Math.floor(Math.random() * 6) + 1,
            dice2: Math.floor(Math.random() * 6) + 1,
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }

    roll(e) {
        this.setState({rolling: true});
        setTimeout(()=>{
            this.setState({
                dice1: Math.floor(Math.random() * 6) + 1,
                dice2: Math.floor(Math.random() * 6) + 1,
                rolling: false
            });
        }, 300)
    }

    render() {
        return (
            <div>
                <Dice number={this.state.dice1} />
                <Dice number={this.state.dice2} />
                <br></br>
                <button onClick={this.roll}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
            </div>
        );
    }
}

export default RollDice;