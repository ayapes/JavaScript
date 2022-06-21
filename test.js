// 三項演算子
// 独習P101 と　P320 配列のeveryの組み合わせ
// 条件式 ? {条件式がtrueのときに実行} : {条件式がfalseの時に実行};
const num = [
    ["○", "あ", "○"],
    ["○", "○", "○"],
    ["○", "う", "○"]
];
let field = document.querySelectorAll(".field");

for (let i = 0; i < num.length; i++) {
    // こちら三項演算子
    const shin = field[i].textContent = "○" ;
    const gi = field[i].textContent = "×" ;
    // num[i].every((n) => n == "○") ? console.log("真") : console.log("偽");
    num[i].every((n) => n == "○") ? shin : gi ;

// if elseにしてみた。
//     if (num[i].every((n) => n == "○") == true) {
//         field[i].textContent = "○";
//     } else {
//         field[i].textContent = "×";
//     }
}