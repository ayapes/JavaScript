// 三項演算子
// 独習P101 と　P320 配列のeveryの組み合わせ
// 条件式 ? {条件式がtrueのときに実行} : {条件式がfalseの時に実行};
const num = [
    ["○", "あ", "○"],
    ["○", "○", "○"],
    ["○", "う", "○"]
];

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

const field = document.querySelectorAll(".field");

for (let i = 0; i < field.length; i++) {
    // こちら三項演算子
    // const shin = field[i].textContent = "○" ;
    // const gi = field[i].textContent = "×" ;
    // num[i].every((n) => n == "○") ? console.log("真") : console.log("偽");
    // num[i].every((n) => n == "○") ? shin : gi ;
    
    for (let j = 0; j < win_patterns.length; j++) {
        // if elseにしてみた。
        if (field[win_patterns[j]].every((n) => n == "○") == true) {
            field[8].textContent = "やった！";
        } else {
            field[8].textContent = "だめ！";
        }
        console.log(field[win_patterns[j]]);
    }

}