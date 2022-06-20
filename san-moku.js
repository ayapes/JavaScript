// const maru1 = document.getElementsById('item1');
// const maru = "あ";
// クリックイベントが起こったときに動作する部分
// maru1.addEventListener('click', function () {
//     maru1.textContent = maru;
//     maru1.setAttribute('class', 'maru');
// });

// const maru2 = document.getElementById('item2');
// const maru = "○";
// maru2.addEventListener('click',function(){
//     maru2.textContent = maru;
//     maru2.setAttribute('class', 'maru');

//             })


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

let field = document.querySelectorAll(".field");
let count = 0;

for (let i = 0; i < field.length; i++) {
    field[i].addEventListener('click', function () {
        count++;
        if (count % 2 == 1) {
            this.textContent = "○";
            this.setAttribute('class', 'maru');
        } else {
            this.textContent = "×";
            this.setAttribute('class', 'batsu');
        }

    }
    )
}


for (let p = 0; p < win_patterns.length; p++) {
    console.log(p);
    function () {
        if (win_patterns[p].every((n) => n == "○")) {
            field.style.backgroundColor = "red";
        } else {
            field.style.backgroundColor = "blue";
        }
    }
}