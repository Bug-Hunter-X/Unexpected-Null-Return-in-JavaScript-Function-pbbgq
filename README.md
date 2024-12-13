# Unexpected Null Return in JavaScript Function

This repository demonstrates a common yet subtle error in JavaScript: unexpected null returns from functions when dealing with potentially null input values.

## The Bug

The `foo` function takes two arguments and returns their sum. However, it implicitly handles null values by returning null if either argument is null. This behavior might be undesirable if the function is expected to perform some form of default action instead of returning null. 

## The Solution

The solution file provides an improved version of the function (`foo`) that handles null inputs explicitly, using default values of 0. This solution ensures that the function always returns a numerical value, preventing unexpected errors or undefined behavior in other parts of the application.

## How to run the code

1. Clone this repository
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Run the Javascript files in a browser's console or using a Node.js environment.