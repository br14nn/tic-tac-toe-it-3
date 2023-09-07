let currentTurn = "X";

const playerTurn = document.getElementById("playerTurn");

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");

const playerX = [];
const playerO = [];

const possibleCombinations = {
  comb1: ["a1", "a2", "a3"],
  comb2: ["b1", "b2", "b3"],
  comb3: ["c1", "c2", "c3"],
  comb4: ["a1", "b1", "c1"],
  comb5: ["a2", "b2", "c2"],
  comb6: ["a3", "b3", "c3"],
  comb7: ["a1", "b2", "c3"],
  comb8: ["a3", "b2", "c1"],
};

playerTurn.innerText = currentTurn;

let winner = false;

const patternChecker = (player, winMessage) => {
  Object.keys(possibleCombinations).forEach((key) => {
    let winCondition = player.filter((value) =>
      possibleCombinations[key].includes(value)
    );

    if (winCondition.length >= 3 && !winner) {
      winCondition.map((val) => {
        document.getElementById(val).setAttribute("style", "color: red");
      });

      winCondition = [];

      alert(`${winMessage}. The site will reload in 2 seconds.`);

      winner = true;

      setTimeout(() => {
        window.location.reload();
      }, 2000);

      return;
    } else {
      winCondition = [];
    }
  });
};

const winnerChecker = () => {
  if (playerX.length >= 3) {
    patternChecker(playerX, "Player X wins");
  }

  if (playerO.length >= 3) {
    patternChecker(playerO, "Player O wins");
  }

  if (!winner && playerX.length === 5 && playerO.length === 4) {
    alert("Draw. The site will reload in 2 seconds.");

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
};

const handle_click = (e) => {
  const { id } = e.currentTarget;
  const targetElem = document.getElementById(`${id}`);

  if (currentTurn === "O") {
    currentTurn = "X";
    playerTurn.innerText = currentTurn;

    targetElem.setAttribute("style", "color: blue");
    targetElem.setAttribute("disabled", true);
    targetElem.innerText = "O";

    playerO.push(id);
  } else {
    currentTurn = "O";
    playerTurn.innerText = currentTurn;

    targetElem.setAttribute("style", "color: green");
    targetElem.setAttribute("disabled", true);
    targetElem.innerText = "X";

    playerX.push(id);
  }

  winnerChecker();
};
