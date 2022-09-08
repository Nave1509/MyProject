let chessBoard = [];
let chessRow = [];

for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    if ((x + y) % 2 == 0) {
      chessRow.push("black");
    } else {
      chessRow.push("white");
    }
  }
  chessBoard.push(chessRow);
  chessRow = [];
}
console.log(chessBoard);
