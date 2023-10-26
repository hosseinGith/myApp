const container = document.querySelector(".container");
let json, resp;

function createElements(arr) {
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
    div.appendChild(p);
    div.appendChild(span);
    div.appendChild(p2);
    container.appendChild(div);
  });
}
async function getJsonContent() {
  json = await fetch("http://127.0.0.1:5500/scripts/products.json");
  resp = await json.json();
}
async function showJsonContent() {
  await getJsonContent();
  createElements(resp);
}
showJsonContent();
