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

for(i = 0; i < 9; i++){
    document.getElementById('item' + i).addEventListener('click',function() {
        this.textContent = '◯';
        this.setAttribute('class', 'maru');
    })
}
