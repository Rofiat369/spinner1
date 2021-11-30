const spinner = ["\r|", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\n   "];
const spin = function (i) {
  i = 0;
  for (const char of spinner) {
    i++;
    setTimeout(() => {
      process.stdout.write(char);
    }, 100 * i);
  }
};
spin();
