// Challenge #1.

const calAvg = (a, b, c) => (a + b + c) / 3;
console.log(calAvg(3, 4, 5));

let teamInd = calAvg (54, 65, 75);
let teamPak = calAvg (94, 85, 83);
console.log(teamInd,teamPak);

const checkWin = function (avgInd, avgPak){
  if (avgInd >= 2 * avgPak){
    console.log(`India win the trophy (${avgInd}, vs ${avgPak})`)
  }else if (avgPak >= 2 * avgInd){
    console.log(`Pakistan win the trophy (${avgPak}, vs ${avgInd})`)
  }else{
    console.log('No one win the trophy..')
  }
}

checkWin(teamInd,teamPak);


checkWin(450, 1120);


teamInd = calAvg (85, 54, 41);
teamPak = calAvg (23, 34, 27);
console.log(teamInd,teamPak);
checkWin(teamInd,teamPak);


// Challenge #2.

const calcbill = function (bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bill = [255, 320, 146];
const tip = [calcbill(bill[0]), calcbill(bill[1]), calcbill(bill[2])];

const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2],];

console.log(bill, tip, total);