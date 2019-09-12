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
            xIsNext: true};
    }
    
    handleClick(i) {
        const boardState = this.state.boardState.slice(); // array reference (not values) is constant
        boardState[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          boardState: boardState,
          xIsNext: !this.state.xIsNext});
    }
    
    renderSquare(i) {
        return (
            <Square
              value={this.state.boardState[i]}
              onClick={() => this.handleClick(i)} />
        );
    }
    
    render() {
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
