import { useState } from "react";

function TicTac() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setPlayer] = useState("✔");
  const [winner, setWinner] = useState(null);

  function updateValue(index: number) {
    const arr = [...board];

    if (winner || board[index] !== null) return;
    arr[index] = currentPlayer;
    setPlayer(currentPlayer === "✔" ? "✖" : "✔");
    setBoard(arr);
    const result = checkWinner(arr);
    if (result) {
      setWinner(result);
    } else {
      setPlayer(currentPlayer === "✔" ? "✖" : "✔");
    }
  }

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

    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(true);
        return board[a];
      }
    }
    console.log(false);
    return null;
  };

  return (
    <>
      <h1 className="mb-20 font-semibold">TIC-TAC-TOE</h1>
      <div className="bg-purple-700 rounded-2xl grid grid-cols-3 gap-4 p-6">
        {board.map((element, index) => (
          <div
            key={index}
            className="bg-black w-20 h-20 flex items-center justify-center border border-black rounded-full text-white font-bold text-3xl"
            onClick={() => updateValue(index)}
          >
            <p>{element}</p>
          </div>
        ))}
      </div>
      {winner}
    </>
  );
}

export default TicTac;
