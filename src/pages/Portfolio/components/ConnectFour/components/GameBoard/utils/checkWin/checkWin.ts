const checkWin = (
  board: string[][],
  player: "red" | "yellow",
  row: number,
  col: number,
): "red" | "yellow" | null => {
  let count;

  // Check Vertical
  count = 1;
  for (let i = 1; i < 4; i++) {
    if (row + i < board.length && board[row + i][col] === player) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 4; i++) {
    if (row - i >= 0 && board[row - i][col] === player) {
      count++;
    } else {
      break;
    }
  }
  if (count >= 4) {
    return player;
  }

  // Check Horizontal
  count = 1;
  for (let i = 1; i < 4; i++) {
    if (col + i < board[0].length && board[row][col + i] === player) {
      count++;
    } else {
      break;
    }
  }
  for (let i = 1; i < 4; i++) {
    if (col - i >= 0 && board[row][col - i] === player) {
      count++;
    } else {
      break;
    }
  }
  if (count >= 4) {
    return player;
  }

  // Check Diagonal
  count = 1;
  for (let i = 1; i < 4; i++) {
    if (
      row + i < board.length &&
      col + i < board[0].length &&
      board[row + i][col + i] === player
    ) {
      count++;
    } else {
      break;
    }
  }
  for (let i = 1; i < 4; i++) {
    if (row - i >= 0 && col - i >= 0 && board[row - i][col - i] === player) {
      count++;
    } else {
      break;
    }
  }
  if (count >= 4) {
    return player;
  }

  count = 1;
  for (let i = 1; i < 4; i++) {
    if (
      row + i < board.length &&
      col - i >= 0 &&
      board[row + i][col - i] === player
    ) {
      count++;
    } else {
      break;
    }
  }
  for (let i = 1; i < 4; i++) {
    if (
      row - i >= 0 &&
      col + i < board[0].length &&
      board[row - i][col + i] === player
    ) {
      count++;
    } else {
      break;
    }
  }
  if (count >= 4) {
    return player;
  }

  return null;
};

export default checkWin;
