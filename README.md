# Tic Tac Toe
## Problem
Design an algorithm that returns true if the given tic-tac-toe board has a winner. Otherwise, return false.
## Solution
For this solution, the tic-tac-toe board is represented as a multi-dimensional boolen array `board` of size 3x3 where a value of 1 represents an 'X' and a value of 0 represents an 'O'.  
There are eight configurations by which a player can win - three horizontal rows, three vertical columns, and two diagonals.  
To determine if there is a winner, we will use an array `configs` of length 8 where each index represents one of eight ways to win as shown below.  

Index - Description  
0 - row top  
1 - row mid  
2 - row bottom  
3 - col left  
4 - col mid  
5 - col right  
6 - NW->SE diagonal  
7 - SW->NE diagonal  

We will iterate through the 2D array `board`. If we encounter an 'X' (1), we will increment the value of `configs` at each of the corresponding indices.  
For example, if there is an 'X' in the NW corner of the board, we will increment `configs[0]`, `configs[3]`, and `configs[6]` because it may contribute to player X winning by the top row, the left column, or the NW->SE diagonal.  
Similarly, if we encounter an 'O' (0), we will decrement the value of `configs` at each of the corresponding incices.  
Finaly, we will iterate through the array `configs`. If we encounter a value of three, then the game is won and we return true. If we reach the end of the array without encountering the value three, then there is no winner and we return false.  
## Pseudocode
~~~~
int size = 3;    // The size of the board (3x3)
int inc = 0;     // +/- 1, depending on 'X' or 'O'

// FOR each square on the board
for (row = 0; row < size; row++) {
    for (col = 0; col < size; col++) {
        
        // is X or O? Determines whether inc is +/-
        inc = board[row][col] ? 1 : -1;
        
        // row
        board[row] += inc;
        
        // column
        board[col + size] += inc;
        
        // NW->SE diagonal
        if (row == col) {
            board[2 * size] += inc;
        }
        
        // SW->NE diagonal
        if ((size - 1) - col == row) {
            board[2 * size + 1] += inc;
        }
    }
}

// FOR each value in configs
for (int count : configs) {
    
    // IF +/- three, there is a winner
    if (abs(count) == size) {
        return true;
    }
}
return false;
~~~~
