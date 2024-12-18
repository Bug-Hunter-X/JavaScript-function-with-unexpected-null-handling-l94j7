# JavaScript Null Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to null value handling within a function. The `foo` function is intended to add two numbers but returns 0 if either or both inputs are null. This unintended behavior may lead to unexpected results in applications where null values could occur.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version demonstrating the solution.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and observe the function's behavior.
3. Compare it with the corrected version in `bugSolution.js`.