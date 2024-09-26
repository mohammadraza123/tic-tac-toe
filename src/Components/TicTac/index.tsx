import { useState } from "react";
import swal from "sweetalert";

function TicTac() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setPlayer] = useState("✔");
  const [winner, setWinner] = useState(null);

  const handleValue = (index: number) => {
    const fullArr = [...board];
    if (winner && board[index] !== null) return;
    fullArr[index] = currentPlayer;
    setPlayer(currentPlayer === "✔" ? "✖" : "✔");
    setBoard(fullArr);

    const result = checkWinner(fullArr);
    if (result) {
      setWinner(result);
      setTimeout(() => {
        swal({
          title: "Winner!",
          text: `Player ${result} wins!`,
          icon: "success",
          buttons: ["Play Again", true],
        }).then(() => {
          handleReset();
        });
      }, 500);
    } else if (!result && fullArr.every((cell) => cell !== null)) {
      setTimeout(() => {
        swal({
          title: "It's a Tie!",
          text: "No one wins.",
          icon: "warning",
          buttons: [false, true],
        }).then(() => {
          handleReset();
        });
      }, 500);
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
  };

  const checkWinner = (board: any) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let val = 0; val < combination.length; val++) {
      const [a, b, c] = combination[val];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex-col p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 sm:mb-12 tracking-wide text-center">
          TIC-TAC-TOE
        </h1>
        <div className="bg-purple-700 p-5 sm:p-6 rounded-3xl shadow-lg grid grid-cols-3 gap-2 sm:gap-4">
          {board.map((element, index) => (
            <div
              key={index}
              className={`bg-black w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center 
                    border-2 border-purple-800 rounded-2xl 
                    text-white font-extrabold text-2xl sm:text-4xl 
                    shadow-md hover:shadow-xl transition-all duration-300 
                    hover:bg-purple-800 ${
                      element ? "cursor-default" : "cursor-pointer"
                    }`}
              onClick={() => handleValue(index)}
            >
              <p
                className={`transition-all transform ${
                  element ? "scale-100" : "scale-0"
                }`}
              >
                {element}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TicTac;
