const refreshBtn = document.querySelector(".refreshBtn");
const container = document.querySelector(".container");
let json, resp;

function createElements(arr) {
  container.textContent = "";
  arr.forEach((item) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let p2 = document.createElement("p");
    div.classList.add("item");
    p.classList.add("name");
    p2.classList.add("isHave");
    p.textContent = item.name;
    p2.textContent = item.isHave ? "هست" : "نیست";
    span.textContent = "=";
    div.appendChild(p2);
    div.appendChild(span);
    div.appendChild(p);
    container.appendChild(div);
  });
}
async function getJsonContent() {
  json = await fetch("scripts/products.json");
  resp = await json.json();
}
async function showJsonContent() {
  await getJsonContent();
  createElements(resp);
}
showJsonContent();
refreshBtn.addEventListener("click", showJsonContent);
