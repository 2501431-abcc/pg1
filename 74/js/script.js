// 配列用意
let entries = [];

//ページ読み込み localStorage からデータ
window.addEventListener("load", function() {
  const saved = localStorage.getItem("entries");
  if (saved) {
  
    entries = JSON.parse(saved);
    renderList();
  }
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  //入力値 取得
  let name = document.getElementById("username").value;

  //日付 時刻
  let now = new Date();
  let dateTime = now.toLocaleString("ja-JP");

  //入力値 配列 追加
  entries.push({ name: name, time: dateTime });

  //console.log 確認
  console.log("現在の配列:", entries);

  //localStorage 保存
  localStorage.setItem("entries", JSON.stringify(entries));


  renderList();

  // 入力欄 空
  document.getElementById("myForm").reset();
});

//表示 関数
function renderList() {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  //forEach
  entries.forEach((entry, index) => {
    let p = document.createElement("p");
    p.textContent = `${index + 1}: ${entry.name} （${entry.time}）`;
    outputDiv.appendChild(p);
  });
}