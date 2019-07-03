import React, { Component } from 'react';

class Dice extends Component{
    render(){
        const numberText = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
        };
        const classText = `fas fa-dice-${numberText[this.props.number]}`;
        return(
            <div>
                <i className={classText}></i>
            </div>
        );
    }
}

export default Dice;