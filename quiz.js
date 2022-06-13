// 最初から動作する部分

// 選択肢の配列
const answers = ['富士山','剣岳','北岳','高山'];

// 選択肢のIDの配列
const answerIDs = ['answerA','answerB','answerC','answerD'];

for (let i=0; i<4; i++){
    document.getElementById(answerIDs[i]).textContent = answers[i]
}


const seikai = "〇正解"
const fuseikai = "×不正解"
const ansA = document.getElementsById('answerA');

// クリックイベントが起こったときに動作する部分
ansA.addEventListener('click',function(){
    // ansA.textContent = "不正解"
    ansA.textContent = fuseikai;
    ansA.setAttribute('class','fuseikai');
})

document.getElementById('answerB').addEventListener('click',function(){
    // this.textContent = "不正解"
    this.textContent = fuseikai
    this.setAttribute('class','fuseikai')
})

document.getElementById('answerC').addEventListener('click',function(){
    // this.textContent = "正解"
    this.textContent = seikai
})

document.getElementById('answerD').addEventListener('click',function(){
    // this.textContent = "不正解"
    this.textContent = fuseikai
    this.setAttribute('class','fuseikai')
})