import { useState } from "react";

function TicTac() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setPlayer] = useState("✔");

  function updateValue(index: number) {
    const arr = [...board];
    if (arr[index] == null) {
      arr[index] = currentPlayer;
      setPlayer(currentPlayer === "✔" ? "✖" : "✔");
      setBoard(arr);
    }
    const checkBox = arr[0] && arr[1] && arr[2] === "✔";
    if (checkBox) {
      alert("You won");
    }
  }

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
    </>
  );
}

export default TicTac;
