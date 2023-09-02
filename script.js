'use strict'

// h3要素を取得
const elements= document.getElementsByTagName('h3');
console.log(elements)


// 各h3要素のテキストの色をマゼンタに変更
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = 'magenta'; 
  }

//取得した「未来」にmy-futureというクラスを付加
 document.getElementById("parent").classList.add("my-future");

//my-futureを使って親要素を取得し直し
const child = document.getElementById("child");
let parent = child.closest(".my-future");
console.log(child.parentElement)

// <div> 要素を作成→クラス付加
const element = document.getElementById('parent');
const new_div_elem = document.createElement('div').classList.add("properties");
console.log(element);

// <p> 要素を作成
const new_p_elem = document.createElement('p');

// <p> タグの中身のテキストを設定
new_p_elem.textContent = 'とにかく勉強！！！インプット＆アウトプット';

// <div id="parent"> 要素の子要素に <p> 要素を追加
element.appendChild(new_p_elem);
console.log(element);

// h2要素を取得
const h2Element= document.getElementById("name");
console.log(h2Element)

//取得した自分の名前を全て大文字に更新
h2Element.textContent = h2Element.textContent.toUpperCase();

//要素の取得→querySelector()」を使うとid属性値・class属性値などを意識せずにHTML要素を取得できる
const body = document.querySelector('body');
const number = document.querySelector('h4');
const Button = document.querySelector('button');
const colors = [
  "#ffccff",
  "#ccffff",
  "#ccffcc",
  "#ffcccc",
  "#ccccff",
  "#ffffff",
];
console.log(body,number,Button,colors);

//変数の宣言
let count = 0;

//関数を定義←「変数 count の値を 1 増やして、表示される数字を変更する」addEventListener():イベントリスナー(JavaScriptからさまざまなイベント処理を実行することができるメソッド)を設定
Button.addEventListener('click', () => {
  count ++; 
  number.innerHTML = count;
  body.style.background = colors[Math.floor(Math.random() * colors.length)];
});

//Math.random()→乱数を生成　ボタンをクリックする度に背景色をランダムに変更↑44.47-54.64行目

//テキストボックスをHTMLで作成(inputタグ)→element.valueで値を取得→クリックイベント、addEventListener メソッド

function buttonClick(){
  msg.innerText =  commentText.value + '  💛Thank you💛';
}
let commentText = document.getElementById('commentText');
let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);


