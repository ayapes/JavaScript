const maru1 = document.getElementsById('item1');
const maru = "あ";
// クリックイベントが起こったときに動作する部分
maru1.addEventListener('click', function () {
    maru1.textContent = maru;
    maru1.setAttribute('class', 'maru');
})