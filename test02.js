
const aaa = document.querySelectorAll(".aaa");

const win_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// const win_patterns[i] = patterns;
// for (let i = 0; i < 8; i++){
//     // console.log(field[win_patterns[i][0]] == field[win_patterns[i][1]] == field[win_patterns[i][2]] == 1);
//     // field[win_patterns[i]].every((n) => n == 1) ? console.log("真") : console.log("偽");

//     // console.log(patterns.every(v => v === patterns[0]))
//     console.log(patterns)
// }
// for (let i = 0; i < aaa.length; i++) {
//     const aaatext = aaa[i];
//     console.log(aaatext.textContent)
// }

// // aaa.forEach(aaaText2 => console.log(aaaText2.textContent));

// for (let j = 0; j < win_patterns.length; j++) {
//     const win1 = win_patterns[j];
//     const aaaText5 = aaa[win_patterns[j]];
//     console.log(aaaText5.textContent);
//     for (let k = 0; k < 3; k++) {

//         // const aaaText3 = aaa[win_patterns[j][k]];
//         // const aaaText4 = aaa[win_patterns[j][k]];
  
//         // console.log("結果=" + aaa[win_patterns[j][0]].textContent);
//         // const arr = aaaText4.every(w => w == "あ");
//         // console.log(arr);

//         // aaa[win_patterns[j][k]].textContent.every(v => v == "あ") ? console.log("あってませす！") : console.log("あってません！");

//     }
// }