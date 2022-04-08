let str = "";
for (let i = 10; i >= 1; i--) {
  //   str += i;
  for (let j = 1; j <= 10; j++) {
    // str += "";
    if (j > i) str += "*";
    else str += " ";
  }
  str += "\n";
}
console.log(str);
