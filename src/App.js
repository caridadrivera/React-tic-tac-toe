import React, {Component} from 'react';
import './App.css';
import Player from './components/choosePlayer';
class App extends Component {

  state = {
    board: Array(9).fill(null),
    /* on click, I want to fill
    with X and change the player */
    player: null,
    winner: null
  }

  checkWinner(){
    /* checking horizontal,
     vertical and diagnal lines  */
    let winLines =
    [
      ["0", "1", "2"],

      ["3", "4", "5"],

      ["6", "7", "8"],

      ["0", "3", "6"],

      ["1", "4", "7"],

      ["2", "5", "8"],

      ["0", "4", "8"],

      ["2", "4", "6"],
    ]



    for (let i = 0; i < winLines.length; i++) {
        const [a, b, c] = winLines[i];
/*if there is a board a(board a is the first filled in index), and board a === board b,  and board a === c */
        if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a]
          === this.state.board[c]) {
          alert('You won');
          this.setState({
            winner: this.state.player
          })
        }
    }

  }



  handleClick(index){
    // console.log(e.target.id, "hiii")
    // console.log(this.state.board,index);
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board
       /* if the value of the board at a
       particular index is empty, fill it up with
       the value of the player
       */
      if (this.state.board[index] === null && !this.state.winner) {
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        });
        this.checkWinner();
      }
       // console.log(this.state.board)
    }

  };


  setPlayer(player){
    this.setState({
       player
    })
  }

  render() {

    /* with the 9 boxes doing the same thing,
     we need to distingish the boxes by a key id.
     with index of the box in the array. */
    const Box = this.state.board.map(

      (box, index) =>

      <div className="box"

      key={index}

      onClick={() => this.handleClick(index)}>
      {box}

      </div>
    )

    return (

      /* this is a container of the whole page, this holds up the app*/
      <div className="container">
        <h1>Tic Tac Toe </h1>
          {  this.state.player ? "" : <Player player={(e) => this.setPlayer(e)}/>  }
          <div className="board">
            {Box}
          </div>

      </div>
    );
  }


}

export default App;
