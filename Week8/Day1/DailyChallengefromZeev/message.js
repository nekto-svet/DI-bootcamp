import chalk from 'chalk';

export const displayMessage = (msg) => {
    return chalk.bold.green(msg);
}

export const displayErrMessage = (err) => {
    return chalk.bold.red(err);
}