const getValidPosition = (board: string[][]): number[] => {
  const validPosition: number[] = [];
  const columns = board[0].length;

  for (let col = 0; col < columns; col++) {
    if (board[0][col] === "") {
      validPosition.push(col);
    }
  }

  return validPosition;
};

export default getValidPosition;
