let money = prompt('сколько у вас денег?');

document.writeln('денег = '+ money);

let apple = prompt('солько вы купили яблок?');

document.writeln('яблок = '+ apple);

let bread = prompt('сколько вы купили булок хлеба?');

document.writeln('хлеба = '+ bread);

let applecost = prompt('сколько стоит 1 яблоко?')*apple;

document.writeln('всего за яблоки = '+ applecost);

let breadcost = prompt('сколько стоит хлеб?')*bread;

document.writeln('всего за хлеб = '+ breadcost);

let x = money >= (applecost + breadcost);

document.write(x);

