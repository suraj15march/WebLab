let str = "";
for (let i = 1; i <= 10; i++) {
  //   str += i;
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  str += "\n";
}
console.log(str);
