// Deark Mood

let body = document.querySelector("body");
let mod = document.getElementById("deark");

localStorage.getItem("mood") != null
  ? (body.className = localStorage.getItem("mood"))
  : console.log("1");
mod.addEventListener("click", function () {
  body.classList.toggle("deark");
  localStorage.setItem("mood", body.classList);
});

// // get elment by html
let title = document.getElementById("title");
let price = document.getElementById("price");
let texse = document.getElementById("texes");
let ads = document.getElementById("ads");
let discout = document.getElementById("discout");
let totle = document.getElementById("totle");
let count = document.getElementById("count");
let cadegory = document.getElementById("cadegory");
let cread = document.getElementById("creat");
let searsh = document.getElementById("searsh");
let searshByTitle = document.getElementById("searshByTitle");
let searshByCad = document.getElementById("searshByCad");
let id = document.getElementById("id");
let delatAll = document.getElementById("delateAll");

let moods = "creat";
let map;

function getTotle() {
  totle.innerText = +price.value + +texse.value + +ads.value - +discout.value;
  // Color Total
  price.value != "" && texse.value != "" && ads.value != ""
    ? (totle.style.background = "green")
    : (totle.style.background = "red");
}

// read dATA
let prodect;

if (localStorage.datapro != null) {
  prodect = JSON.parse(localStorage.datapro);
} else {
  prodect = [];
}
prodect;

cread.onclick = function () {
  readData = {
    title: title.value,
    totle: totle.value,
    price: price.value,
    texse: texse.value,
    ads: ads.value,
    discout: discout.value,
    totle: totle.innerText,
    count: count.value,
    cadegory: cadegory.value,
  };

  if (
    title.value != "" &&
    price.value != "" &&
    texse.value != "" &&
    count.value <= 100
  ) {
    if (moods === "creat") {
      if (readData.count > 1) {
        for (let c = 0; c < readData.count; c++) {
          prodect.push(readData);
        }
      } else {
        prodect.push(readData);
      }
    } else {
      prodect[map] = readData;
      cread.innerText = "creat";
      cread.style.background = "rgb(65, 8, 118";
      count.style.display = "block";
    }
  }
  localStorage.setItem("datapro", JSON.stringify(prodect));
  showData();
};

// showDta
function showData() {
  let table = ``;
  for (let i = 0; i < prodect.length; i++) {
    table += `
<tr>
<td>${[i + 1]}</td>
<td>${prodect[i].title}</td>
<td>${prodect[i].price}</td>
<td>${prodect[i].texse}</td>
<td>${prodect[i].ads}</td>
<td>${prodect[i].discout}</td>
<td>${prodect[i].totle}</td>
<td>${prodect[i].count}</td>
<td>${prodect[i].cadegory}</td>
<td><button onclick="update(${i})">upbdate <buteen></td>
<td><button onclick="delatOne(${i})">delete<buteen></td>
</tr>
`;
  }
  let tbody = (document.getElementById("tbody").innerHTML = table);
  title.value = "";
  totle.value = "";
  price.value = "";
  texse.value = "";
  ads.value = "";
  discout.value = "";
  totle.innerText = "";
  count.value = "";
  cadegory.value = "";
  // show Delat All
  prodect.length > 0
    ? delatAll.classList.add("show")
    : delatAll.classList.remove("show");
}
showData();

// clearData
function clearDtat() {
  prodect.splice(0);
  localStorage.clear();
  showData();
}

// Delat One
function delatOne(i) {
  prodect.splice(i, 1);
  localStorage.setItem("datapro", JSON.stringify(prodect));
  showData();
}

function update(i) {
  title.value = prodect[i].title;
  price.value = prodect[i].price;
  texse.value = prodect[i].texse;
  ads.value = prodect[i].ads;
  discout.value = prodect[i].discout;
  count.value = prodect[i].count;
  totle.innerText = prodect[i].totle;
  cadegory.value = prodect[i].cadegory;
  count.style.display = "none";
  cread.innerText = "update";
  cread.style.background = "green";
  moods = "update";
  map = i;
}

// shear
let sears = "title";
let buttonSE = document.getElementById("searsh");
function sar(id) {
  if (id === "searshByTitle") {
    sears = "title";
    buttonSE.placeholder = "searsh ByTitle";
  } else {
    sears = "dag";
    buttonSE.placeholder = "searshBy Cad";
  }
  buttonSE.focus();
  buttonSE.value = "";
}

function searshDta(value) {
  let table = ``;
  for (let i = 0; i < prodect.length; i++) {
    if (prodect[i].title.includes(value)) {
      table += `
      <tr>
      <td>${[i + 1]}</td>
      <td>${prodect[i].title}</td>
      <td>${prodect[i].price}</td>
      <td>${prodect[i].texse}</td>
      <td>${prodect[i].ads}</td>
      <td>${prodect[i].discout}</td>
      <td>${prodect[i].totle}</td>
      <td>${prodect[i].count}</td>
      <td>${prodect[i].cadegory}</td>
      <td><button onclick="update(${i})">upbdate <buteen></td>
      <td><button onclick="delatOne(${i})">delete<buteen></td>
      </tr>
      `;
    } else {
      if (prodect[i].cadegory.includes(value)) {
        table += `
        <tr>
        <td>${[i + 1]}</td>
        <td>${prodect[i].title}</td>
        <td>${prodect[i].price}</td>
        <td>${prodect[i].texse}</td>
        <td>${prodect[i].ads}</td>
        <td>${prodect[i].discout}</td>
        <td>${prodect[i].totle}</td>
        <td>${prodect[i].count}</td>
        <td>${prodect[i].cadegory}</td>
        <td><button onclick="update(${i})">upbdate <buteen></td>
        <td><button onclick="delatOne(${i})">delete<buteen></td>
        </tr>
        `;
      }
    }
  }

  let tbody = (document.getElementById("tbody").innerHTML = table);
}
