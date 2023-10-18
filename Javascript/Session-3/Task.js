var x = 10;

var y = 20;

var res = x++ + ++y - --x + --y - x++; // 10 + 21 - 10 + 20 - 10 = 31

console.log(res); //30 31 32 33 10 20
