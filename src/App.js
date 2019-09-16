import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    board: Array(9).fill(null),
    player: "x"
  }

  handleClick(index){
    // console.log(e.target.id, "hiii")
    // console.log(this.state.board,index);
    let newBoard = this.state.board

    newBoard[index] ="X"

     console.log(index)
     this.setState({
       board: newBoard
     });
  };

  render() {

    /* with the 9 boxes doing the same thing,
     we need to distingish the boxes by a key id.
     with index of the box in the array. */
    const Box = this.state.board.map(

      (box, index) =>

      <div className="box"

      key={index}

      onClick={() => {this.handleClick(index)}}>{box}

      </div>
    )

    return (
      /* this is a container of the whole page, this holds up the app*/
      <div className="container">
        <h1>Tic Tac Toe </h1>
          <div className="board">
            {Box}
          </div>
      </div>
    );
  }


}

export default App;
