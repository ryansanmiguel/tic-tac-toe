import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// controlled function component
function Square(props) {
    return (
        <button
          className="square"
          onClick={props.onClick}>
              {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardState: Array(9).fill(null),
            xIsNext: true
        };
    }
    
    handleClick(i) {
        const boardState = this.state.boardState.slice(); // array reference (not values) is constant
        boardState[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          boardState: boardState,
          xIsNext: !this.state.xIsNext,
        });
    }
    
    renderSquare(i, winner) {
        return (
            <Square
              value={this.state.boardState[i]}
              onClick={() => this.handleClick(i)} />
        );
    }
    
    render() {
        const winner = determineWinner(this.state.boardState);
        
        return (
            <div className="board">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}

                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}

                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <Board />
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById("root")
);

function determineWinner(boardState) {
    // list of possible winning configurations
    const configs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 6],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < configs.length; i++) {
        const [a, b, c] = configs[i];
        if (boardState[a] !== null 
          && boardState[a] === boardState[b]
          && boardState[b] === boardState[c])
            return configs[i];
    }

    return null;
}
