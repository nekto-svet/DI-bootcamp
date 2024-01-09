// Create a file named colorful-message.js.
// In colorful-message.js, require the chalk package and use it to create and display a colorful message in the terminal.
// Create another file named app.js.
import chalk from 'chalk';

export const displayMessage = (msg) => {
    return chalk.bold.green(msg);
}

